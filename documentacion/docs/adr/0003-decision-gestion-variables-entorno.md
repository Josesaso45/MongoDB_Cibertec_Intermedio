# ADR-0003: Decisión sobre gestión de variables de entorno

## Estado
Aceptado

## Contexto
El proyecto necesita manejar información sensible (connection strings de MongoDB) y configuraciones que varían entre entornos (desarrollo, producción).

## Decisión
Utilizar el patrón `.env` con el paquete `dotenv` de npm, similar a Python:
- Archivo `.env` para variables locales (no versionado)
- Archivo `.env.example` como plantilla (versionado)
- Cargar variables al inicio de la aplicación

## Justificación
- ✅ Estándar de la industria en Node.js
- ✅ Similar a Python, facilita migración de conocimiento
- ✅ Separación clara entre código y configuración
- ✅ Seguridad: `.env` en `.gitignore`

## Estructura
```
.env              # Variables reales (NO versionar)
.env.example      # Plantilla con estructura (SÍ versionar)
.env.development  # Variables de desarrollo (opcional)
.env.production   # Variables de producción (opcional)
```

## Consecuencias

### Positivas
- ✅ Seguridad: credenciales no en código
- ✅ Flexibilidad: diferentes configuraciones por entorno
- ✅ Facilidad de uso: similar a Python

### Negativas
- ⚠️ Requiere instalar `dotenv`
- ⚠️ Debe recordarse no versionar `.env`

## Implementación
```javascript
require('dotenv').config();
const uri = process.env.MONGODB_URI;
```

## Alternativas Consideradas
1. **Variables de sistema**: Rechazado por menor portabilidad
2. **Archivos de configuración JSON**: Rechazado por riesgo de versionar credenciales
3. **Secrets Manager (AWS/Azure)**: Considerado para producción futura

## Fecha
2024-12-19

