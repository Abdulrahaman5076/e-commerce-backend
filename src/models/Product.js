const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 100 },
  description: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  discountPrice: Number,
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  stock: { type: Number, required: true, default: 0, min: 0 },
  sku: { type: String, unique: true },
  rating: { type: Number, default: 0, min: 0, max: 5 },
  numOfReviews: { type: Number, default: 0 },
  images: [{ public_id: String, url: String }],
  isActive: { type: Boolean, default: true },
  views: { type: Number, default: 0 },
  sales: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

productSchema.index({ name: 'text', description: 'text' });
productSchema.index({ vendor: 1 });
productSchema.index({ category: 1 });

module.exports = mongoose.model('Product', productSchema);
