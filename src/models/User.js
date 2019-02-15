import mongoose from 'mongoose'
const Schema = mongoose.Schema
import { adressSchema } from './adress'
import { orderSchema } from './order'
import bcrypt from 'bcryptjs'

let userSchema = new Schema({
    identifier: {
        unique: true,
        type: String
    },
    name: {
        type: String,
        maxlength: 25,
        minlength: 1
    },
    lastname: {
        type: String,
        maxlength: 40,
        minlength: 1
    },
    password: {
        type: String,
        minlength: 6,
        maxlength: 20
    },
    email: {
        type: String,
        maxlength: 30,
        unique: true,
        required: true
    },
    phone: {
        type: String
    },
    adresses: [adressSchema],
    role: {
        type: String,
        required: true
    },
    orders: [orderSchema]
})

userSchema.pre("save", function (next) {
    let user = this
    this.identifier = mongoose.Types.ObjectId()

    if (!user.isModified('password')) {
        return next()
    }

    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err)

        bcrypt.hash(user.password, salt, (err, encrypted) => {
            if (err) return next(err)

            user.password = encrypted
            next()
        })
    })
})

userSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

let UserCollection = mongoose.model('User', userSchema)

const addUser = (user) => {
    let newUser = new UserCollection(user)
    return new Promise((resolve, reject) => {
        newUser.save((err) => {
            if (err) {
                reject(err)
            }
            resolve()
        })
    })
}

export {
    addUser,
    UserCollection
}

