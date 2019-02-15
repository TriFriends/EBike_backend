import mongoose from 'mongoose'
import { adressSchema } from './Adress';
const Schema = mongoose.Schema

const orderSchema = new Schema({
    order_number: {
        
    },
    created_date: {

    },
    status: {

    },
    delivery_date: {

    },
    price: {

    },
    adress: adressSchema,
    items: [itemSchema]
})

export {
    orderSchema
}