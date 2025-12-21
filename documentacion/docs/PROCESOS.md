# Procesos y Flujos de Trabajo - TechStore MongoDB

## 📋 Índice
1. [Proceso de Inserción de Datos](#proceso-de-inserción-de-datos)
2. [Diferentes Formas de Ejecución](#diferentes-formas-de-ejecución)
3. [Flujo de Desarrollo](#flujo-de-desarrollo)
4. [Gestión de Variables de Entorno](#gestión-de-variables-de-entorno)
5. [Comparación: Python vs Node.js](#comparación-python-vs-nodejs)

---

## 🔄 Proceso de Inserción de Datos

### Flujo Completo

```
┌─────────────────────────────────────────────────────────┐
│                    INICIO                                │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│  1. Cargar Configuración                                │
│     - require('dotenv').config()                        │
│     - Leer MONGODB_URI desde .env                       │
│     - Leer DB_NAME desde .env                           │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│  2. Conectar a MongoDB                                  │
│     - MongoClient.connect(uri)                          │
│     - Validar conexión                                  │
│     - Manejar errores de conexión                      │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│  3. Seleccionar Base de Datos                           │
│     - client.db('dbTechStore')                         │
│     - Verificar existencia                              │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│  4. Insertar Equipos (Individual)                       │
│     ┌──────────────────────────────────────┐           │
│     │ Para cada equipo en equipos[]:       │           │
│     │  1. Preparar documento                │           │
│     │  2. db.equipos.insertOne(equipo)     │           │
│     │  3. Obtener insertedId               │           │
│     │  4. Log resultado                    │           │
│     └──────────────────────────────────────┘           │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│  5. Insertar Clientes (Masiva)                         │
│     ┌──────────────────────────────────────┐           │
│     │  1. Preparar array clientes[]        │           │
│     │  2. db.clientes.insertMany(clientes)│           │
│     │  3. Obtener insertedCount           │           │
│     │  4. Log resultado                    │           │
│     └──────────────────────────────────────┘           │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│  6. Verificar Datos                                     │
│     - countDocuments('equipos')                        │
│     - countDocuments('clientes')                        │
│     - Mostrar resultados                               │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│  7. Cerrar Conexión                                     │
│     - client.close()                                    │
│     - En bloque finally para garantizar                │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│                    FIN                                   │
└─────────────────────────────────────────────────────────┘
```

---

## 🎯 Diferentes Formas de Ejecución

### 1. Script Node.js (`ejecutar_mongodb.js`)

**Características:**
- ✅ Automatizado y completo
- ✅ Manejo robusto de errores
- ✅ Logging detallado
- ✅ Ideal para producción y CI/CD

**Cuándo usar:**
- Ejecución automatizada
- Integración en pipelines
- Scripts de migración de datos
- Tareas programadas

**Ejecución:**
```bash
npm start
# o
node ejecutar_mongodb.js
```

**Ventajas:**
- Control total del proceso
- Manejo de errores personalizado
- Fácil de integrar en otros sistemas

**Desventajas:**
- Requiere Node.js instalado
- No es interactivo

---

### 2. MongoDB Playground (`ejercicio_pregunta1.mongodb.js`)

**Características:**
- ✅ Interactivo y visual
- ✅ Ejecución por secciones
- ✅ Resultados inmediatos
- ✅ Ideal para desarrollo y pruebas

**Cuándo usar:**
- Desarrollo y prototipado
- Pruebas rápidas de consultas
- Aprendizaje y experimentación
- Debugging

**Ejecución:**
1. Abrir en VS Code
2. Conectar a MongoDB
3. Ejecutar sección o todo

**Ventajas:**
- Interfaz visual
- Resultados inmediatos
- Fácil de modificar y probar

**Desventajas:**
- Requiere VS Code y extensión
- No es automatizable fácilmente

---

### 3. MongoDB Compass

**Características:**
- ✅ Interfaz gráfica completa
- ✅ Exploración visual de datos
- ✅ Consultas interactivas
- ✅ Ideal para análisis y administración

**Cuándo usar:**
- Exploración de datos
- Análisis visual
- Administración de base de datos
- Consultas ad-hoc

**Ejecución:**
1. Abrir MongoDB Compass
2. Conectar con connection string
3. Navegar y explorar

**Ventajas:**
- Interfaz intuitiva
- Visualización de datos
- Herramientas de análisis

**Desventajas:**
- Aplicación separada
- No es programático

---

### 4. MongoDB Shell (mongosh)

**Características:**
- ✅ Línea de comandos
- ✅ Scripts personalizados
- ✅ Automatización avanzada
- ✅ Ideal para administración

**Cuándo usar:**
- Scripts de administración
- Automatización compleja
- Migraciones de datos
- Tareas de mantenimiento

**Ejecución:**
```bash
mongosh "mongodb+srv://..."
use dbTechStore
db.equipos.insertOne({...})
```

**Ventajas:**
- Control total
- Scripts reutilizables
- Potente y flexible

**Desventajas:**
- Curva de aprendizaje
- Requiere instalación de mongosh

---

## 🔧 Flujo de Desarrollo

### Setup Inicial

```
1. Clonar/Descargar proyecto
   │
2. Instalar dependencias
   ├─> npm install
   │
3. Configurar .env
   ├─> Copiar .env.example a .env
   ├─> Editar credenciales
   │
4. Verificar conexión
   └─> npm start
```

### Desarrollo Iterativo

```
┌─────────────────────────────────────┐
│  Desarrollo (VS Code Playground)    │
│  - Modificar consultas              │
│  - Probar cambios                   │
│  - Ver resultados                   │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  Validación (Script Node.js)        │
│  - Ejecutar script completo         │
│  - Verificar inserción              │
│  - Revisar logs                     │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  Análisis (MongoDB Compass)         │
│  - Explorar datos                   │
│  - Verificar estructura             │
│  - Analizar resultados              │
└─────────────────────────────────────┘
```

---

## 🔐 Gestión de Variables de Entorno

### Proceso de Configuración

```
1. Crear .env desde plantilla
   cp .env.example .env
   
2. Editar .env con credenciales reales
   MONGODB_URI=mongodb+srv://...
   DB_NAME=dbTechStore
   
3. Cargar en aplicación
   require('dotenv').config()
   
4. Usar en código
   process.env.MONGODB_URI
```

### Seguridad

```
.env (NO versionar)
├─> Credenciales reales
├─> Información sensible
└─> En .gitignore

.env.example (SÍ versionar)
├─> Plantilla sin credenciales
├─> Estructura de variables
└─> Documentación
```

---

## 🐍 Comparación: Python vs Node.js

### Gestión de Entornos Virtuales

#### Python
```bash
# Crear entorno virtual
python -m venv venv

# Activar
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows

# Instalar paquetes
pip install package

# Desactivar
deactivate
```

#### Node.js
```bash
# Crear proyecto
npm init

# Instalar paquetes (local)
npm install package

# Instalar globalmente
npm install -g package

# Workspaces (monorepo)
npm init -w ./carpeta1
npm install package --workspace=carpeta1
```

### Variables de Entorno

#### Python
```python
# Instalar
pip install python-dotenv

# Código
from dotenv import load_dotenv
import os

load_dotenv()
db_uri = os.getenv('MONGODB_URI')
```

#### Node.js
```javascript
// Instalar
npm install dotenv

// Código
require('dotenv').config();
const uri = process.env.MONGODB_URI;
```

### Gestión por Carpetas

#### Python (venv por proyecto)
```
proyecto1/
  venv/
  main.py
  requirements.txt

proyecto2/
  venv/
  main.py
  requirements.txt
```

#### Node.js (package.json por proyecto)
```
proyecto1/
  node_modules/
  package.json
  main.js

proyecto2/
  node_modules/
  package.json
  main.js
```

**Sí, npm puede gestionar dependencias por carpetas**, similar a Python:
- Cada carpeta puede tener su `package.json`
- `node_modules` se instala localmente por proyecto
- Workspaces permiten monorepos con dependencias compartidas

---

## 📊 Resumen de Procesos

| Proceso | Herramienta | Uso Principal |
|---------|------------|---------------|
| **Inserción Automatizada** | `ejecutar_mongodb.js` | Producción, CI/CD |
| **Desarrollo Interactivo** | MongoDB Playground | Desarrollo, pruebas |
| **Análisis Visual** | MongoDB Compass | Exploración, análisis |
| **Administración** | mongosh | Scripts, mantenimiento |
| **Configuración** | `.env` + `dotenv` | Variables de entorno |

---

**Última actualización**: 2024-12-19

