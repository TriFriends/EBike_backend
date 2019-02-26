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
                limit: 8,
                sort: { "products.bought": -1, "products.requests": -1 }
            })
        ])
        console.log(combineData)
        combineData = {
            categories: combineData[0],
            popular: combineData[2]
        }
        console.log(combineData)
        res.send(combineData)
    })

    router.get("/pages", async (req, res) => {
        let pages = await pageRepository.findAll()
        res.send(pages)
    })

    router.get("/category/:category_name", (req, res) => {

    })

    router.get("/category/:category_name/:product", (req, res) => {

    })

    router.get("/page/:page", (req, res) => {

    })

    return router
}