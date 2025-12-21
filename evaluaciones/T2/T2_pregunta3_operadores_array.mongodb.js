// PREGUNTA 3 - Operadores de Array y Métodos (sort, limit, skip)
// Colección: sellers
// Curso: Base de Datos Avanzado II
// Alumno: JOSE GORGE MONTERO VILCAS

use('UrbanStyle_Store');

// ============================================================================
// Consulta 3.1
// Utilizando la colección vendedores mostrar nombres, ventas mensuales y sede
// en la que labora, la lista debe mostrar después del tercer documento,
// filtre por sede que sea la "Sucursal Sur". Ordene por cualquier campo.
// ============================================================================

db.sellers.find(
  {
    sucursal: "Sucursal Sur"
  },
  {
    _id: 0,
    nombre: 1,
    "metas.ventasMensuales": 1,
    sucursal: 1
  }
).sort({ nombre: 1 }).skip(3);

// ============================================================================
// Consulta 3.2
// Listar sólo los nombres, apellidos y fecha de ingreso (sin "_id"),
// ordenada en descendente por apellidos, recuperar los 4 primeros documentos.
// Filtre sólo los vendedores cuya cantidad de clientes nuevos que atienden
// sean menores e iguales que 20.
// ============================================================================

db.sellers.find(
  {
    "metas.clientesNuevos": { $lte: 20 }
  },
  {
    _id: 0,
    nombre: 1,
    apellidos: 1,
    fechaIngreso: 1
  }
).sort({ apellidos: -1 }).limit(4);

// ============================================================================
// Consulta 3.3
// Mostrar todos aquellos vendedores en los que dentro de su campo
// "ventas mensuales" sea mayor e igual que 10000 y menor que 11000.
// Ordene en descendente por nombre.
// ============================================================================

db.sellers.find(
  {
    $and: [
      { "metas.ventasMensuales": { $gte: 10000 } },
      { "metas.ventasMensuales": { $lt: 11000 } }
    ]
  }
).sort({ nombre: -1 });

