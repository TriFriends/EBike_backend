import mongoose from 'mongoose'
const { Schema } = mongoose

const seoUnitSchema = new Schema({
    title: {
        type: String,
        required: true,
        sparse: true
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