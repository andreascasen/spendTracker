import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

import { entryRouter } from './routes/entry'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
	res.send('Express + TypeScript Server')
})

app.use('/entry', entryRouter)

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`)
})
