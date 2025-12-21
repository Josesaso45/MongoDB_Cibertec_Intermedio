# TechStore - MongoDB Project

Proyecto de gestión de base de datos NoSQL para TechStore, una empresa de venta de equipos informáticos.

## 📋 Tabla de Contenidos

- [Descripción](#descripción)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Uso](#uso)
- [Documentación](#documentación)
- [Variables de Entorno (.env)](#variables-de-entorno-env)
- [Procesos y Flujos](#procesos-y-flujos)

## 📖 Descripción

Este proyecto implementa una base de datos MongoDB para gestionar:
- **Equipos informáticos**: Laptops, monitores, teclados, impresoras, tablets
- **Clientes**: Información de clientes con sus categorías de interés

Utiliza MongoDB Atlas (cloud) como base de datos documental NoSQL.

## 📁 Estructura del Proyecto

```
MongoDB_Cibertec/
│
├── docs/
│   ├── adr/                          # Architecture Decision Records
│   │   ├── 0001-decision-usar-mongodb.md
│   │   ├── 0002-decision-insercion-individual-vs-masiva.md
│   │   └── 0003-decision-gestion-variables-entorno.md
│   │
│   └── c4/                           # Diagramas C4
│       ├── 01-context-diagram.md     # Nivel 1: Contexto
│       ├── 02-container-diagram.md   # Nivel 2: Contenedores
│       └── 03-component-diagram.md   # Nivel 3: Componentes
│
├── ejecutar_mongodb.js               # Script principal de ejecución
├── ejercicio_pregunta1.mongodb.js    # Playground MongoDB (VS Code)
├── package.json                      # Dependencias npm
├── .env.example                     # Plantilla de variables de entorno
├── .env                              # Variables de entorno (NO versionar)
├── .gitignore                        # Archivos a ignorar en Git
└── README.md                         # Este archivo
```

## 🚀 Instalación

### Prerrequisitos
- Node.js v22.20.0 o superior
- MongoDB Atlas account (o MongoDB local)
- VS Code con extensión "MongoDB for VS Code" (opcional)

### Pasos

1. **Clonar o descargar el proyecto**

2. **Instalar dependencias npm**
```bash
npm install
```

Esto instalará:
- `mongodb`: Driver oficial de MongoDB para Node.js
- `dotenv`: Gestión de variables de entorno (similar a Python)

## ⚙️ Configuración

### Variables de Entorno (.env)

**Sí, npm tiene algo similar a Python `.env`** usando el paquete `dotenv`.

1. **Crear archivo `.env`** (copia desde `.env.example`):
```bash
cp .env.example .env
```

2. **Editar `.env`** con tus credenciales:
```env
MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net/
DB_NAME=dbTechStore
NODE_ENV=development
```

3. **El archivo `.env` está en `.gitignore`** para no versionar credenciales.

### Cómo funciona (similar a Python)

**Python:**
```python
from dotenv import load_dotenv
import os
load_dotenv()
db_uri = os.getenv('MONGODB_URI')
```

**Node.js (npm):**
```javascript
require('dotenv').config();
const uri = process.env.MONGODB_URI;
```

**Ambos:**
- Cargan variables desde `.env`
- Usan `process.env` / `os.getenv()`
- `.env` en `.gitignore`
- `.env.example` como plantilla

## 🎯 Uso

### Opción 1: Ejecutar con Node.js (Recomendado)

```bash
npm start
# o
node ejecutar_mongodb.js
```

Esto ejecutará:
- ✅ Conexión a MongoDB Atlas
- ✅ Creación de base de datos `dbTechStore`
- ✅ Inserción de 5 equipos (uno por uno)
- ✅ Inserción de 5 clientes (masiva)
- ✅ Verificación de datos

### Opción 2: MongoDB Playground (VS Code)

1. Abre `ejercicio_pregunta1.mongodb.js` en VS Code
2. Asegúrate de estar conectado a MongoDB
3. Ejecuta el playground completo o por secciones

### Opción 3: MongoDB Compass

1. Conéctate con tu connection string
2. Navega a `dbTechStore`
3. Explora las colecciones `equipos` y `clientes`

## 📚 Documentación

### Architecture Decision Records (ADR)

Documentación de decisiones arquitectónicas:

- **[ADR-0001](./docs/adr/0001-decision-usar-mongodb.md)**: Decisión de usar MongoDB
- **[ADR-0002](./docs/adr/0002-decision-insercion-individual-vs-masiva.md)**: Inserción individual vs masiva
- **[ADR-0003](./docs/adr/0003-decision-gestion-variables-entorno.md)**: Gestión de variables de entorno

### Diagramas C4

Modelo C4 para entender la arquitectura:

- **[Nivel 1: Context](./docs/c4/01-context-diagram.md)**: Vista general del sistema
- **[Nivel 2: Container](./docs/c4/02-container-diagram.md)**: Contenedores y tecnologías
- **[Nivel 3: Component](./docs/c4/03-component-diagram.md)**: Componentes internos

## 🔐 Variables de Entorno (.env)

### Comparación: Python vs Node.js

| Característica | Python | Node.js (npm) |
|---------------|--------|---------------|
| Paquete | `python-dotenv` | `dotenv` |
| Instalación | `pip install python-dotenv` | `npm install dotenv` |
| Carga | `load_dotenv()` | `require('dotenv').config()` |
| Acceso | `os.getenv('VAR')` | `process.env.VAR` |
| Archivo | `.env` | `.env` |
| Gitignore | ✅ Sí | ✅ Sí |

### Estructura de .env

```env
# MongoDB
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/
DB_NAME=dbTechStore

# Entorno
NODE_ENV=development

# Opcional
MONGODB_TIMEOUT=30000
MONGODB_POOL_SIZE=10
```

### Gestión por Carpetas (Workspaces)

**Sí, npm puede gestionar dependencias por carpetas**, similar a Python con `venv`:

#### Python (venv)
```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
pip install package
```

#### Node.js (npm workspaces o carpetas separadas)
```bash
# Opción 1: Workspaces (monorepo)
npm init -w ./carpeta1
npm install package --workspace=carpeta1

# Opción 2: Carpetas separadas
mkdir proyecto1
cd proyecto1
npm init
npm install package
```

**Para este proyecto:**
- Todas las dependencias están en la raíz
- Si necesitas separar, crea subcarpetas con su propio `package.json`

## 🔄 Procesos y Flujos

### Flujo de Ejecución Principal

```
1. Inicio
   │
   ├─> Cargar .env (dotenv)
   │
   ├─> Conectar a MongoDB Atlas
   │   └─> MongoClient.connect()
   │
   ├─> Seleccionar base de datos
   │   └─> client.db('dbTechStore')
   │
   ├─> Insertar Equipos (uno por uno)
   │   ├─> Loop sobre equipos[]
   │   ├─> db.equipos.insertOne()
   │   └─> Log cada inserción
   │
   ├─> Insertar Clientes (masiva)
   │   ├─> Preparar array clientes[]
   │   ├─> db.clientes.insertMany()
   │   └─> Log resultado
   │
   ├─> Verificar datos
   │   ├─> countDocuments('equipos')
   │   └─> countDocuments('clientes')
   │
   └─> Cerrar conexión
       └─> client.close()
```

### Diferentes Formas de Ejecución

#### 1. **Script Node.js** (`ejecutar_mongodb.js`)
- ✅ Automatizado
- ✅ Manejo de errores
- ✅ Logging detallado
- ✅ Ideal para producción

#### 2. **MongoDB Playground** (`ejercicio_pregunta1.mongodb.js`)
- ✅ Interactivo
- ✅ Pruebas rápidas
- ✅ Visualización en VS Code
- ✅ Ideal para desarrollo

#### 3. **MongoDB Compass**
- ✅ Interfaz gráfica
- ✅ Exploración visual
- ✅ Consultas interactivas
- ✅ Ideal para análisis

#### 4. **MongoDB Shell (mongosh)**
- ✅ Línea de comandos
- ✅ Scripts personalizados
- ✅ Automatización avanzada

## 📊 Estructura de Datos

### Colección: equipos
```javascript
{
  nombre: "Laptop Asus",
  categoria: "Portátiles",
  precio: 2500,
  stock: 30,
  accesorios: ["Cargador", "Funda de protección", "Ratón inalámbrico"]
}
```

### Colección: clientes
```javascript
{
  codigo: "001",
  nombre: "Juan",
  apellido: "Pérez",
  fechaNacimiento: ISODate("1990-05-15"),
  celular: "987654321",
  categoriasInteres: ["Laptops", "Monitores", "Impresoras"]
}
```

## 🛠️ Comandos Útiles

```bash
# Instalar dependencias
npm install

# Ejecutar script
npm start

# Verificar conexión
node -e "require('dotenv').config(); console.log(process.env.MONGODB_URI)"

# Limpiar node_modules (si es necesario)
rm -rf node_modules package-lock.json
npm install
```

## 📝 Notas

- El archivo `.env` **NO debe versionarse** (está en `.gitignore`)
- Usa `.env.example` como plantilla para otros desarrolladores
- Las credenciales deben mantenerse seguras
- Para producción, considera usar un servicio de gestión de secretos (AWS Secrets Manager, Azure Key Vault)

## 🤝 Contribuir

1. Copia `.env.example` a `.env`
2. Configura tus credenciales
3. Ejecuta `npm install`
4. Ejecuta `npm start` para probar

## 📄 Licencia

Este proyecto es parte de un ejercicio académico.

---

**Desarrollado para**: TechStore - Gestión de Equipos Informáticos
**Base de datos**: MongoDB Atlas
**Tecnologías**: Node.js, MongoDB, dotenv

