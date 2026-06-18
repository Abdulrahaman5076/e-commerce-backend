const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  shopName: { type: String, required: true, trim: true, unique: true },
  shopSlug: { type: String, unique: true, lowercase: true },
  description: String,
  categoryNiche: { type: String, required: true },
  status: { type: String, enum: ['pending', 'approved', 'suspended'], default: 'pending' },
  rating: { type: Number, default: 0, min: 0, max: 5 },
  totalProducts: { type: Number, default: 0 },
  totalOrders: { type: Number, default: 0 },
  commission: {
    rate: { type: Number, default: 0.1 },
    totalEarned: { type: Number, default: 0 },
    totalWithdrawn: { type: Number, default: 0 }
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

vendorSchema.pre('save', function(next) {
  if (this.isModified('shopName')) {
    this.shopSlug = this.shopName.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  }
  next();
});

module.exports = mongoose.model('Vendor', vendorSchema);
