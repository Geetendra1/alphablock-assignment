import mongoose from 'mongoose'
import { config } from './index.js'


export const connectDB = async () => {
    try {

        await mongoose.connect(config.MONGODB_URI, {
            serverApi : {    
                version: '1',
                strict: true,
                deprecationErrors: true
            }
        })

        console.log('MongoDb Connected');
        
    } catch (error) {
        console.log('db connection failed ', error);
        process.exit(1)
    }
}