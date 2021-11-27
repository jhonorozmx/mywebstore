import { User, UserAttributes, UserCreationAttributes } from "../models/User";
import data from "../infrastructure/persistence/data";
import bcrypt from "bcryptjs";
import { generateToken } from "../helpers/utils";
import { Types } from "mongoose";

export class UserService {
  async getUsers(): Promise<Array<UserAttributes>> {
    try {
      return await User.find({});
    } catch (error) {
      throw new Error("Error getting users");
    }
  }

  async seedUsers(): Promise<Array<UserAttributes>> {
    try {
      const createdUsers = await User.insertMany(data.users);
      return createdUsers;
    } catch (error) {
      throw new Error("Error creating users");
    }
  }

  async signIn(email: string, password: string): Promise<UserAttributes> {
    try {
      const user = await User.findOne({ email: email });
      if (user) {
        if (bcrypt.compareSync(password, user.password)) {
          user.token = generateToken(user);
          user.save();
          return user;
        }
      }
      throw new Error("Invalid email or password.");
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async createUser(userInfo: UserCreationAttributes): Promise<UserAttributes> {
    try {
      const user = await User.findOne({ email: userInfo.email });
      if (user === null) {
        const createdUser = await User.create(userInfo);
        createdUser.token = generateToken(createdUser);
        createdUser.save();
        return createdUser;
      }
      throw new Error(
        "This email has already been used, try logging into your account or use a different email."
      );
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async getUserById(id: string): Promise<UserAttributes> {
    try {
      console.log(id);
      const valid = Types.ObjectId.isValid(id);
      if (valid) {
        const objId = new Types.ObjectId(id);
        const res = await User.exists({ _id: objId });
        if (res) {
          const user = await User.findById(id);
          return user!;
        } else {
          throw new Error("Todo not found");
        }
      } else {
        throw new Error("Invalid Id Object");
      }
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async updateProfile(id: string, name:string, email:string, password:string): Promise<UserAttributes> {
    try {
      console.log(id);
      const valid = Types.ObjectId.isValid(id);
      if (valid) {
        const objId = new Types.ObjectId(id);
        const res = await User.exists({ _id: objId });
        if (res) {
          const user = await User.findById(id);

          user!.name = name || user!.name;
          user!.email = email || user!.email;
          if (password) {
            user!.password = bcrypt.hashSync(password, 8);
          }
          const updatedUser = await user!.save();
          return updatedUser!;
        } else {
          throw new Error("Todo not found");
        }
      } else {
        throw new Error("Invalid Id Object");
      }
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async getUsersAndProducts(id:string): Promise<Array<UserAttributes>> {
    try {
      return await User.findById(id).populate('products');
    } catch (error) {
      throw new Error("Error getting users");
    }
  }
}
