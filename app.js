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
        const element= document.createElement('div');
        element.innerHTML=`
        <div class="card text-center mb-4">
        <div class="card-body">
        <strong> Nombre del Producto </strong>: ${producto.nombre}
        <strong> Precio del Producto </strong>: ${producto.precio}
        <strong> Año del Producto </strong>: ${producto.año}
        <a href= "#" blass="btn btn--danger" name= "delete">Delete</a>
        </div>
        </div>
        `;
        listaProductos.appendChild(element);
        
    
    }    

    resetForm(){
        document.getElementById('product-form').reset();
    }

    deleteProduct(){

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
    ui.resetForm();

    e.preventDefault();

});

document.getElementById('lista-productos').addEventListener('click', function(){
    alert('deleting')
});