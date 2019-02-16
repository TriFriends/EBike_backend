import mongoose from 'mongoose'
const { Schema } = mongoose

const adressSchema = new Schema({
    house_number: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    postal_code: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
})

export {
    adressSchema
}