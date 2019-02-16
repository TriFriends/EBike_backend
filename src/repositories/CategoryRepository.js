import { CategoryCollection } from '../models/Category'

class CategoryRepository extends DatabaseRepository {
    constructor(source) {
        super(source)
    }
}

export default {
    CategoryRepository,
    CategoryCollection
}