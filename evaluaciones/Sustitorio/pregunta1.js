// Pregunta 1: Operadores de comparación ($eq, $gt, $gte, $in, $lt, $lte, $ne, $nin)
require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI || "mongodb+srv://josemontero2415:Monteraso654@cluster0.1sm7nw4.mongodb.net/";
const dbName = 'BD_Salud';

async function ejecutar() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db(dbName);

    console.log("--- 1.1 Pacientes que no residen en Lurin, Ate ni Comas ---");
    const result1 = await db.collection('pacientes').find(
      { distrito: { $nin: ["Lurin", "Ate", "Comas"] } },
      { projection: { nompac: 1, apellidos: 1, edad: 1, distrito: 1, _id: 0 } }
    ).sort({ apellidos: -1 }).toArray();
    console.table(result1);

    console.log("\n--- 1.2 Pacientes con edades entre 20 y 70 años ---");
    const result2 = await db.collection('pacientes').find(
      { edad: { $gte: 20, $lte: 70 } },
      { projection: { apellidos: 1, edad: 1, actividad: 1, _id: 0 } }
    ).sort({ edad: 1 }).toArray();
    console.table(result2);

  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    await client.close();
  }
}

ejecutar();

