import mongoose from 'mongoose'
const Schema = mongoose.Schema

const seoUnitSchema = new Schema({
    title: {
        type: String
    },
    keywords: [{
        type: String
    }],
    description: {
        type: String
    },
    tags: [{
        type: String
    }]
})

export {
    seoUnitSchema
}