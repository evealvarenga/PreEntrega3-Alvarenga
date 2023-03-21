listaProductos = [
    { ID: 1, Tipo: "Empanada", Sabor: "Bondiola", Precio: 130, Cantidad: 0, img:"./img/bondiolaok.jpg" },
    { ID: 2, Tipo: "Empanada", Sabor: "Carne picante", Precio: 110, Cantidad: 0, img: "./img/picante.jpg"},
    { ID: 3, Tipo: "Empanada", Sabor: "Carne suave", Precio: 105, Cantidad: 0, img: "./img/suave.jpg" },
    { ID: 4, Tipo: "Empanada", Sabor: "Pollo", Precio: 115, Cantidad: 0 , img: "./img/pollook.jpg"},
    { ID: 5, Tipo: "Empanada", Sabor: "Jamón y Queso", Precio: 120, Cantidad: 0 , img: "./img/jamonqueso.jpg"},
    { ID: 6, Tipo: "Empanada", Sabor: "Cebolla y Queso", Precio: 130, Cantidad: 0 , img: "./img/cebollaqueso.jpg"},
    { ID: 7, Tipo: "Empanada", Sabor: "Cheese Burger", Precio: 130, Cantidad: 0 , img: "./img/cheesebuger.jpg"},
    { ID: 8, Tipo: "Empanada", Sabor: "Humita", Precio: 135, Cantidad: 0 , img: "./img/humita.jpg"},
    { ID: 9, Tipo: "Pizza", Sabor: "Moderna", Precio: 1500, Cantidad: 0 , img: "./img/moderna.jpg"},
    { ID: 10, Tipo: "Pizza", Sabor: "Alemana", Precio: 2100, Cantidad: 0 , img: "./img/alemana.jpg"},
    { ID: 11, Tipo: "Pizza", Sabor: "Especial de cebolla", Precio: 1550, Cantidad: 0 , img: "./img/especialdecebolla.jpg"},
    { ID: 12, Tipo: "Pizza", Sabor: "Fugazzeta de jamón", Precio: 1600, Cantidad: 0 , img: "./img/fugazzetadejamon.jpg"},
    { ID: 13, Tipo: "Pizza", Sabor: "Fugazzeta de peperoni", Precio: 2200, Cantidad: 0 , img: "./img/fugazzetadepeperoni.jpg"},
    { ID: 13, Tipo: "Pizza", Sabor: "Inferno", Precio: 2320, Cantidad: 0 , img: "./img/infierno.jpg"},
    { ID: 13, Tipo: "Pizza", Sabor: "Mortadela y pesto", Precio: 2150, Cantidad: 0 , img: "./img/mortadelaypesto.jpg"},
    { ID: 13, Tipo: "Pizza", Sabor: "Vegetariana", Precio: 2000, Cantidad: 0 , img: "./img/vegetariana.jpg"},
]

const listaCarrito = []
const main_container = document.getElementById("main_container")
const container_cart = document.getElementById("container_cart")

// IMPRESIÓN DE PRODUCTOS EN EL CONTENEDOR PRINCIPAL
listaProductos.forEach(producto => {
    main_container.innerHTML += `
    <div class="card" style="width: 18rem;">
        <img src="${producto.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.Sabor}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.
            </p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Precio: $${producto.Precio}</li>
            <li class="list-group-item"><botton class="btn btn-outline-warning" id="producto${producto.ID}">Comprar</botton></li>
        </ul>
    </div>
    ` 
})

listaProductos.forEach(producto =>{
    //AGREGA PRODUCTOS AL HACER CLICK
    const standBy = document.getElementById(`producto${producto.ID}`)
    //IMPRIME PRODUCTOS EN EL CARRITO
    standBy.addEventListener("click", ()=>{
        listaCarrito.push(producto)
        container_cart.innerHTML = ""
        listaCarrito.forEach(producto =>{
            container_cart.innerHTML += `
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${producto.img}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${producto.Tipo} ${producto.Sabor}</h5>
                            <p class="card-text">Precio por unidad: $${producto.Precio}</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
            `
            
        })
    })
})