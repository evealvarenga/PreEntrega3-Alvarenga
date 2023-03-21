class productControl{
    constructor(){
        this.productsList = []
    }

    getList (){
        let jsonList = localStorage.getItem("productsList")

        if(jsonList){
            this.productsList = JSON.parse(jsonList)
        }
    }
    
    show(main_container){
        main_container.innerHTML = ""
        this.productsList.forEach(producto => {
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
                    <li class="list-group-item"><botton class="btn btn-outline-warning" id="product${producto.ID}">Comprar</botton></li>
                </ul>
            </div>
            ` 
        })
    }

}

class shoppingControl{
    constructor(){
        this.shopList = []
    }

    getList(){
        let getListJSON = localStorage.getItem("shopList")

        if(getListJSON){
            this.shopList = JSON.parse(getListJSON)
        }
    }

    newProduct(product){
        this.shopList.push(product)
        let productJSON = JSON.stringify(this.shopList)
        localStorage.setItem("shopList",productJSON)
    }

    show(container_cart){
        container_cart.innerHTML = ""
        this.shopList.forEach(producto =>{
            container_cart.innerHTML += `
            <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${producto.img}" class="img-fluid rounded-start">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title"> ${producto.Sabor}</h5>
                            <p class="card-text">Precio por unidad: $${producto.Precio}</p>
                            <p class="card-text"><small class="text-muted"><botton class="btn btn-outline-warning">+</botton> <button type="button" class="btn btn-warning" disable>Total: ${producto.Cantidad}</button> <botton class="btn btn-outline-warning">-</botton></small></p>
                        </div>
                    </div>
                </div>
            </div>
            `
            
        })
    }

}

const productC = new productControl()
const shopC = new shoppingControl()
productC.getList()
shopC.getList()
const main_container = document.getElementById("main_container")
const container_cart = document.getElementById("container_cart")
productC.show(main_container)
shopC.show(container_cart)

productC.productsList.forEach(product => {
    const stanBy = document.getElementById(`product${product.ID}`)
    stanBy.addEventListener("click", () => {
        shopC.newProduct(product)
        shopC.getList()
        shopC.show(container_cart)

    })
})