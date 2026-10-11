class Producto {
    constructor (nombre, precio, año){
        this.nombre= nombre;
        this.precio= precio;
        this.año= año;

    }
 
}



class UI {
    addProduct(producto){
        const listaProductos = document.getElementById('lista-productos');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card mb-3">
                <div class="card-header d-flex justify-content-between align-items-center py-2">
                    <strong style="color:#6c7a89; font-size:0.85rem;">${producto.nombre}</strong>
                    <div class="d-flex align-items-center gap-2">
                        <small class="text-muted">${producto.año}</small>
                        <button type="button" class="btn-close btn-sm" name="delete" aria-label="Eliminar"></button>
                    </div>
                </div>
                <div class="card-body py-2 small">
                    Precio Q. ${producto.precio}
                </div>
            </div>
        `;
        listaProductos.appendChild(element);
    }

    resetForm(){
        document.getElementById('product-form').reset();
    }

    deleteProduct(element){
        if(element.name === 'delete'){
            element.closest('.card').parentElement.remove();
            this.showMessage('Producto eliminado correctamente', 'info');
        }
    }

    showMessage(message, cssClass ){
        const div= document.createElement('div');
        div.className= `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));

        const container= document.querySelector('.container');
        const app= document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(function (){
            document.querySelector('.alert').remove();
 
        },3000  );

        
        
    }

    validateForm(){
        let valido = true;
        ['nombre', 'precio', 'año'].forEach(id => {
            const input = document.getElementById(id);
            const ok = input.value.trim() !== '';
            input.classList.toggle('is-valid', ok);
            input.classList.toggle('is-invalid', !ok);
            if(!ok) valido = false;
        });
        return valido;
    }

    resetForm(){
        const form = document.getElementById('product-form');
        form.reset();
        form.querySelectorAll('.is-valid, .is-invalid')
            .forEach(input => input.classList.remove('is-valid', 'is-invalid'));
    }
        

}




document.getElementById('product-form').addEventListener('submit', function(e){
    e.preventDefault();
    const ui = new UI();

    if(!ui.validateForm()){
        return;
    }

    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const año = document.getElementById('año').value;
    const producto = new Producto(nombre, precio, año);

    ui.addProduct(producto);
    ui.resetForm();
    ui.showMessage('Agregaste un producto satisfactoriamente', 'success');
});


document.getElementById('lista-productos').addEventListener('click', function(e){
        const ui= new UI();
        ui.deleteProduct(e.target);


});
