import mongoose from 'mongoose'

export default (uri) => {
    mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
        if (err) {
            console.log(`Problem with connect to db: ${uri}`)
            process.exit(1)
        }
        console.log(`Connect to mongodb instance: ${uri}`)
    })
}