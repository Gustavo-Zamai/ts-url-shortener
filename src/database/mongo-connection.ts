import mongoose from 'mongoose';
import { config } from '../config/constants';

export class MongoConnection {
  public async connect(): Promise<void> {
    if (!config.MONGO_CONNECTION) {
      throw new Error('MONGO_CONNECTION is not defined in config');
    }

    try {
      await mongoose.connect(config.MONGO_CONNECTION);
      console.log('Database Connected');
    } catch (err) {
      console.error('Database connection error:', err);
      process.exit(1);
    }
  }
}
