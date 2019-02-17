import { CategoryCollection } from '../models/Category'
import DatabaseRepository from './DatabaseRepository'

class CategoryRepository extends DatabaseRepository {
    constructor(source) {
        super(source)
    }

    onInit() {
        super.add({
            category_name: 'Testowo'
        })
        let product = {
            product_identifier: '00123AFD',
            type: 'Selling',
            name: 'Xiaomi Mi6 6GB RAM 64GB',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel nisl nec mauris congue convallis. Nullam nec posuere urna. Suspendisse cursus felis non dui volutpat, nec egestas orci facilisis. Ut placerat odio sit amet mauris ultricies, id sollicitudin dui tincidunt. Proin et erat et nisl sagittis auctor nec vel velit. Nam blandit elit nec lorem cursus pulvinar. Curabitur vitae maximus enim, et egestas ipsum. Suspendisse ac nulla mauris. Donec aliquet, magna quis sagittis bibendum, sapien felis ultricies nulla, et lacinia purus velit sed nisi. Integer sodales neque sed feugiat elementum.',
            price: 1100,
            typeOfUnit: {
                singular: 'sztuka',
                plural: 'sztuki'
            },
            //seoUnit: seoUnitSchema,
            //reviews: [reviewSchema],
            //priceOptions: [priceOptionSchema],
            //deliveryOption: [deliveryOptionSchema],
            units_in_magazine: 2,
            // tags: [{
            //     type: String,
            //     required: true
            // }],
        }
        this.addProduct({
            category_name: 'Testowo',
            product
        })
    }

    addProduct({ category_name, product }) {
        return new Promise((resolve, reject) => {
            CategoryCollection.update(
                { category_name },
                { $push: { products: product } },
                (err, raw) => {
                    if (err || raw.n == 0) {
                        reject(err)
                    }
                    resolve(raw)
                }
            )
        })
    }

    findPopularProducts({ category_name, limit }) {
        return new Promise((resolve, reject) => {
            if (category) {
                CategoryCollection.aggregate([
                    { $unwind: "$products" },
                    { $sort: { requests: 1 } },
                    { $limit: limit }
                ]).then(result => {
                    resolve(result)
                })
            } else {
                CategoryCollection.aggregate([
                    { $unwind: "$products" },
                    { $match: { category_name } },
                    { $sort: { requests: 1 } },
                    { $limit: limit }
                ]).then(result => {
                    resolve(result)
                })
            }
        })
    }

}

export {
    CategoryRepository,
    CategoryCollection
}