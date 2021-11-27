import { model, Schema, Types } from "mongoose";

export interface SaleAttributes {
  _id?: Types.ObjectId;
  itemsPrice: number;
  taxPrice: number;
  totalPrice: number;
  isPaid: boolean;
  status: string;
  creation_date: Date;
  orderItems: [
    {
      name: string;
      qty: number;
      price: number;
      product: {
        idProduct: Types.ObjectId;
      };
    }
  ];
}

export interface SaleCreationAttributes extends SaleAttributes {}

const schema = new Schema<SaleAttributes>({
  itemsPrice: { type: Number, required: true },
  taxPrice: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  isPaid: { type: Boolean, default: false },
  status: { type: String, required: true },
  creation_date: { type: Date, default: new Date() },
  orderItems: [
    {
      name: { type: String, required: true },
      qty: { type: Number, required: true },
      image: { type: String, required: true },
      price: { type: Number, required: true },
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
    },
  ],
});

export const Sale = model<SaleAttributes>("Sale", schema);
