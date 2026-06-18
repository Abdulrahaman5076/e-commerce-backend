const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
    quantity: { type: Number, required: true, min: 1, default: 1 },
    price: { type: Number, required: true },
    addedAt: { type: Date, default: Date.now }
  }],
  subtotal: { type: Number, default: 0 },
  taxPrice: { type: Number, default: 0 },
  shippingPrice: { type: Number, default: 0 },
  total: { type: Number, default: 0 },
  updatedAt: { type: Date, default: Date.now }
});

cartSchema.methods.calculateTotals = function() {
  this.subtotal = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  this.total = this.subtotal + this.taxPrice + this.shippingPrice;
  return this;
};

module.exports = mongoose.model('Cart', cartSchema);
