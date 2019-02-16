import mongoose from 'mongoose'
import { seoUnitSchema } from './seoUnit';
const { Schema } = mongoose

const pageSchema = new Schema({
    path: {

    },
    content: {

    },
    seoUnit: seoUnitSchema
})

const PageCollection = mongoose.model('Category', pageSchema)

export {
    PageCollection
}