import { OrderCollection } from '../models/Order'

class OrderRepository extends DatabaseRepository {
    constructor(source) {
        super(source)
    }
}

export default {
    OrderRepository,
    OrderCollection
}