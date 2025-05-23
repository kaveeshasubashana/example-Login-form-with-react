const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  shopId: { type: mongoose.Schema.Types.ObjectId, ref: 'Shop' },
  items: [{ itemName: String, quantity: Number }],
  hostel: String,
  contactNumber: String,
  time: String,
  status: { type: String, default: 'Pending' }
});

module.exports = mongoose.model('Order', orderSchema);
