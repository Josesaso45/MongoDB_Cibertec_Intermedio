# ADR-0002: Decisión sobre inserción individual vs masiva

## Estado
Aceptado

## Contexto
El ejercicio requiere insertar datos de dos colecciones:
- **Equipos**: 5 documentos
- **Clientes**: 5 documentos

Se debe decidir entre `insertOne()` (uno por uno) vs `insertMany()` (masiva).

## Decisión
- **Equipos**: Usar `insertOne()` uno por uno (requisito del ejercicio)
- **Clientes**: Usar `insertMany()` para inserción masiva (requisito del ejercicio)

## Justificación

### Inserción Individual (`insertOne`)
**Ventajas:**
- Control granular sobre cada inserción
- Manejo de errores por documento
- Útil para validaciones específicas

**Desventajas:**
- Mayor latencia (múltiples round-trips)
- Menor rendimiento en grandes volúmenes

### Inserción Masiva (`insertMany`)
**Ventajas:**
- Mayor rendimiento (un solo round-trip)
- Transaccional (todo o nada con `ordered: true`)
- Eficiente para grandes volúmenes

**Desventajas:**
- Si falla uno, puede afectar a todos (dependiendo de `ordered`)

## Consecuencias
- ✅ Cumple con los requisitos del ejercicio
- ✅ Demuestra conocimiento de ambas técnicas
- ⚠️ Para producción, considerar `insertMany` con `ordered: false` para mejor rendimiento

## Alternativas Consideradas
1. **Solo `insertMany`**: Rechazado porque el ejercicio requiere `insertOne` para equipos
2. **Solo `insertOne`**: Rechazado porque el ejercicio requiere `insertMany` para clientes

## Fecha
2024-12-19

