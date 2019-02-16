import mongoose from 'mongoose'
import { seoUnitSchema } from './seoUnit';
const { Schema } = mongoose

const pageSchema = new Schema({
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
    }
})

const PageCollection = mongoose.model('Page', pageSchema)

export {
    PageCollection
}