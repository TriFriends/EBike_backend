import mongoose from 'mongoose'
const { Schema } = mongoose

const priceOptionSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    delivery_time: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

export {
    priceOptionSchema
}