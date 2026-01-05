// Pregunta 4: Análisis y Consulta de reporte (Escenario Simulado)
// Basado en el comprobante electrónico adjunto.

/**
 * ANÁLISIS DE DATOS SEMIESTRUCTURADOS (Mapeo de Imagen a MongoDB)
 * -------------------------------------------------------------
 * Colección Sugerida: "boleta"
 * 
 * Campos Identificados:
 * 1. nro_comprobante: "F002-00003848"
 * 2. cliente: "SOMA LIMA S.A.C."
 * 3. ruc: "20602953638"
 * 4. fecha_emision: ISODate("2020-09-14T11:14:48Z")
 * 5. total_venta: 2.40
 * 6. vendedor: "ANDRES P.C."
 */

async function mostrarSimulacion() {
  console.log("==========================================================");
  console.log("   REPORTE DE ANÁLISIS DE DATOS: COLECCIÓN 'boleta'       ");
  console.log("          (ESCENARIO SUPUESTO / SIMULACIÓN)               ");
  console.log("==========================================================\n");

  console.log("1. CONSULTA MONGODB PROPUESTA:");
  console.log("----------------------------------------------------------");
  const query = `
  db.boleta.find(
    { 
      // FILTROS:
      total_venta: { $gt: 2.0 },           // Filtro 1: Ventas mayores a S/ 2.00
      vendedor: "ANDRES P.C."               // Filtro 2: Vendedor específico
    },
    { 
      // PROYECCIÓN (5 campos relevantes):
      nro_comprobante: 1, 
      cliente: 1, 
      ruc: 1, 
      fecha_emision: 1, 
      total_venta: 1, 
      _id: 0 
    }
  ).sort({ fecha_emision: -1 });           // ORDENAMIENTO: Por fecha descendente
  `;
  console.log(query);

  console.log("\n2. VISTA PREVIA DEL REPORTE (Simulado):");
  console.log("----------------------------------------------------------");
  
  // Simulamos cómo se vería el documento de la imagen en el reporte
  const simulacionData = [
    {
      nro_comprobante: "F002-00003848",
      cliente: "SOMA LIMA S.A.C.",
      ruc: "20602953638",
      fecha_emision: "2020-09-14 11:14:48",
      total_venta: 2.40,
      vendedor: "ANDRES P.C."
    }
  ];

  console.table(simulacionData);

  console.log("\n3. JUSTIFICACIÓN DEL ANÁLISIS:");
  console.log("- Se seleccionaron campos clave para auditoría de ventas.");
  console.log("- El filtro de total_venta permite identificar transacciones significativas.");
  console.log("- El ordenamiento cronológico facilita el seguimiento de operaciones.");
}

// Ejecutar la simulación visual
mostrarSimulacion();

