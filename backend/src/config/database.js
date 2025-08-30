const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGODB_URI || 'mongodb://localhost:27017/water-reservoirs',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log(`📦 MongoDB Connected: ${conn.connection.host}`);
    
    // Initialize sample data if database is empty
    await initializeSampleData();
    
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

const initializeSampleData = async () => {
  try {
    const User = require('../models/User');
    const WaterReservoir = require('../models/WaterReservoir');
    
    // Check if data already exists
    const userCount = await User.countDocuments();
    const reservoirCount = await WaterReservoir.countDocuments();
    
    if (userCount === 0) {
      // Create sample users
      const sampleUsers = [
        {
          fullName: 'John Doe',
          email: 'john@example.com',
          password: 'password123',
          role: 'admin'
        },
        {
          fullName: 'Jane Smith',
          email: 'jane@example.com',
          password: 'password123',
          role: 'user'
        }
      ];
      
      for (const userData of sampleUsers) {
        const user = new User(userData);
        await user.save();
      }
      console.log('✅ Sample users created');
    }
    
    if (reservoirCount === 0) {
      // Create sample Kenyan water reservoirs
      const sampleReservoirs = [
        {
          name: 'Ndakaini Dam',
          county: 'Murang\'a',
          subCounty: 'Gatanga',
          ward: 'Ithanga',
          latitude: -0.6833,
          longitude: 37.0167,
          totalCapacityM3: 70000000,
          currentLevelM3: 45000000,
          waterQuality: 'excellent',
          status: 'operational',
          managedBy: 'Tana and Athi Rivers Development Authority',
          description: 'Major water source for Nairobi metropolitan area',
          contactPhone: '+254-20-1234567',
          contactEmail: 'info@tarda.go.ke',
          estimatedRunoutDate: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000)
        },
        {
          name: 'Ruiru Dam',
          county: 'Kiambu',
          subCounty: 'Ruiru',
          ward: 'Ruiru',
          latitude: -1.1500,
          longitude: 36.9500,
          totalCapacityM3: 15000000,
          currentLevelM3: 12000000,
          waterQuality: 'good',
          status: 'operational',
          managedBy: 'Athi Water Works Development Agency',
          description: 'Water supply for Ruiru and surrounding areas',
          contactPhone: '+254-20-2345678',
          contactEmail: 'info@awwda.go.ke',
          estimatedRunoutDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
        },
        {
          name: 'Karimenu II Dam',
          county: 'Kiambu',
          subCounty: 'Gatundu North',
          ward: 'Gatundu',
          latitude: -1.0500,
          longitude: 36.8500,
          totalCapacityM3: 26000000,
          currentLevelM3: 18000000,
          waterQuality: 'excellent',
          status: 'operational',
          managedBy: 'Athi Water Works Development Agency',
          description: 'Strategic water reservoir for Nairobi region',
          contactPhone: '+254-20-3456789',
          contactEmail: 'info@awwda.go.ke',
          estimatedRunoutDate: new Date(Date.now() + 35 * 24 * 60 * 60 * 1000)
        },
        {
          name: 'Lake Nakuru',
          county: 'Nakuru',
          subCounty: 'Nakuru East',
          ward: 'Lake View',
          latitude: -0.3667,
          longitude: 36.0833,
          totalCapacityM3: 200000000,
          currentLevelM3: 150000000,
          waterQuality: 'fair',
          status: 'operational',
          managedBy: 'Kenya Wildlife Service',
          description: 'Natural lake with significant water storage capacity',
          contactPhone: '+254-51-123456',
          contactEmail: 'info@kws.go.ke',
          estimatedRunoutDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
        },
        {
          name: 'Mbaraki Reservoir',
          county: 'Mombasa',
          subCounty: 'Mvita',
          ward: 'Mbaraki',
          latitude: -4.0500,
          longitude: 39.6667,
          totalCapacityM3: 8000000,
          currentLevelM3: 5000000,
          waterQuality: 'good',
          status: 'operational',
          managedBy: 'Mombasa Water and Sewerage Company',
          description: 'Coastal water storage facility',
          contactPhone: '+254-41-123456',
          contactEmail: 'info@mowasco.co.ke',
          estimatedRunoutDate: new Date(Date.now() + 25 * 24 * 60 * 60 * 1000)
        },
        {
          name: 'Kisumu Water Works',
          county: 'Kisumu',
          subCounty: 'Kisumu Central',
          ward: 'Railways',
          latitude: -0.1000,
          longitude: 34.7500,
          totalCapacityM3: 12000000,
          currentLevelM3: 8000000,
          waterQuality: 'good',
          status: 'operational',
          managedBy: 'Kisumu Water and Sewerage Company',
          description: 'Lake Victoria water treatment and storage',
          contactPhone: '+254-57-123456',
          contactEmail: 'info@kiwasco.co.ke',
          estimatedRunoutDate: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000)
        },
        {
          name: 'Eldoret Dam',
          county: 'Uasin Gishu',
          subCounty: 'Eldoret East',
          ward: 'Kipkaren',
          latitude: 0.5167,
          longitude: 35.2833,
          totalCapacityM3: 18000000,
          currentLevelM3: 14000000,
          waterQuality: 'excellent',
          status: 'operational',
          managedBy: 'Eldoret Water and Sewerage Company',
          description: 'Highland water storage facility',
          contactPhone: '+254-53-123456',
          contactEmail: 'info@eldowas.co.ke',
          estimatedRunoutDate: new Date(Date.now() + 40 * 24 * 60 * 60 * 1000)
        },
        {
          name: 'Thika High Level Dam',
          county: 'Kiambu',
          subCounty: 'Thika West',
          ward: 'Thika West',
          latitude: -1.0333,
          longitude: 37.0833,
          totalCapacityM3: 22000000,
          currentLevelM3: 16000000,
          waterQuality: 'good',
          status: 'operational',
          managedBy: 'Athi Water Works Development Agency',
          description: 'Industrial water supply for Thika region',
          contactPhone: '+254-20-4567890',
          contactEmail: 'info@awwda.go.ke',
          estimatedRunoutDate: new Date(Date.now() + 50 * 24 * 60 * 60 * 1000)
        },
        {
          name: 'Chania Dam',
          county: 'Kiambu',
          subCounty: 'Thika West',
          ward: 'Chania',
          latitude: -1.1000,
          longitude: 37.0500,
          totalCapacityM3: 16000000,
          currentLevelM3: 11000000,
          waterQuality: 'excellent',
          status: 'operational',
          managedBy: 'Athi Water Works Development Agency',
          description: 'Scenic reservoir with good water quality',
          contactPhone: '+254-20-5678901',
          contactEmail: 'info@awwda.go.ke',
          estimatedRunoutDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
        },
        {
          name: 'Machakos Water Works',
          county: 'Machakos',
          subCounty: 'Machakos Town',
          ward: 'Machakos Central',
          latitude: -1.5167,
          longitude: 37.2667,
          totalCapacityM3: 10000000,
          currentLevelM3: 6000000,
          waterQuality: 'fair',
          status: 'operational',
          managedBy: 'Machakos Water and Sewerage Company',
          description: 'Semi-arid region water storage',
          contactPhone: '+254-44-123456',
          contactEmail: 'info@mawasco.co.ke',
          estimatedRunoutDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000)
        },
        {
          name: 'Kitui Dam',
          county: 'Kitui',
          subCounty: 'Kitui Central',
          ward: 'Kitui Central',
          latitude: -1.3667,
          longitude: 38.0167,
          totalCapacityM3: 8000000,
          currentLevelM3: 4000000,
          waterQuality: 'good',
          status: 'operational',
          managedBy: 'Kitui Water and Sewerage Company',
          description: 'Eastern Kenya water storage facility',
          contactPhone: '+254-44-234567',
          contactEmail: 'info@kiwasco.co.ke',
          estimatedRunoutDate: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000)
        },
        {
          name: 'Garissa Reservoir',
          county: 'Garissa',
          subCounty: 'Garissa Township',
          ward: 'Garissa Township',
          latitude: -0.4500,
          longitude: 39.6500,
          totalCapacityM3: 6000000,
          currentLevelM3: 2500000,
          waterQuality: 'fair',
          status: 'critical',
          managedBy: 'Garissa Water and Sewerage Company',
          description: 'Northern Kenya water storage',
          contactPhone: '+254-46-123456',
          contactEmail: 'info@gawasco.co.ke',
          estimatedRunoutDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)
        }
      ];
      
      for (const reservoirData of sampleReservoirs) {
        const reservoir = new WaterReservoir(reservoirData);
        await reservoir.save();
      }
      console.log('✅ Sample reservoirs created');
    }
    
  } catch (error) {
    console.error('❌ Error initializing sample data:', error);
  }
};

module.exports = connectDB;

