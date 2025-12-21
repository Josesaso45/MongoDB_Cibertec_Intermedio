// Script para crear y poblar la Base de Datos "UrbanStyle_Store" (Examen T2)
// Curso: Base de Datos Avanzado II
// Alumno: JOSE GORGE MONTERO VILCAS

// 1. Crear y usar la base de datos
use('UrbanStyle_store');

// -----------------------------------------------------------------------------
// COLECCIÓN: branch (Sucursales)
// -----------------------------------------------------------------------------
// Eliminamos la colección si ya existe para empezar limpio
db.branch.drop();

// Insertamos las sucursales (inserción masiva)
db.branch.insertMany([
  {
    "nombre": "Sucursal Norte",
    "ubicacion": "Calle Norte 123",
    "gerente": {
      "nombre": "Carlos",
      "apellidos": "López",
      "email": "carlos.lopez@urbanstyle.com",
      "celular": "973216549"
    }
  },
  {
    "nombre": "Sucursal Sur",
    "ubicacion": "Calle Sur 456",
    "gerente": {
      "nombre": "María",
      "apellidos": "Fernández",
      "email": "maria.fernandez@urbanstyle.com",
      "celular": "965498732"
    }
  },
  {
    "nombre": "Sucursal Este",
    "ubicacion": "Calle Este 789",
    "gerente": {
      "nombre": "Pedro",
      "apellidos": "Gómez",
      "email": "pedro.gomez@urbanstyle.com",
      "celular": "987321654"
    }
  },
  {
    "nombre": "Sucursal Oeste",
    "ubicacion": "Calle Oeste 101",
    "gerente": {
      "nombre": "Lucía",
      "apellidos": "Rodríguez",
      "email": "lucia.rodriguez@urbanstyle.com",
      "celular": "923874561"
    }
  },
  {
    "nombre": "Sucursal Centro",
    "ubicacion": "Avenida Central 555",
    "gerente": {
      "nombre": "Jorge",
      "apellidos": "Ramírez",
      "email": "jorge.ramirez@urbanstyle.com",
      "celular": "941561237"
    }
  },
  {
    "nombre": "Sucursal Playa",
    "ubicacion": "Boulevard Playa 202",
    "gerente": {
      "nombre": "Ana",
      "apellidos": "Martínez",
      "email": "ana.martinez@urbanstyle.com",
      "celular": "927894561"
    }
  }
]);

// Verificamos la carga de sucursales
console.log("Sucursales insertadas:", db.branch.countDocuments());


// -----------------------------------------------------------------------------
// COLECCIÓN: clients (Clientes)
// -----------------------------------------------------------------------------
db.clients.drop();

// Insertamos los clientes
db.clients.insertMany([
  {
    "nombre": "Carlos",
    "apellidos": "Mendoza",
    "email": "carlos.mendoza@gmail.com",
    "telefono": "921654987",
    "direccion": "Avenida Central 123, Breña",
    "fechaRegistro": ISODate("2024-01-15T00:00:00Z"),
    "preferencias": ["Caballero"],
    "historialCompras": [
      { "producto": "Camisa Formal", "fecha": ISODate("2024-02-01T00:00:00Z"), "cantidad": 3 },
      { "producto": "Chaqueta de Invierno", "fecha": ISODate("2024-03-05T00:00:00Z"), "cantidad": 1 }
    ]
  },
  {
    "nombre": "Sofía",
    "apellidos": "Ramírez",
    "email": "sofia.ramirez@yahoo.com",
    "telefono": "987654123",
    "direccion": "Calle Flores 45, La Molina",
    "fechaRegistro": ISODate("2024-02-10T00:00:00Z"),
    "preferencias": ["Dama"],
    "historialCompras": [
      { "producto": "Blusa Casual", "fecha": ISODate("2024-02-20T00:00:00Z"), "cantidad": 2 },
      { "producto": "Vestido de Verano", "fecha": ISODate("2024-03-15T00:00:00Z"), "cantidad": 1 }
    ]
  },
  {
    "nombre": "Miguel",
    "apellidos": "Díaz",
    "email": "miguel.diaz@gmail.com",
    "telefono": "934321789",
    "direccion": "Calle Luna 89, Breña",
    "fechaRegistro": ISODate("2024-01-20T00:00:00Z"),
    "preferencias": ["Caballero", "Niño"],
    "historialCompras": [
      { "producto": "Sudadera Deportiva", "fecha": ISODate("2024-02-25T00:00:00Z"), "cantidad": 1 },
      { "producto": "Pantalón Niño", "fecha": ISODate("2024-03-10T00:00:00Z"), "cantidad": 2 }
    ]
  },
  {
    "nombre": "Lucía",
    "apellidos": "Fernández",
    "email": "lucia.fernandez@outlook.com",
    "telefono": "933398746",
    "direccion": "Avenida Sol 456, Miraflores",
    "fechaRegistro": ISODate("2024-03-05T00:00:00Z"),
    "preferencias": ["Dama", "Niño"],
    "historialCompras": [
      { "producto": "Falda de Verano", "fecha": ISODate("2024-03-15T00:00:00Z"), "cantidad": 1 },
      { "producto": "Conjunto Deportivo", "fecha": ISODate("2024-04-05T00:00:00Z"), "cantidad": 1 }
    ]
  },
  {
    "nombre": "Diego",
    "apellidos": "González",
    "email": "diego.gonzalez@yahoo.com",
    "telefono": "989156123",
    "direccion": "Calle Estrella 33, La Molina",
    "fechaRegistro": ISODate("2024-02-25T00:00:00Z"),
    "preferencias": ["Caballero"],
    "historialCompras": [
      { "producto": "Camisa Casual", "fecha": ISODate("2024-03-01T00:00:00Z"), "cantidad": 2 },
      { "producto": "Abrigo de Invierno", "fecha": ISODate("2024-03-20T00:00:00Z"), "cantidad": 1 }
    ]
  },
  {
    "nombre": "Mariana",
    "apellidos": "Torres",
    "email": "mariana.torres@gmail.com",
    "telefono": "944789123",
    "direccion": "Avenida Libertad 34, La Molina",
    "fechaRegistro": ISODate("2024-01-30T00:00:00Z"),
    "preferencias": ["Dama"],
    "historialCompras": [
      { "producto": "Falda de Verano", "fecha": ISODate("2024-02-15T00:00:00Z"), "cantidad": 2 },
      { "producto": "Abrigo de Invierno", "fecha": ISODate("2024-03-20T00:00:00Z"), "cantidad": 1 }
    ]
  },
  {
    "nombre": "Alberto",
    "apellidos": "Gómez",
    "email": "alberto.gomez@outlook.com",
    "telefono": "964789321",
    "direccion": "Calle Águilas 56, San Luis",
    "fechaRegistro": ISODate("2024-02-05T00:00:00Z"),
    "preferencias": ["Caballero"],
    "historialCompras": [
      { "producto": "Camisa Casual", "fecha": ISODate("2024-02-20T00:00:00Z"), "cantidad": 1 },
      { "producto": "Sudadera Deportiva", "fecha": ISODate("2024-03-10T00:00:00Z"), "cantidad": 3 }
    ]
  },
  {
    "nombre": "Patricia",
    "apellidos": "Núñez",
    "email": "patricia.nunez@yahoo.com",
    "telefono": "989123654",
    "direccion": "Calle Flores 78, San Martín de Porres",
    "fechaRegistro": ISODate("2024-01-18T00:00:00Z"),
    "preferencias": ["Niño"],
    "historialCompras": [
      { "producto": "Conjunto Deportivo", "fecha": ISODate("2024-02-25T00:00:00Z"), "cantidad": 2 },
      { "producto": "Pantalón Niño", "fecha": ISODate("2024-03-05T00:00:00Z"), "cantidad": 1 }
    ]
  },
  {
    "nombre": "Roberto",
    "apellidos": "López",
    "email": "roberto.lopez@outlook.com",
    "telefono": "941456987",
    "direccion": "Avenida Central 90, Miraflores",
    "fechaRegistro": ISODate("2024-02-28T00:00:00Z"),
    "preferencias": ["Caballero", "Dama"],
    "historialCompras": [
      { "producto": "Camisa Formal", "fecha": ISODate("2024-03-01T00:00:00Z"), "cantidad": 2 },
      { "producto": "Blusa Casual", "fecha": ISODate("2024-03-10T00:00:00Z"), "cantidad": 1 }
    ]
  },
  {
    "nombre": "Laura",
    "apellidos": "Martínez",
    "email": "laura.martinez@yahoo.com",
    "telefono": "993654789",
    "direccion": "Calle Jardines 12, San Borja",
    "fechaRegistro": ISODate("2024-01-25T00:00:00Z"),
    "preferencias": ["Dama", "Niño"],
    "historialCompras": [
      { "producto": "Vestido de Verano", "fecha": ISODate("2024-02-15T00:00:00Z"), "cantidad": 1 },
      { "producto": "Conjunto Deportivo", "fecha": ISODate("2024-03-05T00:00:00Z"), "cantidad": 2 }
    ]
  }
]);

// Verificamos la carga de clientes
console.log("Clientes insertados:", db.clients.countDocuments());


// -----------------------------------------------------------------------------
// COLECCIÓN: sellers (Vendedores)
// -----------------------------------------------------------------------------
db.sellers.drop();

db.sellers.insertMany([
  {
    "nombre": "Laura",
    "apellidos": "Sánchez",
    "email": "laura.sanchez@urbanstyle.com",
    "telefono": "992444666",
    "sucursal": "Sucursal Sur",
    "fechaIngreso": ISODate("2023-07-20T00:00:00Z"),
    "metas": { "ventasMensuales": 12000, "clientesNuevos": 25 }
  },
  {
    "nombre": "Diego",
    "apellidos": "García",
    "email": "diego.garcia@urbanstyle.com",
    "telefono": "933555777",
    "sucursal": "Sucursal Este",
    "fechaIngreso": ISODate("2023-08-25T00:00:00Z"),
    "metas": { "ventasMensuales": 9000, "clientesNuevos": 18 }
  },
  {
    "nombre": "Elena",
    "apellidos": "Ruiz",
    "email": "elena.ruiz@urbanstyle.com",
    "telefono": "984666888",
    "sucursal": "Sucursal Oeste",
    "fechaIngreso": ISODate("2023-09-30T00:00:00Z"),
    "metas": { "ventasMensuales": 11000, "clientesNuevos": 22 }
  },
  {
    "nombre": "María",
    "apellidos": "López",
    "email": "maria.lopez@urbanstyle.com",
    "telefono": "955777999",
    "sucursal": "Sucursal Norte",
    "fechaIngreso": ISODate("2023-10-15T00:00:00Z"),
    "metas": { "ventasMensuales": 8500, "clientesNuevos": 19 }
  },
  {
    "nombre": "Carlos",
    "apellidos": "González",
    "email": "carlos.gonzalez@urbanstyle.com",
    "telefono": "966888000",
    "sucursal": "Sucursal Sur",
    "fechaIngreso": ISODate("2023-11-05T00:00:00Z"),
    "metas": { "ventasMensuales": 9500, "clientesNuevos": 21 }
  },
  {
    "nombre": "Andrés",
    "apellidos": "Pérez",
    "email": "andres.perez@urbanstyle.com",
    "telefono": "927999555",
    "sucursal": "Sucursal Este",
    "fechaIngreso": ISODate("2023-11-20T00:00:00Z"),
    "metas": { "ventasMensuales": 10500, "clientesNuevos": 23 }
  },
  {
    "nombre": "Claudia",
    "apellidos": "Hernández",
    "email": "claudia.hernandez@urbanstyle.com",
    "telefono": "988111666",
    "sucursal": "Sucursal Norte",
    "fechaIngreso": ISODate("2023-12-01T00:00:00Z"),
    "metas": { "ventasMensuales": 11000, "clientesNuevos": 24 }
  },
  {
    "nombre": "Fernando",
    "apellidos": "Jiménez",
    "email": "fernando.jimenez@urbanstyle.com",
    "telefono": "999222777",
    "sucursal": "Sucursal Sur",
    "fechaIngreso": ISODate("2024-01-10T00:00:00Z"),
    "metas": { "ventasMensuales": 9800, "clientesNuevos": 20 }
  }
]);

// Verificamos vendedores
console.log("Vendedores insertados:", db.sellers.countDocuments());


// -----------------------------------------------------------------------------
// COLECCIÓN: products (Productos)
// -----------------------------------------------------------------------------
db.products.drop();

db.products.insertMany([
  {
    "nombre": "Camisa Formal",
    "marca": "Marca A",
    "tipo": "Caballero",
    "talla": "M",
    "precio": 30.99,
    "cantidad": 100,
    "fechaRegistro": ISODate("2024-01-10T00:00:00Z"),
    "sucursal": "Sucursal Norte",
    "especificaciones": { "material": "Algodón", "color": "Blanco", "temporada": "Primavera-Verano" }
  },
  {
    "nombre": "Blusa Casual",
    "marca": "Marca B",
    "tipo": "Dama",
    "talla": "S",
    "precio": 25.99,
    "cantidad": 150,
    "fechaRegistro": ISODate("2024-01-12T00:00:00Z"),
    "sucursal": "Sucursal Sur",
    "especificaciones": { "material": "Poliéster", "color": "Azul", "temporada": "Otoño-Invierno" }
  },
  {
    "nombre": "Pantalón Niño",
    "marca": "Marca C",
    "tipo": "Niño",
    "talla": "L",
    "precio": 20.99,
    "cantidad": 120,
    "fechaRegistro": ISODate("2024-01-15T00:00:00Z"),
    "sucursal": "Sucursal Este",
    "especificaciones": { "material": "Denim", "color": "Azul", "temporada": "Todo el año" }
  },
  {
    "nombre": "Vestido de Verano",
    "marca": "Marca D",
    "tipo": "Dama",
    "talla": "M",
    "precio": 45.99,
    "cantidad": 80,
    "fechaRegistro": ISODate("2024-02-10T00:00:00Z"),
    "sucursal": "Sucursal Norte",
    "especificaciones": { "material": "Lino", "color": "Rojo", "temporada": "Verano" }
  },
  {
    "nombre": "Chaqueta de Invierno",
    "marca": "Marca E",
    "tipo": "Caballero",
    "talla": "L",
    "precio": 75.99,
    "cantidad": 60,
    "fechaRegistro": ISODate("2024-02-20T00:00:00Z"),
    "sucursal": "Sucursal Oeste",
    "especificaciones": { "material": "Lana", "color": "Negro", "temporada": "Invierno" }
  },
  {
    "nombre": "Sudadera Deportiva",
    "marca": "Marca F",
    "tipo": "Caballero",
    "talla": "XL",
    "precio": 40.99,
    "cantidad": 75,
    "fechaRegistro": ISODate("2024-03-01T00:00:00Z"),
    "sucursal": "Sucursal Este",
    "especificaciones": { "material": "Poliéster", "color": "Gris", "temporada": "Otoño" }
  },
  {
    "nombre": "Falda de Verano",
    "marca": "Marca G",
    "tipo": "Dama",
    "talla": "M",
    "precio": 35.99,
    "cantidad": 90,
    "fechaRegistro": ISODate("2024-03-15T00:00:00Z"),
    "sucursal": "Sucursal Sur",
    "especificaciones": { "material": "Algodón", "color": "Amarillo", "temporada": "Verano" }
  },
  {
    "nombre": "Camisa Casual",
    "marca": "Marca H",
    "tipo": "Caballero",
    "talla": "L",
    "precio": 28.99,
    "cantidad": 110,
    "fechaRegistro": ISODate("2024-04-05T00:00:00Z"),
    "sucursal": "Sucursal Norte",
    "especificaciones": { "material": "Lino", "color": "Azul", "temporada": "Primavera" }
  },
  {
    "nombre": "Conjunto Deportivo",
    "marca": "Marca I",
    "tipo": "Niño",
    "talla": "L",
    "precio": 55.99,
    "cantidad": 65,
    "fechaRegistro": ISODate("2024-04-20T00:00:00Z"),
    "sucursal": "Sucursal Oeste",
    "especificaciones": { "material": "Algodón", "color": "Rojo", "temporada": "Todo el año" }
  },
  {
    "nombre": "Abrigo de Invierno",
    "marca": "Marca J",
    "tipo": "Dama",
    "talla": "S",
    "precio": 120.99,
    "cantidad": 50,
    "fechaRegistro": ISODate("2024-05-10T00:00:00Z"),
    "sucursal": "Sucursal Este",
    "especificaciones": { "material": "Lana", "color": "Negro", "temporada": "Invierno" }
  }
]);

// Verificamos productos
console.log("Productos insertados:", db.products.countDocuments());

// Mensaje final
console.log("¡Carga completa! Base de datos lista para el examen T2.");
