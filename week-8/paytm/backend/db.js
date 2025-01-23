import mongoose from "mongoose";
import { MONGODB_PAYTM_KEY } from "./config";

mongoose.connect(MONGODB_PAYTM_KEY)

const userSchema = mongoose.Schema({
    username: {
        type: String,
        lowercase: true, 
        trim: true,
        unique: true, 
        required: true 
    }, 
    firstName: String,
    lastName: String,
    password: String
})

const accountSchema = mongoose.Schema({
    userId: {type: Schema.types.ObjectId, ref: "users"},
    balance: {type: Number, default: 10}
})

export const User = mongoose.model("users", userSchema)
export const Account = mongoose.model("accounts", accountSchema)