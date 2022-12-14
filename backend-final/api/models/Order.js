import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  costumer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Costumer',
    required: true,
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  }],
  total: {
    type: Number,
    required: true,
    default: 0,
  }
});

export default mongoose.model('Order', orderSchema);
