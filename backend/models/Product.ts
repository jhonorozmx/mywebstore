import { model, Schema, Types } from "mongoose";

export interface ProductAttributes {
  _id?: Types.ObjectId;
  name: string;
  price: number;
  brand: string;
<<<<<<< HEAD
  owner: { idUser: Schema.Types.ObjectId };
=======
  owner: Types.ObjectId ;
>>>>>>> backend_update
}

export interface ProductCreationAttributes extends ProductAttributes {}

<<<<<<< HEAD
const schema = new Schema<ProductAttributes>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);
=======
const schema = new Schema<ProductAttributes>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  brand: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
},{
  timestamps: true
});
>>>>>>> backend_update

export const Product = model<ProductAttributes>("Product", schema);
