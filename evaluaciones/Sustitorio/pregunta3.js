// Pregunta 3: Operadores de Array y Paginación ($all, $elemMatch, $size, $slice, skip, limit)
require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI || "mongodb+srv://josemontero2415:Monteraso654@cluster0.1sm7nw4.mongodb.net/";
const dbName = 'BD_Salud';

async function ejecutar() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db(dbName);

    console.log("--- 3.1 Clínicas en 'Lima Cercado' después del tercer documento ---");
    const result1 = await db.collection('clinicas').find(
      { sede: "dis081" },
      { projection: { nomclinica: 1, antiguedad: 1, sede: 1, _id: 0 } }
    ).sort({ nomclinica: 1 }).skip(3).toArray();
    console.table(result1);

    console.log("\n--- 3.2 Los 8 primeros pacientes mayores de edad (18+) ---");
    const result2 = await db.collection('pacientes').find(
      { edad: { $gte: 18 } },
      { projection: { nompac: 1, apellidos: 1, edad: 1, _id: 0 } }
    ).sort({ edad: -1 }).limit(8).toArray();
    console.table(result2);

    console.log("\n--- 3.3 Pacientes que tienen 'Leer' y 'Caminar' en sus actividades ---");
    const result3 = await db.collection('pacientes').find(
      { actividad: { $all: ["Leer", "Caminar"] } },
      { projection: { nompac: 1, apellidos: 1, distrito: 1, actividad: 1, _id: 0 } }
    ).sort({ distrito: -1 }).toArray();
    console.table(result3);

  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    await client.close();
  }
}

ejecutar();

