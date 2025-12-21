// Script para preguntas 2, 3 y 4
// Nos aseguramos de trabajar en la base de datos dbTechStore
use('dbTechStore');

// -------------------------------------------------------------------
// PREGUNTA 2 - Consultas
// -------------------------------------------------------------------

// 1. Listar los 3 primeros documentos de equipos
db.equipos.find().limit(3).pretty();

// 2. Listar los 2 primeros documentos de clientes
db.clientes.find().limit(2).pretty();

// 3. Listar solo nombre, apellido, celular y categorías de interés de los clientes
db.clientes.find(
  {},
  {
    _id: 0,
    nombre: 1,
    apellido: 1,
    celular: 1,
    categoriasInteres: 1
  }
).pretty();

// 4. Listar los equipos cuya cantidad de stock sea igual o mayor que 100
db.equipos.find({ stock: { $gte: 100 } }).pretty();

// -------------------------------------------------------------------
// PREGUNTA 3 - Actualizaciones
// -------------------------------------------------------------------

// Equipos: actualizar el nombre "Monitor LG" a "Monitor Samsung"
db.equipos.updateOne(
  { nombre: "Monitor LG" },
  { $set: { nombre: "Monitor Samsung" } }
);

// Equipos: actualizar el precio de la "Tablet Lenovo" de 1750 a 2350
db.equipos.updateOne(
  { nombre: "Tablet Lenovo" },
  { $set: { precio: 2350 } }
);

// Clientes: actualizar fecha de nacimiento de Ana Gómez
db.clientes.updateOne(
  { nombre: "Ana", apellido: "Gómez" },
  { $set: { fechaNacimiento: new Date("2006-06-06") } }
);

// Clientes: actualizar celular de Juan Pérez
db.clientes.updateOne(
  { nombre: "Juan", apellido: "Pérez" },
  { $set: { celular: "989654333" } }
);

// -------------------------------------------------------------------
// PREGUNTA 4 - Eliminaciones
// -------------------------------------------------------------------

// 1. Eliminar un documento de equipos por _id (reemplaza el ObjectId por el que necesites eliminar)
// Ejemplo: const equipoId = ObjectId("64f0abcd1234567890abcd01");
// db.equipos.deleteOne({ _id: equipoId });

// 2. Eliminar los equipos con stock igual a 30
db.equipos.deleteMany({ stock: 30 });

// 3. Eliminar a María López de la colección clientes
db.clientes.deleteOne({ nombre: "María", apellido: "López" });

// 4. Eliminar todos los documentos de la colección equipos
db.equipos.deleteMany({});

// 5. Eliminar la colección clientes por completo
db.clientes.drop();


