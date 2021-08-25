import * as mongoose from 'mongoose';
import { connect } from 'mongoose';
import config from './config';
let dbConnection: mongoose.Connection;

const connectToMongo = async () => {
  try {
    await mongoose.connect(config.mongo.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    dbConnection = mongoose.connection;
    dbConnection.on('connecting', () => {
      console.log('connecting to mongoDB...');
    });
    dbConnection.on('error', (error) => {
      console.error(`Error in MongoDb connection: ${error}`);
      mongoose.disconnect();
    });
    dbConnection.on('connected', () => {
      console.log('MongoDB connected!');
    });
    dbConnection.on('disconnected', () => {
      console.log('MongoDB disconnected!');
      connectToMongo();
    });
  } catch {
    console.log('failed to connect to MongoDB...');
  }

};

const getConnection = async () => {
    if (!dbConnection) {
        await connectToMongo();
    }
    return dbConnection;
};
export default getConnection;


