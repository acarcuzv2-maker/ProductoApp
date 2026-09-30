class Producto {
    constructor (nombre, precio, año){
        this.nombre= nombre;
        this.precio= precio;
        this.año= año;

    }
 
}



class UI {
    addProduct(producto){

        const listaProductos= document.getElementById('lista-productos');
        const elemento= document.createElement('div');
        elemento.innerHTML=`
        <div class="card text-center mb-4">
        <div class="card-body">
        <strong> Nombre del Producto </strong>: ${producto.nombre}
        <strong> Precio del Producto </strong>: ${producto.precio}
        <strong> Año del Producto </strong>: ${producto.año}
        </div>
        </div>
        `;
        listaProductos.appendChild(elemento);
    
    }    
    deleteProducto(){

    }

    showMessage(){

    }

}

document.getElementById('product-form').addEventListener('submit', function(e){
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const año = document.getElementById('año').value;
    const producto= new Producto(nombre, precio, año);
    
    const ui= new UI();
    ui.addProduct(producto);

    e.preventDefault();

});
