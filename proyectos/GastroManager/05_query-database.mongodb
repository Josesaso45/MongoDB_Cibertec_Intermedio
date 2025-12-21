// Crear la base de datos
use('dbGastroManager')

// Listar platillos de la categoría Fondo
db.menu.find({ categoria: "Fondo" })

// Buscar platos que no contengan pollo en los ingredientes
db.menu.find({
    ingredientes: { $ne: "Pollo" }
})

// Listar nombre y precio de platillo que sean veganos
db.menu.find(
    { esVegano: true }, // condición de listado/búsqueda
    { nombre: 1, precio: 1, _id: 0 } // atributos que se quieren mostrar
)

// Pedidos atendidos por Juan que estén En Cocina
db.pedidos.find({ 
    mesero: "Juan", 
    estado: "En cocina" 
}).pretty()