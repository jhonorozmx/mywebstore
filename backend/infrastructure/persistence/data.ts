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
      name: "Aceite vegetl comestible 123",
      price: 35,
      brand: "123",
      owner:""
    },
    {
      name: "Pure de tomate",
      price: 7,
      brand: "La costeña",
      owner:""
    },
    {
      name: "Frijoles negros refritos",
      price: 13,
      brand: "Isadora",
      owner:""
    },
    {
      name: "Galletas Principe con relleno caja",
      price: 36,
      brand: "Marinela",
      owner:""
    },
    {
      name: "Galletas marias caja",
      price: 35,
      brand: "Gamesa",
      owner:""
    },
    {
      name: "Galletas Triki-Trakes",
      price: 35,
      brand: "Marinela",
      owner:""
    },
    {
      name: "Mole rojo Doña María 360 g",
      price: 14,
      brand: "Doña María",
      owner:""
    },
    {
      name: "Galletas Polvorones sabor naranja 5 paquetes de 75 g c/u",
      price: 36,
      brand: "Marinela",
      owner:""
    },
    {
      name: "Fécula de maíz para preparar atole sabor vainilla 47 g",
      price: 8,
      brand: "Maizena",
      owner:""
    },
    {
      name: "Canelitas 6 paquetes de 60 g c/u",
      price: 36,
      brand: "Marinela",
      owner:""
    },
    {
      name: "Oblea rellena de maní y cubierta sabor chocolate 3 pzas",
      price: 15,
      brand: "Bon o Bon",
      owner:""
    },
    {
      name: "Galletas Maravillas clásicas sabor vainilla 4 paketines de 116 g c/u",
      price: 33,
      brand: "Gamesa",
      owner:""
    },
    {
      name: "Galletas Barras de coco clásicas 4 paketines de 117 g c/u",
      price: 33,
      brand: "Gamesa",
      owner:""
    },
    {
      name: "Puré de papa 160 g",
      price: 21,
      brand: "Verde Valle",
      owner:""
    },
    {
      name: "Galletas Chocolatines con malvavisco, cobertura sabor a chocolate y cacahuate 294 g",
      price: 35,
      brand: "Gamesa",
      owner:""
    },
    {
      name: "Galletas Mamut con malvavisco y cobertura sabor chocolate 8 paketines de 30 g c/u",
      price: 25,
      brand: "Marinela",
      owner:""
    },
    {
      name: "Pastelito Délice cacao con 5 pzas de 39 g c/u",
      price: 54,
      brand: "Kinder",
      owner:""
    },
    {
      name: "Mole verde listo para servir 360 g",
      price: 13,
      brand: "Doña María",
      owner:""
    },
    {
      name: "Roles de canela 365 g",
      price: 39,
      brand: "Bimbo",
      owner:""
    },
    {
      name: "Pan dulce Nito 4 paquetes de 62 g c/u",
      price: 43,
      brand: "Bimbo",
      owner:""
    },
    {
      name: "Oblea KitKat cubierta con chocolate con leche 41.5 g",
      price: 35,
      brand: "Nestlé",
      owner:""
    },
    {
      name: "Chiles jalapeños enteros en escabeche 220 g",
      price: 12,
      brand: "La Costeña",
      owner:""
    },
    {
      name: "Chocolate blanco Bites cookies 'n' creme 43 g",
      price: 17,
      brand: "Hersheys",
      owner:""
    },
    {
      name: "Pan dulce Bimbolunch multi pack 6 paquetes",
      price: 43,
      brand: "Bimbo",
      owner:""
    },
    {
      name: "Rancheritos 76 g",
      price: 10,
      brand: "Sabritas",
      owner:""
    },
    {
      name: "Frijoles negros refritos en lata 580 g",
      price: 35,
      brand: "La Sierra",
      owner:""
    },
  ],
};

export default data;
