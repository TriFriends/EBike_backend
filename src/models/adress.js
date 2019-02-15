import mongoose from 'mongoose'
const Schema = mongoose.Schema

const adressSchema = new Schema({
    street: {
        type: String,
        required: true
    },
    house_number: {
        type: String,
        required: true
    },
    postal_code: {
        type: String,
        required: true
    },
    city: {
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