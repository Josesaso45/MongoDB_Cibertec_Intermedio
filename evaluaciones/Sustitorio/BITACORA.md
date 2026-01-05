# Bitácora del Proyecto - MongoDB Cibertec

Este documento sirve como guía para entender la organización y el propósito de este repositorio de ejercicios y evaluaciones de MongoDB.

## 📁 Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

*   **`clases/`**: Contiene material de aprendizaje dividido por temas. Es el lugar ideal para agregar nuevos ejercicios de práctica diaria.
    *   `00_inicios/`: Conceptos básicos.
    *   `01_inserciones/`: Ejemplos de `insertOne` y `insertMany`.
    *   `02_actualizar/`: Ejemplos de operadores de actualización.
*   **`evaluaciones/`**: Archivos relacionados con los exámenes del curso.
    *   `T1/`: Examen de la Unidad 1.
    *   `T2/`: Examen de la Unidad 2, incluyendo scripts de ejecución y consultas.
    *   `Sustitorio/`: Archivos para el examen sustitutorio, incluyendo el script de carga de datos.
*   **`proyectos/`**: Casos prácticos completos que simulan entornos reales.
    *   `GastroManager`: Gestión de restaurantes.
    *   `StreamCloud`: Plataforma de streaming.
    *   `Caso_UrbanStyle`: Tienda de moda.
*   **`documentacion/`**: Recursos teóricos.
    *   `Manual del curso`: Guía PDF completa.
    *   `docs/`: Diagramas C4 y Decisiones de Arquitectura (ADR).
*   **`scripts/`**: Herramientas de automatización para interactuar con la base de datos desde la terminal usando Node.js.

---

## 💡 Diferencias: MongoDB for VS Code vs. Node.js

Para trabajar con MongoDB en este curso, utilizamos dos herramientas principales. Aquí te explico sus diferencias:

### 1. MongoDB for VS Code (Playgrounds)
Es una extensión que se integra directamente en tu editor. Utiliza archivos con extensión `.mongodb.js`.

*   **Propósito**: Pruebas rápidas, consultas directas y desarrollo ágil.
*   **Cómo funciona**: Escribes código tipo "shell" de MongoDB (como `use('db')` o `db.collection.find()`) y lo ejecutas con un botón de "Play".
*   **Ventaja**: No necesitas configurar un proyecto de programación complejo. Es visual y ves los resultados inmediatamente en una pestaña de VS Code.
*   **Ideal para**: Practicar en clase y resolver exámenes rápidamente.

### 2. Node.js (Scripts de Servidor)
Es un entorno de ejecución de JavaScript fuera del navegador. Utiliza el "Driver oficial de MongoDB para Node.js".

*   **Propósito**: Aplicaciones reales, automatización y desarrollo de backend.
*   **Cómo funciona**: Utilizas archivos `.js` normales. Requiere importar una librería (`mongodb`) y manejar la conexión de forma manual (conectar, ejecutar, cerrar).
*   **Ventaja**: Permite integrar MongoDB con otras tecnologías (APIs, sitios web, sistemas de archivos). Puedes usar variables de entorno (`.env`) para mayor seguridad.
*   **Ideal para**: Aprender cómo se conectan las aplicaciones de la vida real a una base de datos.

---

## 🛠️ Cómo utilizar este repositorio

1.  **Para estudiar**: Revisa la carpeta `clases/` y ejecuta los Playgrounds para ver cómo funcionan los operadores.
2.  **Para practicar proyectos**: Ve a `proyectos/` y trata de entender cómo se estructuran las colecciones.
3.  **Para cargar data de exámenes**: 
    *   Si usas VS Code: Abre el archivo `.mongodb.js` en la carpeta del examen y dale a "Play".
    *   Si usas la terminal: Ejecuta `node scripts/nombre_del_script.js`.

---
*Última actualización: Diciembre 2025*

