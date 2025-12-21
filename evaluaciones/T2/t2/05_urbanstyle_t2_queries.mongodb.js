// Consultas del Examen T2 - UrbanStyle_Store
// Curso: Base de Datos Avanzado II
// Alumno: JOSE GORGE MONTERO VILCAS

// Seleccionamos la base de datos
use("UrbanStyle_store");

// -------------------------------------------------------------------
// PREGUNTA 1 - Colección clients (operadores de comparación)
// -------------------------------------------------------------------

// 1) Muestre los clientes que no residan en Breña ni en La Molina.
//    Ordene en descendente por apellidos.
//    Sólo debe mostrar los campos: nombres, apellidos, email e historial de compras.
console.log("\n--- PREGUNTA 1.1 ---");
db.clients
  .find(
    { direccion: { $not: /Breña|La Molina/i } },
    { _id: 0, nombre: 1, apellidos: 1, email: 1, historialCompras: 1 }
  )
  .sort({ apellidos: -1 });

// 2) Muestre los clientes que tienen como parte de sus preferencias ropa de niños.
//    Considere visualizar sólo los campos: nombres, apellidos, fecha de registro y preferencias.
//    Ordene por fecha de registros de manera ascendente.
console.log("\n--- PREGUNTA 1.2 ---");
db.clients
  .find(
    { preferencias: "Niño" },
    { _id: 0, nombre: 1, apellidos: 1, fechaRegistro: 1, preferencias: 1 }
  )
  .sort({ fechaRegistro: 1 });

// -------------------------------------------------------------------
// PREGUNTA 2 - Colección products (operadores lógicos)
// -------------------------------------------------------------------

// 1) Listar de los productos _id, nombre, marca, talla y precio de las prendas,
//    filtre cuya sucursal sea "Sucursal Norte" y el precio sea mayor igual a 100.
console.log("\n--- PREGUNTA 2.1 ---");
db.products.find(
  { sucursal: "Sucursal Norte", precio: { $gte: 100 } },
  { nombre: 1, marca: 1, talla: 1, precio: 1 }
);

// 2) Mostrar los productos cuyo precio sea mayor a 55 o color "azul",
//    no considerar de la temporada "Invierno"
console.log("\n--- PREGUNTA 2.2 ---");
db.products.find(
  {
    $and: [
      { $or: [{ precio: { $gt: 55 } }, { "especificaciones.color": "Azul" }] },
      { "especificaciones.temporada": { $ne: "Invierno" } }
    ]
  },
  { nombre: 1, precio: 1, "especificaciones.color": 1, "especificaciones.temporada": 1 }
);

// -------------------------------------------------------------------
// PREGUNTA 3 - Colección sellers (sort, limit, skip, arrays)
// -------------------------------------------------------------------

// 1) Utilizando la colección vendedores mostrar nombres, ventas mensuales y sede en la que labora,
//    la lista debe mostrar después del tercer documento,
//    filtre por sede que sea la "Sucursal Sur". Ordene por cualquier campo (aquí: nombre).
console.log("\n--- PREGUNTA 3.1 ---");
db.sellers
  .find(
    { sucursal: "Sucursal Sur" },
    { _id: 0, nombre: 1, apellidos: 1, sucursal: 1, "metas.ventasMensuales": 1 }
  )
  .sort({ nombre: 1 })
  .skip(3);

// 2) Listar sólo los nombres, apellidos y fecha de ingreso (sin "_id"),
//    ordenada en descendente por apellidos, recuperar los 4 primeros documentos.
//    Filtre sólo los vendedores cuya cantidad de clientes nuevos que atienden sean menores e iguales que 20.
console.log("\n--- PREGUNTA 3.2 ---");
db.sellers
  .find(
    { "metas.clientesNuevos": { $lte: 20 } },
    { _id: 0, nombre: 1, apellidos: 1, fechaIngreso: 1 }
  )
  .sort({ apellidos: -1 })
  .limit(4);

// 3) Mostrar todos aquellos vendedores en los que dentro de su campo "ventas mensuales"
//    sea mayor e igual que 10000 y menor que 11000.
//    Ordene en descendente por nombre.
console.log("\n--- PREGUNTA 3.3 ---");
db.sellers
  .find(
    { "metas.ventasMensuales": { $gte: 10000, $lt: 11000 } },
    { _id: 0, nombre: 1, apellidos: 1, "metas.ventasMensuales": 1 }
  )
  .sort({ nombre: -1 });

// -------------------------------------------------------------------
// PREGUNTA 4 - Colección factura (documento comercial)
// -------------------------------------------------------------------
// Se tiene el siguiente comprobante como documento comercial, colección "factura"
// (no debe crear ninguna BD ni colección ni documentos, SÓLO UNA CONSULTA)
// Requerimiento: considere:
// - Visualizar al menos 5 campos.
// - Dos filtros.
// - Un ordenamiento.

console.log("\n--- PREGUNTA 4 ---");
// Esta consulta asume que existe una colección 'factura' con estructura similar al PDF.
// Como no tenemos datos cargados de factura, esto devolverá vacío si se corre,
// pero es el script que se pide.
db.factura
  .find(
    {
      "cliente.distrito": "Miraflores", // Filtro 1
      "items.totalItem": { $gt: 100 }   // Filtro 2
    },
    {
      _id: 0,
      numero: 1,
      fecha: 1,
      "cliente.nombre": 1,
      "cliente.distrito": 1,
      items: { $slice: 3 }, // Visualizar campo complejo
      total: 1,
      "pago.metodo": 1      // Visualizar al menos 5 campos
    }
  )
  .sort({ fecha: -1 }); // Ordenamiento
