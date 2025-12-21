// Script para ejecutar las sentencias MongoDB usando Node.js
// Cargar variables de entorno desde .env (similar a Python)
require('dotenv').config();
const { MongoClient } = require('mongodb');

// Connection string de MongoDB Atlas desde variable de entorno
const uri = process.env.MONGODB_URI || "mongodb+srv://josemontero2415:Monteraso654@cluster0.1sm7nw4.mongodb.net/";
const dbName = process.env.DB_NAME || 'dbTechStore';

const client = new MongoClient(uri);

async function ejecutar() {
  try {
    // Conectar a MongoDB
    await client.connect();
    console.log("✅ Conectado a MongoDB Atlas");
    
    // Seleccionar la base de datos
    const db = client.db(dbName);
    console.log(`✅ Base de datos ${dbName} seleccionada`);
    
    // Insertar equipos uno por uno
    console.log("\n📦 Insertando equipos...");
    
    const equipos = [
      {
        nombre: "Laptop Asus",
        categoria: "Portátiles",
        precio: 2500,
        stock: 30,
        accesorios: ["Cargador", "Funda de protección", "Ratón inalámbrico"]
      },
      {
        nombre: "Monitor LG",
        categoria: "Monitores",
        precio: 999,
        stock: 20,
        accesorios: ["Cable HDMI", "Base ajustable", "Adaptador de corriente"]
      },
      {
        nombre: "Teclado Logitech",
        categoria: "Teclados",
        precio: 180,
        stock: 30,
        accesorios: ["Reposamuñecas", "Extractor de teclas", "Cable USB desmontable"]
      },
      {
        nombre: "Impresora Epson",
        categoria: "Impresoras",
        precio: 1230,
        stock: 100,
        accesorios: ["Cartucho de tóner", "Cable USB", "Manual de usuario"]
      },
      {
        nombre: "Tablet Lenovo",
        categoria: "Tablets",
        precio: 1750,
        stock: 300,
        accesorios: ["Cargador rápido", "Funda protectora", "Lápiz táctil"]
      }
    ];
    
    for (const equipo of equipos) {
      const result = await db.collection('equipos').insertOne(equipo);
      console.log(`  ✅ Insertado: ${equipo.nombre} (ID: ${result.insertedId})`);
    }
    
    // Insertar clientes de forma masiva
    console.log("\n👥 Insertando clientes (inserción masiva)...");
    
    const clientes = [
      {
        codigo: "001",
        nombre: "Juan",
        apellido: "Pérez",
        fechaNacimiento: new Date("1990-05-15"),
        celular: "987654321",
        categoriasInteres: ["Laptops", "Monitores", "Impresoras"]
      },
      {
        codigo: "002",
        nombre: "Ana",
        apellido: "Gómez",
        fechaNacimiento: null,
        celular: "987654322",
        categoriasInteres: ["Tablets", "Teclados", "Ratones", "Monitores"]
      },
      {
        codigo: "003",
        nombre: "Luis",
        apellido: "Martínez",
        fechaNacimiento: new Date("1988-11-30"),
        celular: "987654323",
        categoriasInteres: ["Laptops", "Accesorios", "Impresoras", "Teclados"]
      },
      {
        codigo: "004",
        nombre: "María",
        apellido: "López",
        fechaNacimiento: new Date("1988-02-17"),
        celular: null,
        categoriasInteres: ["Impresoras", "Monitores", "Proyectores"]
      },
      {
        codigo: "005",
        nombre: "Sofía",
        apellido: "Ramírez",
        fechaNacimiento: new Date("1993-09-25"),
        celular: "987654326",
        categoriasInteres: ["Tablets", "Accesorios", "Software", "Monitores"]
      }
    ];
    
    const resultClientes = await db.collection('clientes').insertMany(clientes);
    console.log(`  ✅ Insertados ${resultClientes.insertedCount} clientes`);
    
    // Verificar los datos insertados
    console.log("\n📊 Verificando datos insertados...");
    const countEquipos = await db.collection('equipos').countDocuments();
    const countClientes = await db.collection('clientes').countDocuments();
    
    console.log(`  📦 Equipos: ${countEquipos}`);
    console.log(`  👥 Clientas: ${countClientes}`);
    
    console.log("\n✅ ¡Proceso completado exitosamente!");
    
  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    await client.close();
    console.log("\n🔌 Conexión cerrada");
  }
}

ejecutar();

