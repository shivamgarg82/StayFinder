import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  images: { type: [String], default: [] },
  host: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

export default mongoose.model('Listing', listingSchema);
