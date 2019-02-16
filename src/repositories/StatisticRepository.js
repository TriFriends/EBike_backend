import { StatisticCollection } from '../models/Statistic'

class StatisticRepository extends DatabaseRepository {
    constructor(source) {
        super(source)
    }
}

export default {
    StatisticRepository,
    StatisticCollection
}