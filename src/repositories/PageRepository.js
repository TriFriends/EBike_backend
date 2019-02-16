import { PageCollection } from '../models/Page'

class PageRepository extends DatabaseRepository {
    constructor(source) {
        super(source)
    }
}

export default {
    PageRepository,
    PageCollection
}