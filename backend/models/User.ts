import { model, Schema, Types } from 'mongoose';

export interface UserAttributes {
    _id?: Types.ObjectId;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    token:string;
    creation_date: Date;
    products?:[
        {
            idProduct: Types.ObjectId;
        }
    ]
}

export interface UserCreationAttributes extends UserAttributes {};

const schema = new Schema<UserAttributes>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
    token: { type: String, required: false },
    creation_date: { type: Date, default: new Date() },
    products: [{ type: Schema.Types.ObjectId, ref:"Product"}]
});

export const User = model<UserAttributes>('User', schema);