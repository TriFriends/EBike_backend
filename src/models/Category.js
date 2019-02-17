import mongoose from 'mongoose'
const { Schema } = mongoose
import { productSchema } from './product'

const categorySchema = new Schema({
    category_name: {
        type: String,
        required: true,
        unique: true
    },
    products: [productSchema]
})

const CategoryCollection = mongoose.model('Category', categorySchema)

export {
    CategoryCollection
}