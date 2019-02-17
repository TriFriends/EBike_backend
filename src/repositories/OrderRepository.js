import { OrderCollection } from '../models/Order'
import DatabaseRepository from './DatabaseRepository'

class OrderRepository extends DatabaseRepository {
    constructor(source) {
        super(source)
    }
}

export {
    OrderRepository,
    OrderCollection
}