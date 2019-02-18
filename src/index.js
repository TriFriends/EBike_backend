import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dbConfig from './config/dbConfig'
import routes from './routes'
import { CategoryRepository, CategoryCollection } from './repositories/CategoryRepository'

const PORT = 3000
const app = express()
const router = express.Router()

dbConfig(process.env.MONGO_URI || 'mongodb://localhost:27017/smartlend')

// const categoryRepository = new CategoryRepository(CategoryCollection)
// categoryRepository.onInit()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use('/', routes(router))

app.listen(PORT, () => {
    console.log(`Application is running on port ${PORT}`)
})