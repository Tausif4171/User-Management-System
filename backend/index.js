import express from 'express'
import cors from 'cors' // middleware in between frontend and backend
import bodyParser from 'body-parser'
import userRoutes from '../backend/routes/users.js'
const app = express()
const port = 5000

app.use(bodyParser.json())

app.use(cors())


app.use('/', userRoutes)

app.get('/', (req, res) => res.send('Hello from express'))

app.all('*', (req, res) => res.send('That route does not exist.'))

app.listen(port, () =>
    console.log(`server is running on: http://localhost:${port}`))