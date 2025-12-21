# C4 Model - Nivel 2: Container Diagram

## Diagrama de Contenedores - TechStore Application

```
┌─────────────────────────────────────────────────────────────────┐
│                    TechStore Application                        │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              Node.js Runtime Environment                 │  │
│  │                                                          │  │
│  │  ┌──────────────────┐      ┌──────────────────┐        │  │
│  │  │  ejecutar_mongodb │      │ ejercicio_pregunta│       │  │
│  │  │      .js          │      │      1.mongodb.js │       │  │
│  │  │                  │      │                  │       │  │
│  │  │  - Conexión      │      │  - Playground    │       │  │
│  │  │  - Inserción      │      │  - Consultas     │       │  │
│  │  │  - Validación    │      │  - Pruebas      │       │  │
│  │  └──────────────────┘      └──────────────────┘       │  │
│  │                                                          │  │
│  │  ┌──────────────────────────────────────────────┐     │  │
│  │  │         MongoDB Driver (npm)                  │     │  │
│  │  │  - MongoClient                                 │     │  │
│  │  │  - Conexión a Atlas                           │     │  │
│  │  │  - Operaciones CRUD                           │     │  │
│  │  └──────────────────────────────────────────────┘     │  │
│  │                                                          │  │
│  │  ┌──────────────────────────────────────────────┐     │  │
│  │  │         dotenv (npm)                          │     │  │
│  │  │  - Carga .env                                 │     │  │
│  │  │  - Variables de entorno                      │     │  │
│  │  └──────────────────────────────────────────────┘     │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              VS Code Extension                           │  │
│  │                                                          │  │
│  │  - MongoDB for VS Code                                  │  │
│  │  - MongoDB Playground                                   │  │
│  │  - Visualización de datos                              │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
└──────────────────────────┬─────────────────────────────────────┘
                           │
                           │ MongoDB Protocol
                           │ (Connection String)
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                    MongoDB Atlas                                │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              Cluster: cluster0.1sm7nw4                  │  │
│  │                                                          │  │
│  │  ┌────────────────────────────────────────────────────┐  │  │
│  │  │         Base de Datos: dbTechStore                 │  │  │
│  │  │                                                    │  │  │
│  │  │  ┌──────────────┐      ┌──────────────┐         │  │  │
│  │  │  │  equipos      │      │  clientes    │         │  │  │
│  │  │  │              │      │              │         │  │  │
│  │  │  │  5 docs      │      │  5 docs      │         │  │  │
│  │  │  └──────────────┘      └──────────────┘         │  │  │
│  │  └────────────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

## Descripción de Contenedores

### 1. Node.js Runtime Environment
**Tecnología**: Node.js v22.20.0
**Responsabilidad**: Ejecutar scripts JavaScript
**Contiene**:
- Scripts de aplicación
- Dependencias npm (mongodb, dotenv)

### 2. ejecutar_mongodb.js
**Tipo**: Script de ejecución
**Responsabilidad**: 
- Conectar a MongoDB
- Insertar datos (equipos y clientes)
- Validar inserción

### 3. ejercicio_pregunta1.mongodb.js
**Tipo**: MongoDB Playground Script
**Responsabilidad**:
- Consultas y operaciones interactivas
- Pruebas y desarrollo

### 4. MongoDB Driver
**Tecnología**: mongodb npm package
**Responsabilidad**:
- Cliente MongoDB para Node.js
- Gestión de conexiones
- Operaciones CRUD

### 5. dotenv
**Tecnología**: dotenv npm package
**Responsabilidad**:
- Cargar variables de entorno desde `.env`
- Gestión de configuración

### 6. VS Code Extension
**Tecnología**: MongoDB for VS Code
**Responsabilidad**:
- Interfaz visual para MongoDB
- Playground interactivo
- Exploración de datos

### 7. MongoDB Atlas
**Tecnología**: MongoDB Cloud
**Responsabilidad**:
- Almacenamiento de datos
- Gestión de colecciones
- Escalabilidad

## Comunicación
- Node.js Scripts → MongoDB Driver → MongoDB Atlas (MongoDB Protocol)
- VS Code Extension → MongoDB Atlas (MongoDB Protocol directo)

