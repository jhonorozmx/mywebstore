import { Sale, SaleAttributes, SaleCreationAttributes } from "../models/Sale";
import { Types } from "mongoose";

export class SaleService {
  async createSale(saleInfo: SaleCreationAttributes): Promise<SaleAttributes> {
    try {
      if(saleInfo.orderItems.length <= 0){
        throw new Error("Cart is empty");
      }
      const sale = await Sale.create(saleInfo);
      return sale;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async getSaleById(id: string): Promise<SaleAttributes> {
    try {
      const valid = Types.ObjectId.isValid(id);
      if (valid) {
        const objId = new Types.ObjectId(id);
        const res = await Sale.exists({ _id: objId });
        if (res) {
          const user = await Sale.findById(id);
          return user!;
        } else {
          throw new Error("Sale not found");
        }
      } else {
        throw new Error("Invalid Id Object");
      }
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async getSaleByUserId(id: string): Promise<Array<SaleAttributes>> {
    try {
      console.log(id);
        const idUser = new Types.ObjectId(id);
        console.log(idUser);
        const res = await Sale.exists({ user: new Types.ObjectId(id) });
        if (res) {
          const sale = await Sale.find({ user: new Types.ObjectId(id) });
          return sale;
        } else {
          throw new Error("Sale by user not found");
        }
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}
