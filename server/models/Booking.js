import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  adults: { type: Number, required: true },
  children: { type: Number, required: true },
  message: { type: String }
}, { timestamps: true });

export default mongoose.model('Booking', bookingSchema);
