const express = require('express');
const auth = require('../middleware/auth');
const WaterReservoir = require('../models/WaterReservoir');

const router = express.Router();

// Get all reservoirs
router.get('/', async (req, res) => {
  try {
    const reservoirs = await WaterReservoir.find().sort({ name: 1 });
    res.json(reservoirs);
  } catch (error) {
    console.error('Error fetching reservoirs:', error);
    res.status(500).json({ error: 'Error fetching reservoirs' });
  }
});

// Search reservoirs by location
router.get('/search', async (req, res) => {
  try {
    const { county, subCounty, ward } = req.query;
    let query = {};

    if (county) {
      query.county = { $regex: county, $options: 'i' };
    }
    if (subCounty) {
      query.subCounty = { $regex: subCounty, $options: 'i' };
    }
    if (ward) {
      query.ward = { $regex: ward, $options: 'i' };
    }

    const reservoirs = await WaterReservoir.find(query).sort({ name: 1 });
    res.json(reservoirs);
  } catch (error) {
    console.error('Error searching reservoirs:', error);
    res.status(500).json({ error: 'Error searching reservoirs' });
  }
});

// Get reservoirs by status
router.get('/status/:status', async (req, res) => {
  try {
    const { status } = req.params;
    const reservoirs = await WaterReservoir.find({ status }).sort({ name: 1 });
    res.json(reservoirs);
  } catch (error) {
    console.error('Error fetching reservoirs by status:', error);
    res.status(500).json({ error: 'Error fetching reservoirs by status' });
  }
});

// Get critical reservoirs (low water levels)
router.get('/critical', async (req, res) => {
  try {
    const criticalThreshold = 0.2; // 20% capacity
    const reservoirs = await WaterReservoir.find({
      $expr: {
        $lt: [
          { $divide: ['$currentLevelM3', '$totalCapacityM3'] },
          criticalThreshold
        ]
      }
    }).sort({ currentLevelM3: 1 });
    
    res.json(reservoirs);
  } catch (error) {
    console.error('Error fetching critical reservoirs:', error);
    res.status(500).json({ error: 'Error fetching critical reservoirs' });
  }
});

// Get reservoirs running out soon
router.get('/running-out-soon', async (req, res) => {
  try {
    const today = new Date();
    const thirtyDaysFromNow = new Date(today.getTime() + (30 * 24 * 60 * 60 * 1000));
    
    const reservoirs = await WaterReservoir.find({
      estimatedRunoutDate: {
        $gte: today,
        $lte: thirtyDaysFromNow
      }
    }).sort({ estimatedRunoutDate: 1 });
    
    res.json(reservoirs);
  } catch (error) {
    console.error('Error fetching reservoirs running out soon:', error);
    res.status(500).json({ error: 'Error fetching reservoirs running out soon' });
  }
});

// Get reservoir recommendations using Inflection AI
router.get('/recommendations', auth, async (req, res) => {
  try {
    const { location, waterQuality, capacity } = req.query;
    
    // Build recommendation query based on user preferences
    let query = {};
    
    if (location) {
      query.$or = [
        { county: { $regex: location, $options: 'i' } },
        { subCounty: { $regex: location, $options: 'i' } },
        { ward: { $regex: location, $options: 'i' } }
      ];
    }
    
    if (waterQuality) {
      query.waterQuality = waterQuality;
    }
    
    if (capacity === 'high') {
      query.$expr = { $gte: [{ $divide: ['$currentLevelM3', '$totalCapacityM3'] }, 0.7] };
    } else if (capacity === 'medium') {
      query.$expr = {
        $and: [
          { $gte: [{ $divide: ['$currentLevelM3', '$totalCapacityM3'] }, 0.3] },
          { $lt: [{ $divide: ['$currentLevelM3', '$totalCapacityM3'] }, 0.7] }
        ]
      };
    }
    
    const recommendations = await WaterReservoir.find(query)
      .sort({ currentLevelM3: -1 })
      .limit(10);
    
    // Enhanced recommendations using Inflection AI API
    if (recommendations.length > 0) {
      try {
        const aiRecommendations = await getAIRecommendations(recommendations, req.user);
        res.json({
          reservoirs: recommendations,
          aiInsights: aiRecommendations,
          message: 'Recommendations generated with AI insights'
        });
      } catch (aiError) {
        console.error('AI recommendation error:', aiError);
        // Fallback to basic recommendations if AI fails
        res.json({
          reservoirs: recommendations,
          message: 'Basic recommendations (AI temporarily unavailable)'
        });
      }
    } else {
      res.json({
        reservoirs: [],
        message: 'No reservoirs match your criteria'
      });
    }
  } catch (error) {
    console.error('Error getting recommendations:', error);
    res.status(500).json({ error: 'Error getting recommendations' });
  }
});

// Get reservoir by ID
router.get('/:id', async (req, res) => {
  try {
    const reservoir = await WaterReservoir.findById(req.params.id);
    if (!reservoir) {
      return res.status(404).json({ error: 'Reservoir not found' });
    }
    res.json(reservoir);
  } catch (error) {
    console.error('Error fetching reservoir:', error);
    res.status(500).json({ error: 'Error fetching reservoir' });
  }
});

// Create new reservoir (admin only)
router.post('/', auth, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied. Admin only.' });
    }
    
    const reservoir = new WaterReservoir(req.body);
    await reservoir.save();
    res.status(201).json(reservoir);
  } catch (error) {
    console.error('Error creating reservoir:', error);
    res.status(500).json({ error: 'Error creating reservoir' });
  }
});

// Update reservoir (admin only)
router.put('/:id', auth, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied. Admin only.' });
    }
    
    const reservoir = await WaterReservoir.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!reservoir) {
      return res.status(404).json({ error: 'Reservoir not found' });
    }
    
    res.json(reservoir);
  } catch (error) {
    console.error('Error updating reservoir:', error);
    res.status(500).json({ error: 'Error updating reservoir' });
  }
});

// Delete reservoir (admin only)
router.delete('/:id', auth, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied. Admin only.' });
    }
    
    const reservoir = await WaterReservoir.findByIdAndDelete(req.params.id);
    if (!reservoir) {
      return res.status(404).json({ error: 'Reservoir not found' });
    }
    
    res.json({ message: 'Reservoir deleted successfully' });
  } catch (error) {
    console.error('Error deleting reservoir:', error);
    res.status(500).json({ error: 'Error deleting reservoir' });
  }
});

// AI Recommendation function using Inflection AI
async function getAIRecommendations(reservoirs, user) {
  const API_KEY = 'Q89ycThV5pPkWJpNQczYmuLMG4NufpHIsGJQGSmZYQ';
  const API_URL = 'https://api.inflection.ai/v1/chat/completions';
  
  try {
    const reservoirData = reservoirs.map(r => ({
      name: r.name,
      county: r.county,
      subCounty: r.subCounty,
      currentCapacity: r.currentCapacityPercentage,
      waterQuality: r.waterQuality,
      status: r.status
    }));
    
    const prompt = `As a water management expert, analyze these Kenyan water reservoirs and provide personalized recommendations for user ${user.fullName}. 
    
    Reservoirs: ${JSON.stringify(reservoirData)}
    
    Please provide:
    1. Top 3 recommended reservoirs with reasons
    2. Water quality insights
    3. Capacity management tips
    4. Any urgent alerts or warnings
    
    Keep the response concise and actionable.`;
    
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'inflection-2.5',
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 500,
        temperature: 0.7
      })
    });
    
    if (!response.ok) {
      throw new Error(`AI API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.choices[0]?.message?.content || 'AI insights temporarily unavailable';
    
  } catch (error) {
    console.error('AI recommendation error:', error);
    throw error;
  }
}

module.exports = router;

