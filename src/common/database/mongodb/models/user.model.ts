import mongoose, { Schema } from "mongoose";
import { UserRole } from "../../../enums/user-role.enum";

// interface IUser{
//     name: string;
//     email: string;
//     password: string;
//     roles: string[];
//     picture?: string;
// }


const UserSchema = new Schema({
    name: {
        type: String,
        require: [true, "Missing name"],
    },
    email: {
        type: String,
        require: [true, "Missing email"],
    },
    password: {
        type: String,
        require: [true, "Missing password"],
    },
    roles: {
        type: [String],
        default: [UserRole.USER],
        enum: UserRole,
    },
    picture: {
        type: String,
    },
});

export const UserModel = mongoose.model("User", UserSchema);