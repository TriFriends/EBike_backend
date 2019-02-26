import fs from 'fs'
import path from 'path'
import { CategoryCollection } from '../repositories/CategoryRepository'


export default () => {
    let rawData = fs.readFileSync(path.resolve("data/categories.json"))
    let categories = JSON.parse(rawData)
    CategoryCollection.deleteMany({}, (err) => {
        CategoryCollection.create(categories, function (err) {
            if (err) {
                throw new Error(`Cannot load data on init because: ` + err)
            }
            console.log('load data on init Succesfuly ended')
        })
    })
}