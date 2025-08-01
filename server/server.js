import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import shortenerRoute from './src/routes/shortenerRoute.js'

dotenv.config()
const app = express()
const port = process.env.SERVER_PORT

app.use(cors());
app.use(express.json());

app.use('/api', shortenerRoute);

app.listen(port, () => {
	console.log(`App is listening on http://localhost:${port}`)
})