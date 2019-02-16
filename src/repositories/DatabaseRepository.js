class DatabaseRepository {
    constructor(source) {
        this.source = source
    }
    add(obj) {
        return new Promise((resolve, reject) => {
            this.source.create(obj, (err, created) => {
                if (err) {
                    console.log(err)
                    reject()
                }
                resolve()
            })
        })
    }
    findAll() {
        return new Promise((resolve, reject) => {
            this.source.find({}, (err, docs) => {
                if (err) {
                    reject()
                }
                resolve(docs)
            })
        })
    }
    findByProperty({ name, value }) {
        return new Promise((resolve, reject) => {
            this.source.findOne({ [name]: value }, (err, object) => {
                if (err || !object) {
                    console.log(err)
                    reject()
                }
                resolve(object)
            })
        })
    }
    updateByProperty({ name, value, newObj }) {
        return new Promise((resolve, reject) => {
            this.source.updateOne({ [name]: value },
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

    deleteByProperty({ name, value }) {
        return new Promise((resolve, reject) => {
            this.source.deleteOne({ [name]: value }, (err) => {
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