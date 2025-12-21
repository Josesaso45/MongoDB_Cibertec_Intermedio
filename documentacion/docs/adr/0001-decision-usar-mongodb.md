# ADR-0001: Decisión de usar MongoDB como base de datos NoSQL

## Estado
Aceptado

## Contexto
TechStore necesita gestionar información de equipos informáticos y clientes de manera flexible. Los datos tienen estructuras variadas:
- Equipos con arrays de accesorios
- Clientes con categorías de interés (arrays)
- Algunos campos opcionales (fecha de nacimiento, celular)

## Decisión
Utilizar MongoDB como base de datos documental NoSQL para:
- Flexibilidad en el esquema de datos
- Soporte nativo para arrays y documentos anidados
- Escalabilidad horizontal
- Facilidad para agregar nuevos campos sin migraciones complejas

## Consecuencias

### Positivas
- ✅ Estructura flexible que se adapta a cambios futuros
- ✅ Consultas eficientes sobre arrays y documentos anidados
- ✅ Integración sencilla con Node.js
- ✅ MongoDB Atlas para despliegue en la nube

### Negativas
- ⚠️ No hay validación de esquema a nivel de base de datos (se debe hacer en aplicación)
- ⚠️ Curva de aprendizaje para desarrolladores acostumbrados a SQL
- ⚠️ Consistencia eventual (no transacciones ACID completas en todos los casos)

## Alternativas Consideradas
1. **PostgreSQL con JSONB**: Rechazado por menor flexibilidad y mayor complejidad
2. **MySQL**: Rechazado por no soportar nativamente estructuras de documentos
3. **Firebase Firestore**: Rechazado por costos y dependencia de Google Cloud

## Fecha
2024-12-19

