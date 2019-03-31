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
            categoryRepository.findAll({ _id: 0, products: 0 }),
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
        res.send(combineData)
    })

    router.get("/categories", (req, res) => {
        res.send({
            categories: categoryRepository.findAll({ _id: 0, products: 0 })
        })
    })

    router.get("/:category_name", (req, res) => {
        let { category_name } = req.params
        category_name = replaceDash(category_name)
        category_name = convertParam(category_name)
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

    router.get("/:category_name/:product_name", (req, res) => {
        let { category_name, product_name } = req.params
        category_name = replaceDash(category_name)
        category_name = convertParam(category_name)
        product_name = replaceDash(product_name)
        product_name = convertParam(product_name)
        console.log(category_name, product_name)
        categoryRepository.findProductByCategoryAndName({ category_name, product_name })
            .then((category) => {
                res.send(category)
            }).catch(() => {
                res.status(404).send()
            })
    })

    return router
}

function replaceDash(string) {
    return string.replace("-", " ")
}

function convertParam(parameter) {
    return new RegExp("^" + parameter.toLowerCase() + "$", "i")
}