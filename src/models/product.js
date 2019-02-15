import mongoose from 'mongoose'
const Schema = mongoose.Schema
import { seoUnitSchema } from './seoUnit'

let productSchema = new Schema({
    product_identifier: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    unit: {
        type: String,
        required
    },
    seo: seoUnitSchema
})



export {
    productSchema
}

