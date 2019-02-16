import mongoose from 'mongoose'
const { Schema } = mongoose
import { priceOptionSchema } from './priceOption'
import { seoUnitSchema } from './seoUnit'
import { reviewSchema } from './review'

const deliveryOptionSchema = new Schema({
    provider: {

    },
    price: {

    },
    time: {

    }
})

const productSchema = new Schema({
    product_identifier: {

    },
    type: {

    },
    name: {

    },
    description: {

    },
    price: {

    },
    seoUnit: seoUnitSchema,
    reviews: [reviewSchema],
    priceOptions: [priceOptionSchema],
    deliveryOption: [deliveryOptionSchema],
    units_in_magazine: {

    },
    tags: [{

    }],
    hero_image: {

    },
    images: [

    ]
})

export {
    productSchema
}