const mongoose = require('mongoose');

const connectDB = async () => {
  const maxRetries = 5;
  let retryCount = 0;

  const tryConnect = async () => {
    try {
      if (!process.env.MONGODB_URI) {
        throw new Error('MONGODB_URI is not defined in environment variables');
      }

      console.log('📡 Attempting MongoDB connection...');

      const conn = await mongoose.connect(process.env.MONGODB_URI, {
        serverSelectionTimeoutMS: 5000,
        maxPoolSize: 10,
        minPoolSize: 2,
        socketTimeoutMS: 45000,
        connectTimeoutMS: 10000,
      });

      console.log('✅ MongoDB Connected Successfully');
      console.log(`📡 Host: ${conn.connection.host}`);
      console.log(`🗄️ Database: ${conn.connection.name}`);

      // Test query
      const testCollection = conn.connection.db.collection('test');
      const testResult = await testCollection.insertOne({ test: 'MongoDB Atlas connection successful' });
      console.log('✅ Test query result:', testResult);

      // Add error handler for after initial connection
      mongoose.connection.on('error', (err) => {
        console.error('❌ MongoDB connection error:', err);
      });

      mongoose.connection.on('disconnected', () => {
        console.log('❌ MongoDB disconnected. Attempting to reconnect...');
      });

      mongoose.connection.on('reconnected', () => {
        console.log('✅ MongoDB reconnected successfully');
      });

      return true;
    } catch (error) {
      console.error('❌ MongoDB connection attempt failed:', error.message);

      if (error.name === 'MongooseServerSelectionError') {
        console.log('⚠️ Could not reach MongoDB server. Please check if MongoDB is running.');
      }

      if (retryCount < maxRetries) {
        retryCount++;
        console.log(`🔄 Retrying MongoDB connection (${retryCount}/${maxRetries})...`);
        await new Promise((resolve) => setTimeout(resolve, 5000));
        return await tryConnect();
      } else {
        console.error('❌ Max retries reached. Could not connect to MongoDB.');
        process.exit(1);
      }
    }
  };

  return await tryConnect();
};

module.exports = connectDB;