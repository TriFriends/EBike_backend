import mongoose from 'mongoose'
const { Schema } = mongoose
import { adressSchema } from './adress'

const itemSchema = new Schema({
    product: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    units: {
        type: Number,
        required: true
    }
})

const order = {
    order_identifier: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    realize_date: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    hero_image: {
        type: String,
        required: true
    },
    items: [itemSchema],
    adress: adressSchema
}

const orderSchema = new Schema(order)

const OrderCollection = mongoose.model('Category', orderSchema)

export {
    order,
    OrderCollection
}