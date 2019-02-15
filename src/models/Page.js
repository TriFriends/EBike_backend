import mongoose from 'mongoose'
const Schema = mongoose.Schema
import { seoUnitSchema } from './seoUnit'

let pageSchema = new Schema({
    path: {
        type: String
    },
    sections: [{
        type: String
    }],
    seo: seoUnitSchema
})

let PageCollection = mongoose.model('Page', pageSchema)

export {
    PageCollection
}
