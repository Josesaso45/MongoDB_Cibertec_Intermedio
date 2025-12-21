// Script maestro para cargar y consultar todo en orden (T2)
// Asegúrate de conectarte a tu cluster Atlas antes de ejecutarlo si usas mongosh

// 1. Cargar datos (branch, clients, sellers, products)
load("t2/01_us_branch.mongodb");
load("t2/02_us_clients.mongodb");
load("t2/03_us_sellers.mongodb");
load("t2/04_us_products.mongodb");

// 2. Verificar carga
use("UrbanStyle_store");
console.log("Branch count:", db.branch.countDocuments());
console.log("Clients count:", db.clients.countDocuments());
console.log("Sellers count:", db.sellers.countDocuments());
console.log("Products count:", db.products.countDocuments());

// 3. Ejecutar consultas del examen
load("t2/05_urbanstyle_t2_queries.mongodb.js");

