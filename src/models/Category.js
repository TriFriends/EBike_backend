import mongoose from 'mongoose'
const { Schema } = mongoose
import { productSchema } from './product'

const categorySchema = new Schema({
    name: {

    },
    products: [productSchema]
})

const CategoryCollection = mongoose.model('Category', categorySchema)

export {
    CategoryCollection
}