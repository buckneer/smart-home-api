import {ConnectOptions} from "mongodb";
import mongoose from 'mongoose';
import log from '../utils'

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI!);
    log.info('MongoDb Connected');
}


export default connectDB;
