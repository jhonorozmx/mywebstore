import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "John",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Fanny",
      email: "client@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Samsung Galaxy A01",
      price: 1870,
      brand: "Samsung",
    },
    {
      name: "Xiaomi Redmi Note 9",
      price: 4120,
      brand: "Xiaomi",
    },
    {
      name: "Huawei P40 Lite",
      price: 5478,
      brand: "Huawei",
    },
    {
      name: "Samsung Galaxy Tab A T290",
      price: 2799,
      brand: "Samsung",
    },
    {
      name: "Huawei MatePad T8",
      price: 3760,
      brand: "Huawei",
    },
    {
      name: "Lenovo Tab M8",
      price: 2387,
      brand: "Lenovo",
    },
  ],
};

export default data;
