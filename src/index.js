import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dbConfig from './config/dbConfig'
import routes from './routes'

const PORT = process.env.NODE_URL || 8080
const app = express()
const router = express.Router()

dbConfig(process.env.MONGO_URI || 'mongodb://localhost:27017/smartlend')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())


app.use("/", function (req, res, next) {
    next()
}, routes(router))

app.listen(PORT, () => {
    console.log(`Application is running on port ${PORT}`)
})