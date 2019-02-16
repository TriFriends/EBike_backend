import mongoose from 'mongoose'
import { seoUnitSchema } from './seoUnit';
const { Schema } = mongoose

const pageSchema = new Schema({
    path: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    seoUnit: seoUnitSchema
})

const PageCollection = mongoose.model('Category', pageSchema)

export {
    PageCollection
}