// Script para ejecutar PREGUNTA 1 - Operadores de Comparación
// Colección: clients
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
    console.log("PREGUNTA 1 - Operadores de Comparación");
    console.log("=".repeat(80) + "\n");
    
    await client.connect();
    console.log("✅ Conectado a MongoDB Atlas");
    
    const db = client.db(dbName);
    console.log(`✅ Base de datos ${dbName} seleccionada\n`);
    
    // ============================================================================
    // Consulta 1.1
    // Muestre los clientes que no residan en Breña ni en La Molina.
    // Ordene en descendente por apellidos.
    // Sólo debe mostrar los campos: nombres, apellidos, email e historial de compras.
    // ============================================================================
    console.log("=".repeat(80));
    console.log("POR: JOSE GORGE MONTERO VILCAS");
    console.log("CONSULTA 1.1: Clientes que NO residen en Breña ni en La Molina");
    console.log("=".repeat(80));
    
    const consulta1_1 = await db.collection('clients').find(
      {
        $nor: [
          { direccion: { $regex: /Breña/i } },
          { direccion: { $regex: /La Molina/i } }
        ]
      },
      {
        projection: {
          _id: 0,
          nombre: 1,
          apellidos: 1,
          email: 1,
          historialCompras: 1
        }
      }
    ).sort({ apellidos: -1 }).toArray();
    
    console.log(`Resultados encontrados: ${consulta1_1.length}\n`);
    console.log(JSON.stringify(consulta1_1, null, 2));
    
    // ============================================================================
    // Consulta 1.2
    // Muestre los clientes que tienen como parte de sus preferencias ropa de niños.
    // Considere visualizar sólo los campos: nombres, apellidos, fecha de registro y preferencias.
    // Ordene por fecha de registros de manera ascendente.
    // ============================================================================
    console.log("\n" + "=".repeat(80));
    console.log("POR: JOSE GORGE MONTERO VILCAS");
    console.log("CONSULTA 1.2: Clientes con preferencias de ropa de niños");
    console.log("=".repeat(80));
    
    // Para buscar en un array, MongoDB busca automáticamente si el valor está en el array
    // Usamos directamente el valor "Niño" sin necesidad de $in
    const consulta1_2 = await db.collection('clients').find(
      {
        preferencias: "Niño"
      },
      {
        projection: {
          _id: 0,
          nombre: 1,
          apellidos: 1,
          fechaRegistro: 1,
          preferencias: 1
        }
      }
    ).sort({ fechaRegistro: 1 }).toArray();
    
    console.log(`Resultados encontrados: ${consulta1_2.length}\n`);
    console.log(JSON.stringify(consulta1_2, null, 2));
    
    console.log("\n✅ Consultas de la Pregunta 1 completadas");
    
  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    await client.close();
    console.log("\n🔌 Conexión cerrada");
  }
}

ejecutar();

