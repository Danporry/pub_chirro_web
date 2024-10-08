document.addEventListener('DOMContentLoaded', function() {
    // Inicializa el carrusel si existe
    const gliderElement = document.querySelector('.glider');
    if (gliderElement) {
        new Glider(gliderElement, {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: '.dots',
            arrows: {
                prev: '.glider-prev',
                next: '.glider-next'
            },
            autoplay: 3000, // Cambia de imagen cada 3 segundos
            draggable: true
        });
    }

    // Control del menú de navegación móvil
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
// Función para cargar el archivo JSON
fetch('menu.json')
    .then(response => response.json())
    .then(data => {
        const productList = document.getElementById('product-list');

        // Iterar sobre cada producto en el JSON
        data.forEach(product => {
            if (product.active) { // Solo mostrar productos activos
                const productDiv = document.createElement('div');
                productDiv.classList.add('producto');

                // Insertar el HTML dinámicamente
                productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <div class="detalles">
                        <div class="info">
                            <h3>${product.name}</h3>
                            <p class="precio">${product.price}</p>
                        </div>
                        <p class="descripcion">${product.description}</p>
                    </div>
                `;

                // Agregar el producto al contenedor
                productList.appendChild(productDiv);
            }
        });
    })
    .catch(error => console.error('Error al cargar el menú:', error));
