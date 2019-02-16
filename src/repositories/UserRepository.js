import { UserCollection } from '../models/User'

class UserRepository extends DatabaseRepository {
    constructor(source) {
        super(source)
    }
}

export default {
    UserRepository,
    UserCollection
}