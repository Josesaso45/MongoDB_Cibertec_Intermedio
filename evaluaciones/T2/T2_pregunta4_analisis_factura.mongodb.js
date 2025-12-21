// PREGUNTA 4 - Análisis de Datos Semiestructurados
// Colección: factura (ya existe, NO crear)
// Curso: Base de Datos Avanzado II
// Alumno: JOSE GORGE MONTERO VILCAS

use('UrbanStyle_Store');

// ============================================================================
// Consulta 4
// Análisis de datos semiestructurados en MongoDB para un proyecto de TI.
// Crear un reporte donde considere:
// - Visualizar al menos 5 campos
// - Dos filtros
// - Un ordenamiento
// ============================================================================

// Ejemplo de consulta sobre la colección factura
// (Ajustar según la estructura real de los documentos de factura)

db.factura.find(
  {
    // Filtro 1: Monto total mayor a cierto valor
    "total": { $gt: 100 },
    // Filtro 2: Estado de la factura
    "estado": "Pagado"
  },
  {
    // Visualizar al menos 5 campos
    _id: 1,
    numeroFactura: 1,
    fecha: 1,
    cliente: 1,
    total: 1,
    items: 1
  }
).sort({ fecha: -1 }); // Ordenamiento descendente por fecha

// NOTA: Esta consulta es un ejemplo. Debe ajustarse según la estructura
// real de los documentos en la colección "factura" proporcionada por el docente.

