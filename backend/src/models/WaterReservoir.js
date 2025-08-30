const mongoose = require('mongoose');

const waterReservoirSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Reservoir name is required'],
    trim: true,
    maxlength: [200, 'Reservoir name cannot exceed 200 characters']
  },
  county: {
    type: String,
    required: [true, 'County is required'],
    trim: true
  },
  subCounty: {
    type: String,
    required: [true, 'Sub-county is required'],
    trim: true
  },
  ward: {
    type: String,
    trim: true
  },
  latitude: {
    type: Number,
    required: [true, 'Latitude is required'],
    min: [-4.5, 'Latitude must be valid for Kenya'],
    max: [4.5, 'Latitude must be valid for Kenya']
  },
  longitude: {
    type: Number,
    required: [true, 'Longitude is required'],
    min: [33.5, 'Longitude must be valid for Kenya'],
    max: [42.0, 'Longitude must be valid for Kenya']
  },
  totalCapacityM3: {
    type: Number,
    required: [true, 'Total capacity is required'],
    min: [0, 'Total capacity must be positive']
  },
  currentLevelM3: {
    type: Number,
    required: [true, 'Current water level is required'],
    min: [0, 'Current water level must be positive']
  },
  waterQuality: {
    type: String,
    enum: ['excellent', 'good', 'fair', 'poor'],
    default: 'good'
  },
  status: {
    type: String,
    enum: ['operational', 'maintenance', 'critical', 'decommissioned'],
    default: 'operational'
  },
  managedBy: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true,
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  contactPhone: {
    type: String,
    trim: true
  },
  contactEmail: {
    type: String,
    trim: true,
    lowercase: true
  },
  estimatedRunoutDate: {
    type: Date
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Index for location-based queries
waterReservoirSchema.index({ county: 1, subCounty: 1 });
waterReservoirSchema.index({ latitude: 1, longitude: 1 });

// Virtual for current capacity percentage
waterReservoirSchema.virtual('currentCapacityPercentage').get(function() {
  if (this.totalCapacityM3 === 0) return 0;
  return Math.round((this.currentLevelM3 / this.totalCapacityM3) * 100);
});

// Ensure virtual fields are serialized
waterReservoirSchema.set('toJSON', { virtuals: true });
waterReservoirSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('WaterReservoir', waterReservoirSchema);

