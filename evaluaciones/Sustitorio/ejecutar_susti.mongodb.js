// Script de MongoDB Playground para el examen Sustitorio
// Seleccionar la base de datos a utilizar.
use('BD_Salud');

// Crear colecciones
db.createCollection("pacientes");
db.createCollection("clinicas");
db.createCollection("distritos");
db.createCollection("consultas");

// Insertar datos en la colección de pacientes
db.pacientes.insertMany([
  {"_idpac":1, nompac:"Juan", apellidos:"Lara Campos", edad:50, distrito:"Ate", actividad: ["Yoga", "Correr"]},
  {"_idpac":2, nompac:"Ana", apellidos:"Jara Lopez", edad:52, distrito:"Lima", actividad: ["Yoga", "Leer", "Caminar"]},
  {"_idpac":3, nompac:"Roberto", apellidos:"Arias Salas", edad:45, distrito:"Rimac", actividad: ["Trotar", "Leer", "Caminar"]},
  {"_idpac":4, nompac:"Carmen", apellidos:"Gomez Lopez", edad:47, distrito:"Callao", actividad: ["Leer", "Caminar"]},
  {"_idpac":5, nompac:"Irma", apellidos:"Rengifo Zarate", edad:37, distrito:"Comas", actividad: ["Correr", "Yoga", "Caminar"]},
  {"_idpac":6, nompac:"Angie", apellidos:"Rengifo Salas", edad:35, distrito:"Lurin", actividad: ["Leer", "Yoga", "Trotar"]},
  {"_idpac":7, nompac:"Benito", apellidos:"Lopez Arias", edad:38, distrito:"San Miguel", actividad: ["Cocinar", "Trotar"]},
  {"_idpac":8, nompac:"Celso", apellidos:"Lopez Lopez", edad:32, distrito:"Lima", actividad: ["Leer", "Trotar", "Caminar"]},
  {"_idpac":9, nompac:"Adan", apellidos:"Damián Arias", edad:35, distrito:"Bellavista", actividad: ["Leer", "Cocinar"]},
  {"_idpac":10, nompac:"Eva", apellidos:"Guizado Porras", edad:33, distrito:"Ate", actividad: ["Cocinar", "Trotar", "Caminar"]},
  {"_idpac":11, nompac:"Elvis", apellidos:"Tomaza Arias", edad:33, distrito:"Ate", actividad: ["Pasear", "Trotar", "Caminar"]},
  {"_idpac":12, nompac:"Diego", apellidos:"Carrasco Lari", edad:48, distrito:"Ate", actividad: ["Bailar", "Caminar"]},
  {"_idpac":13, nompac:"Angel", apellidos:"Meza Campos", edad:28, distrito:"Independencia", actividad: ["Cocinar", "Trotar", "Caminar"]},
  {"_idpac":14, nompac:"Indira", apellidos:"Ocampo Nuñez", edad:36, distrito:"Comas", actividad: ["Cocinar", "Trotar", "Caminar"]},
  {"_idpac":15, nompac:"Giuliana", apellidos:"Zanabria Quiebrilla", edad:39, distrito:"Ate", actividad: ["Bailar", "Trotar", "Caminar"]},
  {"_idpac":16, nompac:"Jorge", apellidos:"Anasta Fuiti", edad:33, distrito:"Ate", actividad: ["Cocinar", "Bailar", "Yoga"]},
  {"_idpac":17, nompac:"Mariel", apellidos:"Lopez Aguirre", edad:60, distrito:"Breña", actividad: ["Cocinar", "Trotar", "Caminar"]},
  {"_idpac":18, nompac:"Liz", apellidos:"Lopez Porras", edad:55, distrito:"Independencia", actividad: ["Bailar", "Trotar", "Caminar"]},
  {"_idpac":19, nompac:"Carmen", apellidos:"Quispe Mamani", edad:58, distrito:"Lima", actividad: ["Yoga", "Trotar", "Caminar"]},
  {"_idpac":20, nompac:"Elba", apellidos:"Firulai Zúñiga", edad:61, distrito:"Lima", actividad: ["Cocinar", "Yoga", "Leer"]}
]);

// Insertar datos en la colección de clinicas
db.clinicas.insertMany([
  {"_idclinica":1, nomclinica:"San Judas Tadeo", antiguedad:25, sede:"dis081", estado: "activo"},
  {"_idclinica":2, nomclinica:"San Martín", antiguedad:25, sede:"dis082", estado: "activo"},
  {"_idclinica":3, nomclinica:"San Juan I", antiguedad:25, sede:"dis120", estado: "inactivo"},
  {"_idclinica":4, nomclinica:"San Juan II", antiguedad:30, sede:"dis005", estado: "activo"},
  {"_idclinica":5, nomclinica:"Santa Rosa I", antiguedad:35, sede:"dis7410", estado: "activo"},
  {"_idclinica":6, nomclinica:"Santa Rosa II", antiguedad:15, sede:"dis44788", estado: "activo"},
  {"_idclinica":7, nomclinica:"Santa Anita", antiguedad:15, sede:"dis44788", estado: "activo"},
  {"_idclinica":8, nomclinica:"La Rioja", antiguedad:85, sede:"dis081", estado: "inactivo"},
  {"_idclinica":9, nomclinica:"Internacional I", antiguedad:45, sede:"dis081", estado: "activo"},
  {"_idclinica":10, nomclinica:"Internacional II", antiguedad:15, sede:"dis081", estado: "activo"},
  {"_idclinica":11, nomclinica:"Internacional III", antiguedad:55, sede:"dis005", estado: "activo"},
  {"_idclinica":12, nomclinica:"La Providencia I", antiguedad:45, sede:"dis454", estado: "activo"},
  {"_idclinica":13, nomclinica:"La Providencia II", antiguedad:55, sede:"dis081", estado: "activo"},
  {"_idclinica":14, nomclinica:"Santa Teresa I", antiguedad:65, sede:"dis10001", estado: "activo"},
  {"_idclinica":15, nomclinica:"Santa Teresa II", antiguedad:55, sede:"dis454", estado: "activo"},
  {"_idclinica":16, nomclinica:"Alcidez Carrión", antiguedad:55, sede:"dis081", estado: "activo"},
  {"_idclinica":17, nomclinica:"Gamero Barrenechea I", antiguedad:35, sede:"dis081", estado: "activo"},
  {"_idclinica":18, nomclinica:"Gamero Barrenechea II", antiguedad:35, sede:"dis10899", estado: "inactivo"},
  {"_idclinica":19, nomclinica:"San Nicolás", antiguedad:25, sede:"dis1105", estado: "inactivo"},
  {"_idclinica":20, nomclinica:"Almenara", antiguedad:45, sede:"dis081", estado: "activo"}
]);

// Insertar datos en la colección de distritos
db.distritos.insertMany([
  {"_coddist": "dis081", nomdist:"Lima Cercado", Sector: 6},
  {"_coddist": "dis082", nomdist:"San Borja", Sector: 6},
  {"_coddist": "dis120", nomdist:"Lince", Sector: 8},
  {"_coddist": "dis563", nomdist:"S.J.L.", Sector: 1},
  {"_coddist": "dis005", nomdist:"S.J.M", Sector: 3},
  {"_coddist": "dis1105", nomdist:"Independencia", Sector: 1},
  {"_coddist": "dis10899", nomdist:"S.M.P.", Sector: 8},
  {"_coddist": "dis830", nomdist:"San Miguel", Sector: 6},
  {"_coddist": "dis7410", nomdist:"Jesús María", Sector: 10},
  {"_coddist": "dis44788", nomdist:"Breña", Sector: 8},
  {"_coddist": "dis10001", nomdist:"La Victoria", Sector: 6},
  {"_coddist": "dis454", nomdist:"V.M.T.", Sector: 6},
  {"_coddist": "dis9996", nomdist:"Ate Vitarte", Sector: 8},
  {"_coddist": "dis01010", nomdist:"Los Olivos", Sector: 6},
  {"_coddist": "dis01090", nomdist:"La Molina", Sector: 6},
  {"_coddist": "dis07790", nomdist:"Comas", Sector: 9},
  {"_coddist": "dis33090", nomdist:"El Agustino", Sector: 10}
]);

// Insertar datos en la colección de consultas
db.consultas.insertMany([
  {"_idcon":1, fechac: new Date(2023,2,1), monto:"125", caja: "Juan Aguirre", respon_pago: "Joao Carmona", estado: "pagado"},
  {"_idcon":2, fechac: new Date(2023,2,5), monto:"128", caja: "Jose Lara", respon_pago: "Ana Ruiz", estado: "pagado"},
  {"_idcon":3, fechac: new Date(2023,3,5), monto:"150", caja: "Irma Lara", respon_pago: "Rodolfo Campos", estado: "deuda"},
  {"_idcon":4, fechac: new Date(2023,2,15), monto:"155", caja: "Fredy Jara", respon_pago: "Giuliana Días", estado: "pagado"},
  {"_idcon":5, fechac: new Date(2023,2,11), monto:"145", caja: "Juana Li", respon_pago: "Alberto Tejada", estado: "anulado"},
  {"_idcon":6, fechac: new Date(2023,2,9), monto:"135", caja: "Gabriela Li", respon_pago: "Jaime Lara", estado: "deuda"},
  {"_idcon":7, fechac: new Date(2023,2,5), monto:"130", caja: "Juan Sanchez", respon_pago: "Eva Guizado", estado: "deuda"},
  {"_idcon":8, fechac: new Date(2023,2,4), monto:"129", caja: "Fernando Lara", respon_pago: "Eva Guizado", estado: "anulado"},
  {"_idcon":11, fechac: new Date(2023,1,2), monto:"200", caja: "Ana Sinche", respon_pago: "Franco Polo", estado: "pagado"},
  {"_idcon":12, fechac: new Date(2023,1,4), monto:"150", caja: "Irma Lara", respon_pago: "Sebastian Perez", estado: "pagado"},
  {"_idcon":13, fechac: new Date(2023,7,8), monto:"160", caja: "Irma Lara", respon_pago: "Santos Campos", estado: "anulado"},
  {"_idcon":14, fechac: new Date(2023,6,2), monto:"170", caja: "Ana Sinche", respon_pago: "Santos Campos", estado: "pagado"},
  {"_idcon":15, fechac: new Date(2023,7,2), monto:"175", caja: "Irma Lara", respon_pago: "Sandra Lara", estado: "pagado"},
  {"_idcon":16, fechac: new Date(2023,4,2), monto:"245", caja: "Carmen Lopez", respon_pago: "Jorge Nuñez", estado: "pagado"},
  {"_idcon":17, fechac: new Date(2023,5,2), monto:"365", caja: "José Campos", respon_pago: "Jaime Lara", estado: "pagado"},
  {"_idcon":18, fechac: new Date(2023,5,2), monto:"349", caja: "Juana Lara", respon_pago: "Isidora Campos", estado: "pagado"},
  {"_idcon":19, fechac: new Date(2023,6,2), monto:"299", caja: "Juana Lara", respon_pago: "Jorge Gamero", estado: "anulado"},
  {"_idcon":20, fechac: new Date(2023,6,2), monto:"199", caja: "Juana Lara", respon_pago: "Sandra Zapata", estado: "pagado"}
]);

