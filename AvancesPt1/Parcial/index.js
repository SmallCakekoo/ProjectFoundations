
const productsContainer = document.querySelector('.products');

function seleccionarProductosAleatorios(data, cantidad) {
    const productosAleatorios = [];
    const productosDisponibles = [...data].flat(); 
    for (let i = 0; i < cantidad; i++) {
        const indice = Math.floor(Math.random() * productosDisponibles.length);
        const producto = productosDisponibles.splice(indice, 1)[0]; 
        productosAleatorios.push(new Product(
            producto.id,
            producto.nombre,
            producto.marca,
            producto.precio,
            producto.disponible,
            producto.rating,
            producto.imagen,
            producto.descripcion
        ));
    }
    return productosAleatorios;
}

function renderizarProductos(productos) {
    const html = productos.map(producto => producto.cardHtml()).join('');
    productsContainer.innerHTML = html;
}

const productosAleatorios = seleccionarProductosAleatorios(data, 4);
renderizarProductos(productosAleatorios);

const searchInput = document.getElementById('inputs');

  searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const searchTerm = searchInput.value.trim();
      if (searchTerm) {
        window.location.href = `tienda.html?search=${searchTerm}`;
      }
    }
  });