// Ejercicio - Pregunta 1
// Trabajando con TechStore, una empresa de venta de equipos informáticos
// Vamos a crear la base de datos y las colecciones necesarias

// Primero, creamos y seleccionamos la base de datos dbTechStore
use('dbTechStore');

// Ahora vamos a crear la colección de equipos
// Insertamos cada equipo uno por uno como se solicita

// Empezamos con la Laptop Asus
db.equipos.insertOne({
  nombre: "Laptop Asus",
  categoria: "Portátiles",
  precio: 2500,
  stock: 30,
  accesorios: [
    "Cargador",
    "Funda de protección",
    "Ratón inalámbrico"
  ]
});

// Siguiente equipo: Monitor LG
db.equipos.insertOne({
  nombre: "Monitor LG",
  categoria: "Monitores",
  precio: 999,
  stock: 20,
  accesorios: [
    "Cable HDMI",
    "Base ajustable",
    "Adaptador de corriente"
  ]
});

// Ahora el Teclado Logitech
db.equipos.insertOne({
  nombre: "Teclado Logitech",
  categoria: "Teclados",
  precio: 180,
  stock: 30,
  accesorios: [
    "Reposamuñecas",
    "Extractor de teclas",
    "Cable USB desmontable"
  ]
});

// Continuamos con la Impresora Epson
db.equipos.insertOne({
  nombre: "Impresora Epson",
  categoria: "Impresoras",
  precio: 1230,
  stock: 100,
  accesorios: [
    "Cartucho de tóner",
    "Cable USB",
    "Manual de usuario"
  ]
});

// Por último, la Tablet Lenovo
db.equipos.insertOne({
  nombre: "Tablet Lenovo",
  categoria: "Tablets",
  precio: 1750,
  stock: 300,
  accesorios: [
    "Cargador rápido",
    "Funda protectora",
    "Lápiz táctil"
  ]
});

// Vamos a verificar que todos los equipos se guardaron bien
db.equipos.find().pretty();

// Ahora creamos la colección de clientes
// Esta vez insertamos todos los clientes de una vez (inserción masiva)
db.clientes.insertMany([
  {
    codigo: "001",
    nombre: "Juan",
    apellido: "Pérez",
    fechaNacimiento: new Date("1990-05-15"),
    celular: "987654321",
    categoriasInteres: ["Laptops", "Monitores", "Impresoras"]
  },
  {
    codigo: "002",
    nombre: "Ana",
    apellido: "Gómez",
    fechaNacimiento: null,
    celular: "987654322",
    categoriasInteres: ["Tablets", "Teclados", "Ratones", "Monitores"]
  },
  {
    codigo: "003",
    nombre: "Luis",
    apellido: "Martínez",
    fechaNacimiento: new Date("1988-11-30"),
    celular: "987654323",
    categoriasInteres: ["Laptops", "Accesorios", "Impresoras", "Teclados"]
  },
  {
    codigo: "004",
    nombre: "María",
    apellido: "López",
    fechaNacimiento: new Date("1988-02-17"),
    celular: null,
    categoriasInteres: ["Impresoras", "Monitores", "Proyectores"]
  },
  {
    codigo: "005",
    nombre: "Sofía",
    apellido: "Ramírez",
    fechaNacimiento: new Date("1993-09-25"),
    celular: "987654326",
    categoriasInteres: ["Tablets", "Accesorios", "Software", "Monitores"]
  }
]);

// Verificamos que todos los clientes se insertaron correctamente
db.clientes.find().pretty();

