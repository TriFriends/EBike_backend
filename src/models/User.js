import mongoose from 'mongoose'
import { order } from './Order';
import { adressSchema } from './adress';
const { Schema } = mongoose

const userSchema = new Schema({
    user_identifier: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    account_type: {
        type: String,
        required: true,
        default: 'user'
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    orders: [order],
    address: [adressSchema]
})

userSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
}

userSchema.pre('save', function (next) {
    const user = this

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(3, (err, salt) => {
        if (err) {
            return next(err)
        }
        bcrypt.hash(user.password, salt, (err, hashed) => {
            if (err) {
                return next(err)
            }
            user.password = hashed
            next()
        })
    })
})


const UserCollection = mongoose.model('User', userSchema)

export {
    UserCollection
}