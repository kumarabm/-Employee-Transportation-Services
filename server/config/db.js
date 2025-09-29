// db.js
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;

    if (!mongoURI) {
      console.log('⚠️ No MONGODB_URI found in environment variables');
      console.log('📝 To enable database functionality, please set MONGODB_URI in your .env file');
      console.log('💡 You can use MongoDB Atlas (cloud) or local MongoDB');
      return;
    }

    await mongoose.connect(mongoURI);
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    console.log('⚠️ Server will continue without database functionality');
    console.log('💡 Please check your MONGODB_URI and ensure MongoDB is running');
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('⚠️ MongoDB disconnected! Trying to reconnect...');
});

mongoose.connection.on('connected', () => {
  console.log('🔄 MongoDB reconnected!');
});

mongoose.connection.on('error', (err) => {
  console.error('❌ MongoDB connection error:', err);
});

export default connectDB;
