const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
  name: String,
  description: String,
  menu: [
    {
      itemName: String,
      price: Number
    }
  ],
  vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Shop', shopSchema);
