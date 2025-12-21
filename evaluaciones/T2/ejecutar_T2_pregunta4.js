// Script para ejecutar PREGUNTA 4 - Análisis de Datos Semiestructurados
// Colección: factura (ya existe, NO crear)
// Curso: Base de Datos Avanzado II
// Alumno: JOSE GORGE MONTERO VILCAS

require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI || "mongodb+srv://josemontero2415:Monteraso654@cluster0.1sm7nw4.mongodb.net/";
const dbName = process.env.DB_NAME_T2 || 'UrbanStyle_Store';

const client = new MongoClient(uri);

async function ejecutar() {
  try {
    console.log("\n" + "=".repeat(80));
    console.log("POR: JOSE GORGE MONTERO VILCAS");
    console.log("PREGUNTA 4 - Análisis de Datos Semiestructurados");
    console.log("=".repeat(80) + "\n");
    
    await client.connect();
    console.log("✅ Conectado a MongoDB Atlas");
    
    const db = client.db(dbName);
    console.log(`✅ Base de datos ${dbName} seleccionada\n`);
    
    // Verificar si existe la colección factura
    const collections = await db.listCollections().toArray();
    const facturaExists = collections.some(col => col.name === 'factura');
    
    if (!facturaExists) {
      console.log("⚠️  La colección 'factura' no existe en la base de datos.");
      console.log("⚠️  Esta consulta es un ejemplo que debe ajustarse según la estructura real de los documentos.\n");
    }
    
    // ============================================================================
    // Consulta 4
    // Análisis de datos semiestructurados en MongoDB para un proyecto de TI.
    // Basado en la estructura de la factura proporcionada:
    // - Empresa: Rojo Polo Paella Inc.
    // - Cliente: Leda Villareal
    // - N° Factura, Fecha, Items, Total, etc.
    // 
    // Requisitos:
    // - Visualizar al menos 5 campos
    // - Dos filtros
    // - Un ordenamiento
    // ============================================================================
    console.log("=".repeat(80));
    console.log("POR: JOSE GORGE MONTERO VILCAS");
    console.log("CONSULTA 4: Análisis de facturas");
    console.log("=".repeat(80));
    console.log("Requisitos:");
    console.log("  - Visualizar al menos 5 campos");
    console.log("  - Dos filtros");
    console.log("  - Un ordenamiento\n");
    
    // Consulta basada en la estructura de la factura de la imagen
    const consulta4 = await db.collection('factura').find(
      {
        // Filtro 1: Total de factura mayor a 150 euros
        "totalFactura": { $gt: 150 },
        // Filtro 2: Fecha del año 2019
        "fecha": { $regex: /2019/ }
      },
      {
        // Visualizar al menos 5 campos
        projection: {
          _id: 1,
          numeroFactura: 1,
          fecha: 1,
          cliente: 1,
          totalFactura: 1,
          items: 1
        }
      }
    ).sort({ totalFactura: -1 }).toArray(); // Ordenamiento descendente por total de factura
    
    console.log(`Resultados encontrados: ${consulta4.length}\n`);
    
    if (consulta4.length > 0) {
      console.log(JSON.stringify(consulta4, null, 2));
    } else {
      console.log("No se encontraron documentos que cumplan los criterios.");
      console.log("\n📋 Estructura esperada de la factura (basada en la imagen):");
      console.log("   - numeroFactura: 'ES-001'");
      console.log("   - fecha: '29/01/2019'");
      console.log("   - cliente: { nombre: 'Leda Villareal', direccion: '...' }");
      console.log("   - empresa: { nombre: 'Rojo Polo Paella Inc.', direccion: '...' }");
      console.log("   - items: [{ cantidad, descripcion, precioUnitario, importe }]");
      console.log("   - subtotal: 165.00");
      console.log("   - iva: 34.65");
      console.log("   - totalFactura: 199.65");
      console.log("\nNOTA: Esta consulta debe ajustarse según la estructura real");
      console.log("de los documentos en la colección 'factura' proporcionada por el docente.");
    }
    
    console.log("\n✅ Consulta de la Pregunta 4 completada");
    
  } catch (error) {
    console.error("❌ Error:", error);
    console.log("\nNOTA: Si la colección 'factura' no existe o tiene una estructura diferente,");
    console.log("ajusta la consulta según los documentos reales proporcionados por el docente.");
  } finally {
    await client.close();
    console.log("\n🔌 Conexión cerrada");
  }
}

ejecutar();

