import mongoose from 'mongoose'
const { Schema } = mongoose

const seoUnitSchema = new Schema({
    title: {

    },
    keywords: [{

    }],
    description: {

    }
})

export {
    seoUnitSchema
}