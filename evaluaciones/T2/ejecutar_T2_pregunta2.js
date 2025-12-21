// Script para ejecutar PREGUNTA 2 - Operadores Lógicos
// Colección: products
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
    console.log("PREGUNTA 2 - Operadores Lógicos");
    console.log("=".repeat(80) + "\n");
    
    await client.connect();
    console.log("✅ Conectado a MongoDB Atlas");
    
    const db = client.db(dbName);
    console.log(`✅ Base de datos ${dbName} seleccionada\n`);
    
    // ============================================================================
    // Consulta 2.1
    // Listar de los productos _id, nombre, marca, talla y precio de las prendas,
    // filtre cuya sucursal sea "Sucursal Norte" y el precio sea mayor igual a 100.
    // ============================================================================
    console.log("=".repeat(80));
    console.log("POR: JOSE GORGE MONTERO VILCAS");
    console.log("CONSULTA 2.1: Productos de Sucursal Norte con precio >= 100");
    console.log("=".repeat(80));
    
    const consulta2_1 = await db.collection('products').find(
      {
        $and: [
          { sucursal: "Sucursal Norte" },
          { precio: { $gte: 100 } }
        ]
      },
      {
        projection: {
          _id: 1,
          nombre: 1,
          marca: 1,
          talla: 1,
          precio: 1
        }
      }
    ).toArray();
    
    console.log(`Resultados encontrados: ${consulta2_1.length}\n`);
    
    if (consulta2_1.length === 0) {
      console.log("⚠️  No se encontraron productos que cumplan los criterios.");
      console.log("   Criterios: sucursal = 'Sucursal Norte' AND precio >= 100");
      console.log("   Esto es correcto según los datos insertados.\n");
    } else {
      console.log(JSON.stringify(consulta2_1, null, 2));
    }
    
    // ============================================================================
    // Consulta 2.2
    // Mostrar los productos cuyo precio sea mayor a 55 o color "azul",
    // no considerar de la temporada "Invierno"
    // ============================================================================
    console.log("\n" + "=".repeat(80));
    console.log("POR: JOSE GORGE MONTERO VILCAS");
    console.log("CONSULTA 2.2: Productos precio > 55 o color azul, excluyendo Invierno");
    console.log("=".repeat(80));
    
    const consulta2_2 = await db.collection('products').find(
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
    ).toArray();
    
    console.log(`Resultados encontrados: ${consulta2_2.length}\n`);
    
    if (consulta2_2.length === 0) {
      console.log("⚠️  No se encontraron productos que cumplan los criterios.");
      console.log("   Criterios: (precio > 55 OR color = 'azul') AND temporada != 'Invierno'\n");
    } else {
      console.log(JSON.stringify(consulta2_2, null, 2));
    }
    
    console.log("\n✅ Consultas de la Pregunta 2 completadas");
    
  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    await client.close();
    console.log("\n🔌 Conexión cerrada");
  }
}

ejecutar();

