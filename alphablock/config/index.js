// config 

import dotEnv from 'dotenv'


dotEnv.config()
export const config = {
    PORT: process.env.PORT,
    OPENAI_API_KEY:process.env.OPENAI_API_KEY,
    MONGODB_URI:process.env.MONGODB_URI
}