import mongoose from 'mongoose'
const Schema = mongoose.Schema


let statisticSchema = new Schema({
    value: {
        type: Number
    }
})

let StatisticCollection = mongoose.model('Page', statisticSchema)

export {
    StatisticCollection
}
