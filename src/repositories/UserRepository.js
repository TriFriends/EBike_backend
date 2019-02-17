import { UserCollection } from '../models/User'
import DatabaseRepository from './DatabaseRepository'

class UserRepository extends DatabaseRepository {
    constructor(source) {
        super(source)
    }
}

export {
    UserRepository,
    UserCollection
}