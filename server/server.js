import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import shortLinkRoutes from './src/routes/shortLinkRoutes.js'
import redirectRoutes from './src/routes/redirectRoutes.js'
import authRoutes from './src/routes/authRoutes.js'

dotenv.config()
const app = express()
const port = process.env.SERVER_PORT

app.use(cors());
app.use(express.json());

app.use('/api/shortlink', shortLinkRoutes);
app.use('/api/auth', authRoutes);
app.use('/', redirectRoutes);

app.listen(port, () => {
	console.log(`App is listening on http://localhost:${port}`)
})