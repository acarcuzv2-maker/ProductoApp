class Producto {
    constructor (nombre, precio, año){
        this.nombre= nombre;
        this.precio= precio;
        this.año= año;

    }
 
}



class UI {
    addProduct(){

    }    
    deleteProducto(){

    }

    showMessage(){

    }

}

document.getElementById('product-form').addEventListener('submit', function(){
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const año = document.getElementById('año').value;
    console.log( nombre, precio, año);
} )
