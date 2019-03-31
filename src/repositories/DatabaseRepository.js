class DatabaseRepository {
    constructor(source) {
        this.source = source
    }
    add(obj) {
        return new Promise((resolve, reject) => {
            this.source.create(obj, (err, created) => {
                if (err) {
                    reject(err)
                }
                resolve(created)
            })
        })
    }
    findAll(parameters = { _id: 0 }) {
        return new Promise((resolve, reject) => {
            this.source.find({}, parameters, (err, docs) => {
                if (err) {
                    reject()
                }
                resolve(docs)
            })
        })
    }

    findOneByQuery({ query, parameters = {} }) {
        return new Promise((resolve, reject) => {
            this.source.findOne(query, parameters, (err, object) => {
                console.log(object)
                if (err || !object) {
                    console.log(err)
                    reject()
                }
                resolve(object)
            })
        })
    }

    findByQuery({ query = {}, parameters = {} }) {
        return new Promise((resolve, reject) => {
            this.source.findMany(query, parameters, (err, object) => {
                if (err || !object) {
                    console.log(err)
                    reject()
                }
                resolve(object)
            })
        })
    }
    updateByQuery({ query, newObj }) {
        return new Promise((resolve, reject) => {
            this.source.updateMany(query,
                { $set: newObj },
                (err, raw) => {
                    if (err || raw.n == 0) {
                        reject()
                    }
                    resolve()
                }
            )
        })
    }

    deleteByQuery(query) {
        return new Promise((resolve, reject) => {
            this.source.deleteMany(query, (err) => {
                if (err) {
                    reject()
                }
                resolve()
            })
        })
    }

    findPaginate({ skip, limit }) {
        this.source.find({}, { skip, limit }, (err, docs) => {
            if (err) {
                reject()
            }
            resolve(docs)
        })
    }

}

export default DatabaseRepository