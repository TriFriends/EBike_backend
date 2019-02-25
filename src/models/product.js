import mongoose from 'mongoose'
const { Schema } = mongoose
import { priceOptionSchema } from './priceOption'
import { seoUnitSchema } from './seoUnit'
import { reviewSchema } from './review'

const deliveryOptionSchema = new Schema({
    provider: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    time: {
        type: String,
        required: true
    }
})

const productSchema = new Schema({
    product_identifier: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    typeOfUnit: {
        type: Object,
        required: true
    },
    seoUnit: seoUnitSchema,
    reviews: [reviewSchema],
    priceOptions: [priceOptionSchema],
    deliveryOption: [deliveryOptionSchema],
    units_in_magazine: {
        type: Number,
        required: true,
        default: 0
    },
    tags: [{
        type: String,
        required: true
    }],
    hero_image: {
        type: String,
        required: true,
        default: 'https://cdn2.iconfinder.com/data/icons/large-svg-icons/512/dropbox_folder_box_square-512.png'
    },
    images: [{
        type: String
    }],
    requests: {
        type: Number,
        required: true,
        default: 0
    },
    bought: {
        type: Number,
        required: true,
        default: 0
    }
})

export {
    productSchema
}