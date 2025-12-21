# T2 - UrbanStyle Store (Atlas)

Carpeta organizada para el examen T2.

## Estructura
- `01_us_branch.mongodb`: Carga sucursales.
- `02_us_clients.mongodb`: Carga clientes.
- `03_us_sellers.mongodb`: Carga vendedores.
- `04_us_products.mongodb`: Carga productos.
- `05_urbanstyle_t2_queries.mongodb.js`: **Consultas del Examen (Preguntas 1 a 4)**.

## Ejecución en Atlas
1. Conéctate a tu cluster Atlas:
   - Desde VS Code (extensión MongoDB): Click derecho en tu conexión -> "Create MongoDB Playground".
   - O desde terminal con `mongosh "mongodb+srv://..."`.

2. Ejecuta los scripts en orden. 
   - Puedes usar el script maestro si estás en mongosh local o terminal:
     ```bash
     mongosh "TU_URI_DE_ATLAS" --file "t2/00_master_script.js"
     ```
   - O cargar uno a uno en el Playground.

3. Evidencias
   - Ejecuta `05_urbanstyle_t2_queries.mongodb.js` y toma captura de los resultados para el PDF.
