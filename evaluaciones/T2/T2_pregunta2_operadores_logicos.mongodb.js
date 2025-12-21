// PREGUNTA 2 - Operadores Lógicos
// Colección: products
// Curso: Base de Datos Avanzado II
// Alumno: JOSE GORGE MONTERO VILCAS

use('UrbanStyle_Store');

// ============================================================================
// Consulta 2.1
// Listar de los productos _id, nombre, marca, talla y precio de las prendas,
// filtre cuya sucursal sea "Sucursal Norte" y el precio sea mayor igual a 100.
// ============================================================================

db.products.find(
  {
    $and: [
      { sucursal: "Sucursal Norte" },
      { precio: { $gte: 100 } }
    ]
  },
  {
    _id: 1,
    nombre: 1,
    marca: 1,
    talla: 1,
    precio: 1
  }
);

// ============================================================================
// Consulta 2.2
// Mostrar los productos cuyo precio sea mayor a 55 o color "azul",
// no considerar de la temporada "Invierno"
// ============================================================================

db.products.find(
  {
    $and: [
      {
        $or: [
          { precio: { $gt: 55 } },
          { "especificaciones.color": { $regex: /azul/i } }
        ]
      },
      { "especificaciones.temporada": { $ne: "Invierno" } }
    ]
  }
);

