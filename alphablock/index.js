import express from 'express'
import bodyParser from 'body-parser'
import { config } from './config/index.js'
import aiRoutes from './routes/apis/ai.js'
import { connectDB } from './config/db.js'

const app = express()
const port = config.PORT

connectDB()

app.use(bodyParser.json())
// app.use()
app.use('/api/ai',aiRoutes)

app.listen(port,() => {
    console.log(`server is running on port : ${port}`);
})