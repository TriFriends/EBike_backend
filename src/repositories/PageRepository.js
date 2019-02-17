import { PageCollection } from '../models/Page'
import DatabaseRepository from './DatabaseRepository'

class PageRepository extends DatabaseRepository {
    constructor(source) {
        super(source)
    }
}

export {
    PageRepository,
    PageCollection
}