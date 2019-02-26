import { CategoryCollection } from '../models/Category'
import DatabaseRepository from './DatabaseRepository'

class CategoryRepository extends DatabaseRepository {
    constructor(source) {
        super(source)
    }

    onInit() {
        super.add({
            category_name: 'Dyski'
        })
        let product = {
            product_identifier: '00123AFD',
            type: 'Selling',
            name: 'Xiao22mi Mi6 6GB RAM 64GB',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel nisl nec mauris congue convallis. Nullam nec posuere urna. Suspendisse cursus felis non dui volutpat, nec egestas orci facilisis. Ut placerat odio sit amet mauris ultricies, id sollicitudin dui tincidunt. Proin et erat et nisl sagittis auctor nec vel velit. Nam blandit elit nec lorem cursus pulvinar. Curabitur vitae maximus enim, et egestas ipsum. Suspendisse ac nulla mauris. Donec aliquet, magna quis sagittis bibendum, sapien felis ultricies nulla, et lacinia purus velit sed nisi. Integer sodales neque sed feugiat elementum.',
            price: 1100,
            typeOfUnit: {
                singular: 'sztuka',
                plural: 'sztuki'
            },
            //seoUnit: seoUnitSchema,
            reviews: [
                {
                    user_identifier: 'marcinwarzybok',
                    grade: 4,
                    content: 'Dość dobry produkt'
                },
                {
                    user_identifier: 'dmeda',
                    grade: 5,
                    content: 'Nie doruwnuje standarom'
                },
                {
                    user_identifier: 'michalino',
                    grade: 1,
                    content: 'Nie podoba mi się, jest dla mnie za dobry'
                }
            ],
            //priceOptions: [priceOptionSchema],
            //deliveryOption: [deliveryOptionSchema],
            units_in_magazine: 2,
            // tags: [{
            //     type: String,
            //     required: true
            // }],
        }
        this.addProduct({
            category_name: 'Dyski',
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
            ).select()
        })
    }

    findPopularProducts({ category_name, limit, sort }) {
        return new Promise((resolve, reject) => {
            if (category_name) {
                CategoryCollection.aggregate([
                    { $unwind: "$products" },
                    { $match: { category_name } },
                    { $sort: sort },
                    { $limit: limit },
                    { $replaceRoot: { newRoot: "$products" } },
                    { $project: { _id: 0, name: 1, price: 1, typeOfUnit: 1, hero_image: 1, bought: 1, requets: 1, average_rate: { $avg: "$reviews.grade" } } }
                ]).then(result => {
                    resolve(result)
                }).catch((err) => {
                    reject(err)
                })
            } else {
                CategoryCollection.aggregate([
                    { $unwind: "$products" },
                    { $sort: sort },
                    { $limit: limit },
                    { $replaceRoot: { newRoot: "$products" } },
                    { $project: { _id: 0, name: 1, price: 1, typeOfUnit: 1, hero_image: 1, bought: 1, requests: 1, average_rate: { $avg: "$reviews.grade" } } }
                ]).then(result => {
                    resolve(result)
                }).catch((err) => {
                    reject(err)
                })
            }
        })
    }

}

export {
    CategoryRepository,
    CategoryCollection
}