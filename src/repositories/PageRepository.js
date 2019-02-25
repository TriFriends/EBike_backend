import { PageCollection } from '../models/Page'
import DatabaseRepository from './DatabaseRepository'

class PageRepository extends DatabaseRepository {
    constructor(source) {
        super(source)
    }
    onInit() {
        let page = {
            name: 'test2',
            path: '/test2',
            content: '<h1>To jest strona testowa 2</h1>',
            number_of_visit: 12,
            active: true
        }
        super.add(page)
    }
}

export {
    PageRepository,
    PageCollection
}