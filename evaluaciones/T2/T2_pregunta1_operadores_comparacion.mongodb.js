// PREGUNTA 1 - Operadores de Comparación
// Colección: clients
// Curso: Base de Datos Avanzado II
// Alumno: JOSE GORGE MONTERO VILCAS

use('UrbanStyle_Store');

// ============================================================================
// Consulta 1.1
// Muestre los clientes que no residan en Breña ni en La Molina.
// Ordene en descendente por apellidos.
// Sólo debe mostrar los campos: nombres, apellidos, email e historial de compras.
// ============================================================================

db.clients.find(
  {
    $nor: [
      { direccion: { $regex: /Breña/i } },
      { direccion: { $regex: /La Molina/i } }
    ]
  },
  {
    _id: 0,
    nombre: 1,
    apellidos: 1,
    email: 1,
    historialCompras: 1
  }
).sort({ apellidos: -1 });

// ============================================================================
// Consulta 1.2
// Muestre los clientes que tienen como parte de sus preferencias ropa de niños.
// Considere visualizar sólo los campos: nombres, apellidos, fecha de registro y preferencias.
// Ordene por fecha de registros de manera ascendente.
// ============================================================================

db.clients.find(
  {
    preferencias: { $in: ["Niño"] }
  },
  {
    _id: 0,
    nombre: 1,
    apellidos: 1,
    fechaRegistro: 1,
    preferencias: 1
  }
).sort({ fechaRegistro: 1 });

