import { CategoryRepository, CategoryCollection } from '../repositories/CategoryRepository'
import { OrderCollection, OrderRepository } from '../repositories/OrderRepository'
import { PageCollection, PageRepository } from '../repositories/PageRepository'
import { StatisticCollection, StatisticRepository } from '../repositories/StatisticRepository'
import { UserCollection, UserRepository } from '../repositories/UserRepository'

const categoryRepository = new CategoryRepository(CategoryCollection),
    orderRepository = new OrderRepository(OrderCollection),
    pageRepository = new PageRepository(PageCollection),
    statisticRepository = new StatisticRepository(StatisticCollection),
    userRepository = new UserRepository(UserCollection)

export default router => {

    router.get("/", async (req, res) => {
        let combineData = await Promise.all([
            categoryRepository.findAll(),
            pageRepository.findAll(),
            categoryRepository.findPopularProducts({
                limit: 3,
                sort: { "products.requests": -1, "products.bought": -1 }
            }),
            categoryRepository.findPopularProducts({
                limit: 3,
                sort: { "products.bought": -1, "products.requests": -1 }
            })
        ])
        console.log(combineData)
        combineData = {
            categories: combineData[0],
            pages: combineData[1],
            popular: combineData[2],
            most_bought: combineData[3]
        }
        console.log(combineData)
        res.send(combineData)
    })

    router.get("/category/:category_name", (req, res) => {

    })

    router.get("/category/:category_name/:product", (req, res) => {

    })

    router.get("/page/:page", (req, res) => {

    })

    return router
}