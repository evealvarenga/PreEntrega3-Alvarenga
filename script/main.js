listaProductos = [
    { ID: 1, Tipo: "Empanada", Sabor: "Bondiola", Precio: 130, Cantidad: 0, img:"./img/bondiolaok.jpg" },
    { ID: 2, Tipo: "Empanada", Sabor: "Carne picante", Precio: 110, Cantidad: 0, img: "./img/picante.jpg"},
    { ID: 3, Tipo: "Empanada", Sabor: "Carne suave", Precio: 105, Cantidad: 0, img: "./img/suave.jpg" },
    { ID: 4, Tipo: "Empanada", Sabor: "Pollo", Precio: 115, Cantidad: 0 , img: "./img/pollook.jpg"},
    { ID: 5, Tipo: "Empanada", Sabor: "Jamón y Queso", Precio: 120, Cantidad: 0 , img: "./img/jamonqueso.jpg"},
    { ID: 6, Tipo: "Empanada", Sabor: "Cebolla y Queso", Precio: 130, Cantidad: 0 , img: "./img/cebollaqueso.jpg"},
    { ID: 7, Tipo: "Empanada", Sabor: "Cheese Burger", Precio: 130, Cantidad: 0 , img: "./img/cheesebuger.jpg"},
    { ID: 8, Tipo: "Empanada", Sabor: "Humita", Precio: 135, Cantidad: 0 , img: "./img/humita.jpg"},
    { ID: 9, Tipo: "Pizza", Sabor: "Muzzarela", Precio: 1500, Cantidad: 0 , img: "./img/muzza.jpg"},
    { ID: 10, Tipo: "Pizza", Sabor: "Fugazzeta", Precio: 2100, Cantidad: 0 , img: "./img/"},
    { ID: 11, Tipo: "Pizza", Sabor: "Jamón y Morrón", Precio: 1550, Cantidad: 0 , img: "./img/"},
    { ID: 12, Tipo: "Pizza", Sabor: "Peperoni", Precio: 1600, Cantidad: 0 , img: "./img/pepperoni.jpg"},
    { ID: 13, Tipo: "Pizza", Sabor: "Americana", Precio: 2200, Cantidad: 0 , img: "./img/"},
]

const main_container = document.getElementById("main_container")

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
            <li class="list-group-item"><button type="button" class="btn btn-outline-warning">Comprar</button></li>
        </ul>
    </div>
    ` 
})