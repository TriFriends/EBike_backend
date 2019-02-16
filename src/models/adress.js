import mongoose from 'mongoose'
const { Schema } = mongoose

const adressSchema = new Schema({
    house_number: {

    },
    street: {

    },
    city: {

    },
    postal_code: {

    },
    country: {
        
    }
})

export {
    adressSchema
}