import { Schema, model } from "mongoose"

const userSchema = Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    image: String,
    role: {
        type: String,
        default: 'admin',
    },
    status: {
        type: String,
        default: 'active'
    }
}, { timestamps: true })

const userModel = model('User', userSchema)
export default userModel