import mongoose from 'mongoose'
const { Schema } = mongoose
import { adressSchema } from './adress'

const itemSchema = new Schema({
    product: {

    },
    price: {

    },
    units: {

    }
})

const order = {
    order_identifier: {

    },
    status: {

    },
    realize_date: {

    },
    price: {

    },
    hero_image: {

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