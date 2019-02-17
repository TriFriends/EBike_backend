import { StatisticCollection } from '../models/Statistic'
import DatabaseRepository from './DatabaseRepository'

class StatisticRepository extends DatabaseRepository {
    constructor(source) {
        super(source)
    }
}

export {
    StatisticRepository,
    StatisticCollection
}