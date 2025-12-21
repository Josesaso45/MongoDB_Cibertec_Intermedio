# C4 Model - Nivel 3: Component Diagram

## Diagrama de Componentes - ejecutar_mongodb.js

```
┌─────────────────────────────────────────────────────────────┐
│              ejecutar_mongodb.js                            │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐ │
│  │           Función Principal: ejecutar()              │ │
│  │                                                       │ │
│  │  ┌──────────────────────────────────────────────┐   │ │
│  │  │  1. Conexión a MongoDB                       │   │ │
│  │  │     - MongoClient.connect()                   │   │ │
│  │  │     - Validación de URI                      │   │ │
│  │  └──────────────────────────────────────────────┘   │ │
│  │                                                       │ │
│  │  ┌──────────────────────────────────────────────┐   │ │
│  │  │  2. Selección de Base de Datos               │   │ │
│  │  │     - client.db('dbTechStore')                │   │ │
│  │  └──────────────────────────────────────────────┘   │ │
│  │                                                       │ │
│  │  ┌──────────────────────────────────────────────┐   │ │
│  │  │  3. Inserción de Equipos                     │   │ │
│  │  │     - Loop sobre array de equipos            │   │ │
│  │  │     - db.equipos.insertOne() (individual)    │   │ │
│  │  │     - Logging de cada inserción              │   │ │
│  │  └──────────────────────────────────────────────┘   │ │
│  │                                                       │ │
│  │  ┌──────────────────────────────────────────────┐   │ │
│  │  │  4. Inserción de Clientes                    │   │ │
│  │  │     - db.clientes.insertMany() (masiva)      │   │ │
│  │  │     - Manejo de errores                      │   │ │
│  │  └──────────────────────────────────────────────┘   │ │
│  │                                                       │ │
│  │  ┌──────────────────────────────────────────────┐   │ │
│  │  │  5. Verificación                              │   │ │
│  │  │     - countDocuments()                        │   │ │
│  │  │     - Logging de resultados                  │   │ │
│  │  └──────────────────────────────────────────────┘   │ │
│  │                                                       │ │
│  │  ┌──────────────────────────────────────────────┐   │ │
│  │  │  6. Cierre de Conexión                       │   │ │
│  │  │     - client.close()                          │   │ │
│  │  │     - Manejo de errores en finally           │   │ │
│  │  └──────────────────────────────────────────────┘   │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐ │
│  │           Datos: Arrays de Objetos                   │ │
│  │                                                       │ │
│  │  - equipos[]: 5 objetos con estructura definida    │ │
│  │  - clientes[]: 5 objetos con estructura definida     │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                             │
└──────────────────────────┬─────────────────────────────────┘
                            │
                            │ Usa
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│              MongoDB Driver (mongodb npm)                    │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │  MongoClient │  │    Db        │  │  Collection  │     │
│  │              │  │              │  │              │     │
│  │  - connect() │  │  - collection│  │  - insertOne │     │
│  │  - close()   │  │    ()        │  │  - insertMany│     │
│  └──────────────┘  └──────────────┘  │  - find()    │     │
│                                      │  - countDocs │     │
│                                      └──────────────┘     │
└─────────────────────────────────────────────────────────────┘
```

## Flujo de Ejecución

### 1. Inicialización
```javascript
const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
```

### 2. Conexión
```javascript
await client.connect();
const db = client.db('dbTechStore');
```

### 3. Proceso de Inserción

#### Equipos (Individual)
```
Para cada equipo en equipos[]:
  ├─ Preparar documento
  ├─ db.equipos.insertOne(equipo)
  ├─ Obtener insertedId
  └─ Log resultado
```

#### Clientes (Masiva)
```
Preparar array clientes[]
├─ db.clientes.insertMany(clientes)
├─ Obtener insertedCount
└─ Log resultado
```

### 4. Verificación
```javascript
const countEquipos = await db.collection('equipos').countDocuments();
const countClientes = await db.collection('clientes').countDocuments();
```

### 5. Cierre
```javascript
await client.close();
```

## Manejo de Errores
- Try-catch para operaciones asíncronas
- Finally para garantizar cierre de conexión
- Logging de errores con console.error

