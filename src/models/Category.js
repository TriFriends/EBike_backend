import mongoose from 'mongoose'
const Schema = mongoose.Schema
import { productSchema } from './product'

let categorySchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    products: [productSchema]
})

let CategoryCollection = mongoose.model('Category', categorySchema)

export {
    CategoryCollection
}

