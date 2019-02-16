import mongoose from 'mongoose'
const { Schema } = mongoose
import { adressSchema } from './adress'

const itemSchema = new Schema({
    product_identifier: {
        type: String,
        required: true,
        trim: true
    },
    hero_image: {
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
        required: true,
        unique: true,
        trim: true
    },
    status: {
        type: String,
        required: true,
        default: "Unpaid"
    },
    realize_date: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    items: [itemSchema],
    adress: adressSchema
}

const orderSchema = new Schema(order)

const OrderCollection = mongoose.model('Order', orderSchema)

export {
    order,
    OrderCollection
}