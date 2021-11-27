import { UserCreationAttributes } from "../models/User";
import jwt from "jsonwebtoken";

export const generateToken = (user: UserCreationAttributes) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || "dSgBD8mNQ285eZ3E",
    {
      expiresIn: "30d",
    }
  );
};
