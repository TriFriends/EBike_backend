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
        combineData = {
            categories: combineData[0],
            popular: combineData[2]
        }
        console.log(combineData.popular)
        res.send(combineData)
    })

    router.get("/pages", async (req, res) => {
        let pages = await pageRepository.findAll()
        res.send(pages)
    })

    router.get("/category/:category_name", (req, res) => {
        let { category_name } = req.params
        categoryRepository.findOneByQuery({
            query: {
                category_name
            },
            parameters: {
                _id: 0
            }
        }).then((category) => {
            res.send(category)
        }).catch(() => {
            res.status(404).send()
        })
    })

    router.get("/category/:category_name/:product", (req, res) => {
        let { category_name, product_name } = req.params
        categoryRepository.findProductByCategoryAndName({ category_name, product_name })
            .then((category) => {
                res.send(category)
            }).catch(() => {
                res.status(404).send()
            })
    })

    router.get("/page/:page", (req, res) => {

    })

    return router
}