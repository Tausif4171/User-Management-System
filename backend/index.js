import express from 'express'
import cors from 'cors' // middleware in between frontend and backend
import bodyParser from 'body-parser'

const app = express()
const port = 5000

app.use(bodyParser.json())
app.use(cors())

app.get('/',(req,res)=>res.send('Hello from express'))

app.listen(port,()=>
console.log(`server is running on: http://localhost:${port}`))