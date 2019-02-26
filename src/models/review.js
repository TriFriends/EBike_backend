import mongoose from 'mongoose'
const { Schema } = mongoose

const reviewSchema = new Schema({
    user_identifier: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
        required: true
    },
    content: {
        type: String
    }
})

export {
    reviewSchema
}