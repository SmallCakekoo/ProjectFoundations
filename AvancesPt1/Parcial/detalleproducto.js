// Asegúrate de que data.js esté cargado
console.log(data); // Debería mostrar todas las categorías de productos

// Función que busca un producto por su id en todas las categorías
function findProductById(id) {
    for (let category of data) {
        let foundProduct = category.find(product => product.id === parseInt(id));
        if (foundProduct) {
            return foundProduct;
        }
    }
    return null; // Si no se encuentra el producto
}

// Función que ejecuta al cargar la página
function loadProductDetails() {
    // Obtener el parámetro de la URL
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    
    // Verificar que se obtuvo el id del producto
    console.log("Product ID from URL:", productId);
    
    if (productId) {
        // Buscar el producto por id en todas las categorías
        let product = findProductById(productId);
        
        if (product) {
            // Mostrar en consola el producto encontrado
            console.log("Product found:", product);
            
            // Actualizar los elementos de la página con los datos del producto
            document.getElementById('tituloproduct').textContent = product.nombre;
            document.getElementById('descripcionproduct').textContent = product.descripcion;
            document.getElementById('precioproduct').textContent = "$" + product.precio + " COP";
            document.getElementById('imgproduct').src = product.imagen;
        } else {
            console.error("Producto no encontrado");
        }
    } else {
        console.error("No se proporcionó el id del producto en la URL.");
    }
}

// Llamar a la función al cargar la página
window.onload = loadProductDetails;
