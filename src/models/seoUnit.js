import mongoose from 'mongoose'
const { Schema } = mongoose

const seoUnitSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    keywords: [{
        type: String,
        required: true
    }],
    description: {
        type: String,
        required: true
    }
})

export {
    seoUnitSchema
}