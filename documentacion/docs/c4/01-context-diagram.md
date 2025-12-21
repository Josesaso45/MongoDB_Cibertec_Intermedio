# C4 Model - Nivel 1: Context Diagram

## Diagrama de Contexto - TechStore MongoDB System

```
┌─────────────────────────────────────────────────────────────┐
│                         Usuario                              │
│                    (Desarrollador/Admin)                     │
└──────────────────────────┬──────────────────────────────────┘
                            │
                            │ Ejecuta scripts
                            │ Consulta datos
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    TechStore Application                     │
│                                                              │
│  ┌──────────────────┐         ┌──────────────────┐          │
│  │  Scripts Node.js │         │ MongoDB Playground│          │
│  │  (ejecutar_mongodb)│       │  (VS Code)       │          │
│  └──────────────────┘         └──────────────────┘          │
│                                                              │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           │ Connection String
                           │ (MongoDB Driver)
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    MongoDB Atlas Cloud                       │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │           Cluster: cluster0.1sm7nw4                 │    │
│  │                                                      │    │
│  │  ┌──────────────────┐    ┌──────────────────┐     │    │
│  │  │  dbTechStore     │    │  Otras BDs       │     │    │
│  │  │                  │    │                  │     │    │
│  │  │  - equipos       │    │  - admin         │     │    │
│  │  │  - clientes      │    │  - config        │     │    │
│  │  └──────────────────┘    │  - local         │     │    │
│  │                          └──────────────────┘     │    │
│  └────────────────────────────────────────────────────┘    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Descripción

### Actores
- **Usuario**: Desarrollador o administrador que interactúa con el sistema

### Sistemas
- **TechStore Application**: Aplicación Node.js que gestiona datos de TechStore
  - Scripts de ejecución (`ejecutar_mongodb.js`)
  - MongoDB Playground en VS Code
- **MongoDB Atlas**: Base de datos en la nube que almacena la información

### Relaciones
- Usuario → TechStore Application: Ejecuta scripts y consultas
- TechStore Application → MongoDB Atlas: Almacena y recupera datos

## Propósito
Gestionar información de equipos informáticos y clientes para TechStore usando MongoDB como base de datos documental.

