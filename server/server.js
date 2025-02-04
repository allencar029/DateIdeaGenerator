import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import askQuestionRouter from './routes/dateIdeas.routes.js'

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api', askQuestionRouter)
dotenv.config()
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Listneing on port: ${PORT}`);
})