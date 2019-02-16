import mongoose from 'mongoose'
const { Schema } = mongoose

const statisticSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    value: {
        type: Object,
        required: true
    },
    day: {
        type: Number,
        required: true
    },
    month: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
})

const StatisticCollection = mongoose.model('Statistic', statisticSchema)

export {
    StatisticCollection
}