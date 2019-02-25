import mongoose from 'mongoose'
import { seoUnitSchema } from './seoUnit';
const { Schema } = mongoose

const pageSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    path: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    content: {
        type: String,
        required: true
    },
    seoUnit: seoUnitSchema,
    number_of_visit: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    }
})

const PageCollection = mongoose.model('Page', pageSchema)

export {
    PageCollection
}