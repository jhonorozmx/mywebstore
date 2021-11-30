import { model, Schema, Types } from "mongoose";

export interface SaleAttributes {
  _id?: Types.ObjectId;
  itemsPrice: number;
  taxPrice: number;
  totalPrice: number;
  isPaid?: boolean;
  status: string;
  user:  Types.ObjectId ;
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
  user: { type: Schema.Types.ObjectId, ref: "User" },
  orderItems: [
    {
      name: { type: String, required: true },
      qty: { type: Number, required: true },
      price: { type: Number, required: true },
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
    },
  ],
},
{
  timestamps: true,
});

export const Sale = model<SaleAttributes>("Sale", schema);
