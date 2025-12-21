// Script para ejecutar PREGUNTA 3 - Operadores de Array y Métodos (sort, limit, skip)
// Colección: sellers
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
    console.log("PREGUNTA 3 - Operadores de Array y Métodos");
    console.log("=".repeat(80) + "\n");
    
    await client.connect();
    console.log("✅ Conectado a MongoDB Atlas");
    
    const db = client.db(dbName);
    console.log(`✅ Base de datos ${dbName} seleccionada\n`);
    
    // ============================================================================
    // Consulta 3.1
    // Utilizando la colección vendedores mostrar nombres, ventas mensuales y sede
    // en la que labora, la lista debe mostrar después del tercer documento,
    // filtre por sede que sea la "Sucursal Sur". Ordene por cualquier campo.
    // ============================================================================
    console.log("=".repeat(80));
    console.log("POR: JOSE GORGE MONTERO VILCAS");
    console.log("CONSULTA 3.1: Vendedores de Sucursal Sur después del 3er documento");
    console.log("=".repeat(80));
    
    const consulta3_1 = await db.collection('sellers').find(
      {
        sucursal: "Sucursal Sur"
      },
      {
        projection: {
          _id: 0,
          nombre: 1,
          "metas.ventasMensuales": 1,
          sucursal: 1
        }
      }
    ).sort({ nombre: 1 }).skip(3).toArray();
    
    console.log(`Resultados encontrados: ${consulta3_1.length}\n`);
    console.log(JSON.stringify(consulta3_1, null, 2));
    
    // ============================================================================
    // Consulta 3.2
    // Listar sólo los nombres, apellidos y fecha de ingreso (sin "_id"),
    // ordenada en descendente por apellidos, recuperar los 4 primeros documentos.
    // Filtre sólo los vendedores cuya cantidad de clientes nuevos que atienden
    // sean menores e iguales que 20.
    // ============================================================================
    console.log("\n" + "=".repeat(80));
    console.log("POR: JOSE GORGE MONTERO VILCAS");
    console.log("CONSULTA 3.2: Vendedores con clientes nuevos <= 20, primeros 4");
    console.log("=".repeat(80));
    
    const consulta3_2 = await db.collection('sellers').find(
      {
        "metas.clientesNuevos": { $lte: 20 }
      },
      {
        projection: {
          _id: 0,
          nombre: 1,
          apellidos: 1,
          fechaIngreso: 1
        }
      }
    ).sort({ apellidos: -1 }).limit(4).toArray();
    
    console.log(`Resultados encontrados: ${consulta3_2.length}\n`);
    console.log(JSON.stringify(consulta3_2, null, 2));
    
    // ============================================================================
    // Consulta 3.3
    // Mostrar todos aquellos vendedores en los que dentro de su campo
    // "ventas mensuales" sea mayor e igual que 10000 y menor que 11000.
    // Ordene en descendente por nombre.
    // ============================================================================
    console.log("\n" + "=".repeat(80));
    console.log("POR: JOSE GORGE MONTERO VILCAS");
    console.log("CONSULTA 3.3: Vendedores con ventas entre 10000 y 11000");
    console.log("=".repeat(80));
    
    const consulta3_3 = await db.collection('sellers').find(
      {
        $and: [
          { "metas.ventasMensuales": { $gte: 10000 } },
          { "metas.ventasMensuales": { $lt: 11000 } }
        ]
      }
    ).sort({ nombre: -1 }).toArray();
    
    console.log(`Resultados encontrados: ${consulta3_3.length}\n`);
    console.log(JSON.stringify(consulta3_3, null, 2));
    
    console.log("\n✅ Consultas de la Pregunta 3 completadas");
    
  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    await client.close();
    console.log("\n🔌 Conexión cerrada");
  }
}

ejecutar();

