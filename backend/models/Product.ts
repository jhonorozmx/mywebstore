import { model, Schema, Types } from "mongoose";

export interface ProductAttributes {
  _id?: Types.ObjectId;
  name: string;
  price: number;
	brand:string;
  creation_date: Date;
  owner:{ idUser: Types.ObjectId }
}

export interface ProductCreationAttributes extends ProductAttributes {}

const schema = new Schema<ProductAttributes>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
	brand: { type: String, required: true },
  creation_date: { type: Date, default: new Date() },
  owner:{ type: Schema.Types.ObjectId, ref:"User" }
});

export const Product = model<ProductAttributes>("Product", schema);
