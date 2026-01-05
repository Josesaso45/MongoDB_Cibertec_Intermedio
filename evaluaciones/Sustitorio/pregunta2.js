// Pregunta 2: Operadores lógicos ($and, $or, $not, $nor)
require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI || "mongodb+srv://josemontero2415:Monteraso654@cluster0.1sm7nw4.mongodb.net/";
const dbName = 'BD_Salud';

async function ejecutar() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db(dbName);

    console.log("--- 2.1 Consultas con estado no 'pagado', monto < 230 y monto >= 90 ---");
    // Nota: El monto en el script original es String, lo tratamos como tal o convertimos
    const result1 = await db.collection('consultas').find(
      {
        $and: [
          { estado: { $ne: "pagado" } },
          { monto: { $lt: "230", $gte: "90" } }
        ]
      },
      { projection: { _idcon: 1, respon_pago: 1, monto: 1, caja: 1, estado: 1, _id: 0 } }
    ).sort({ caja: -1 }).toArray();
    console.table(result1);

    console.log("\n--- 2.2 Consultas con monto > 95 o estado 'anulado' (descartar _idcon 12 y 16) ---");
    const result2 = await db.collection('consultas').find(
      {
        $and: [
          { $or: [{ monto: { $gt: "95" } }, { estado: "anulado" }] },
          { _idcon: { $nin: [12, 16] } }
        ]
      }
    ).toArray();
    console.table(result2);

  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    await client.close();
  }
}

ejecutar();

