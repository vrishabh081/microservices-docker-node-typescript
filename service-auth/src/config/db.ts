import mongoose from "mongoose";

export const dbConnection = mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/auth')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB connection error:', err));

