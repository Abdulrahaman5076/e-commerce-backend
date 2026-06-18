const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderNumber: { type: String, unique: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
    quantity: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true }
  }],
  vendorOrders: [{
    vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' },
    items: [{ product: mongoose.Schema.Types.ObjectId, quantity: Number, price: Number }],
    subtotal: Number,
    vendorCommission: Number,
    status: { type: String, enum: ['pending', 'confirmed', 'shipped', 'delivered'], default: 'pending' },
    trackingNumber: String
  }],
  shippingAddress: {
    name: String, phone: String, street: String, city: String, state: String, zipCode: String, country: String
  },
  paymentMethod: { type: String, enum: ['card', 'bank_transfer', 'cod'], required: true },
  subtotal: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  taxPrice: { type: Number, default: 0 },
  shippingPrice: { type: Number, default: 0 },
  status: { type: String, enum: ['pending', 'confirmed', 'shipped', 'delivered'], default: 'pending' },
  paymentStatus: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
  transactionId: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

orderSchema.pre('save', async function(next) {
  if (!this.orderNumber) {
    const count = await mongoose.model('Order').countDocuments();
    this.orderNumber = `ORD-${Date.now()}-${count + 1}`;
  }
  next();
});

module.exports = mongoose.model('Order', orderSchema);
