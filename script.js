// Datos de productos con precios en Soles (S/)
const productos = [
    // CERVEZAS
    {
        id: 1,
        nombre: "Cerveza Cusqueña",
        descripcion: "Pack x12 - Botella 330ml",
        precio: 42.00,
        imagen: "images/cerveza-cusquena.jpg",
        categoria: "cerveza",
        whatsapp: "https://wa.me/51987654321?text=Hola,%20quiero%20comprar%20Cerveza%20Cusqueña%20Pack%20x12%20botellas"
    },
    {
        id: 2,
        nombre: "Cerveza Pilsen Callao",
        descripcion: "Pack x24 - Lata 355ml",
        precio: 68.00,
        imagen: "images/pilsen-callao.jpg",
        categoria: "cerveza",
        whatsapp: "https://wa.me/51987654321?text=Hola,%20quiero%20comprar%20Cerveza%20Pilsen%20Callao%20Pack%20x24%20latas"
    },
    {
        id: 3,
        nombre: "Cerveza Cristal",
        descripcion: "Pack x6 - Botella 620ml",
        precio: 28.50,
        imagen: "images/cerveza-cristal.jpg",
        categoria: "cerveza",
        whatsapp: "https://wa.me/51987654321?text=Hola,%20quiero%20comprar%20Cerveza%20Cristal%20Pack%20x6%20botellas%20620ml"
    },

    // WHISKY
    {
        id: 4,
        nombre: "Whisky Old Times",
        descripcion: "Botella 750ml - 8 años",
        precio: 45.00,
        imagen: "images/whisky-oldtimes.jpg",
        categoria: "whisky",
        whatsapp: "https://wa.me/51987654321?text=Hola,%20quiero%20comprar%20Whisky%20Old%20Times%20750ml"
    },
    {
        id: 5,
        nombre: "Whisky Johnnie Walker Red",
        descripcion: "Botella 750ml - Blended",
        precio: 95.00,
        imagen: "images/whisky-johnnie.jpg",
        categoria: "whisky",
        whatsapp: "https://wa.me/51987654321?text=Hola,%20quiero%20comprar%20Whisky%20Johnnie%20Walker%20Red%20Label%20750ml"
    },
    {
        id: 6,
        nombre: "Whisky Jack Daniel's",
        descripcion: "Botella 750ml - Tennessee",
        precio: 120.00,
        imagen: "images/whisky-jack.jpg",
        categoria: "whisky",
        whatsapp: "https://wa.me/51987654321?text=Hola,%20quiero%20comprar%20Whisky%20Jack%20Daniel's%20750ml"
    },

    // PISCO
    {
        id: 7,
        nombre: "Pisco Portón",
        descripcion: "Botella 750ml - Mosto Verde",
        precio: 89.90,
        imagen: "images/pisco-porton.jpg",
        categoria: "pisco",
        whatsapp: "https://wa.me/51987654321?text=Hola,%20quiero%20comprar%20Pisco%20Portón%20Mosto%20Verde%20750ml"
    },
    {
        id: 8,
        nombre: "Pisco Queirolo",
        descripcion: "Botella 1L - Intenso",
        precio: 35.00,
        imagen: "images/pisco-queirolo.jpg",
        categoria: "pisco",
        whatsapp: "https://wa.me/51987654321?text=Hola,%20quiero%20comprar%20Pisco%20Queirolo%201L"
    },
    {
        id: 9,
        nombre: "Pisco Santiago Queirolo",
        descripcion: "Botella 750ml - Acholado",
        precio: 42.00,
        imagen: "images/pisco-santiago.jpg",
        categoria: "pisco",
        whatsapp: "https://wa.me/51987654321?text=Hola,%20quiero%20comprar%20Pisco%20Santiago%20Queirolo%20750ml"
    },

    // RON
    {
        id: 10,
        nombre: "Ron Cartavio",
        descripcion: "Botella 1L - XO Black",
        precio: 68.00,
        imagen: "images/ron-cartavio.jpg",
        categoria: "ron",
        whatsapp: "https://wa.me/51987654321?text=Hola,%20quiero%20comprar%20Ron%20Cartavio%20XO%201L"
    },
    {
        id: 11,
        nombre: "Ron Bacardí",
        descripcion: "Botella 750ml - Carta Blanca",
        precio: 55.00,
        imagen: "images/ron-bacardi.jpg",
        categoria: "ron",
        whatsapp: "https://wa.me/51987654321?text=Hola,%20quiero%20comprar%20Ron%20Bacardí%20Carta%20Blanca%20750ml"
    },
    {
        id: 12,
        nombre: "Ron Flor de Caña",
        descripcion: "Botella 750ml - 4 años",
        precio: 75.00,
        imagen: "images/ron-flor.jpg",
        categoria: "ron",
        whatsapp: "https://wa.me/51987654321?text=Hola,%20quiero%20comprar%20Ron%20Flor%20de%20Caña%204%20años%20750ml"
    },

    // VINO
    {
        id: 13,
        nombre: "Vino Tacama",
        descripcion: "750ml - Selección Especial",
        precio: 38.50,
        imagen: "images/vino-tacama.jpg",
        categoria: "vino",
        whatsapp: "https://wa.me/51987654321?text=Hola,%20quiero%20comprar%20Vino%20Tacama%20Selección%20Especial%20750ml"
    },
    {
        id: 14,
        nombre: "Vino Intipalka",
        descripcion: "750ml - Malbec",
        precio: 32.00,
        imagen: "images/vino-intipalka.jpg",
        categoria: "vino",
        whatsapp: "https://wa.me/51987654321?text=Hola,%20quiero%20comprar%20Vino%20Intipalka%20Malbec%20750ml"
    },
    {
        id: 15,
        nombre: "Vino Tabernero",
        descripcion: "750ml - Cabernet Sauvignon",
        precio: 28.00,
        imagen: "images/vino-tabernero.jpg",
        categoria: "vino",
        whatsapp: "https://wa.me/51987654321?text=Hola,%20quiero%20comprar%20Vino%20Tabernero%20Cabernet%20Sauvignon%20750ml"
    },

    // VODKA
    {
        id: 16,
        nombre: "Vodka Absolut",
        descripcion: "Botella 750ml - Clásico",
        precio: 65.00,
        imagen: "images/vodka-absolut.jpg",
        categoria: "vodka",
        whatsapp: "https://wa.me/51987654321?text=Hola,%20quiero%20comprar%20Vodka%20Absolut%20750ml"
    },
    {
        id: 17,
        nombre: "Vodka Smirnoff",
        descripcion: "Botella 1L - Red Label",
        precio: 48.00,
        imagen: "images/vodka-smirnoff.jpg",
        categoria: "vodka",
        whatsapp: "https://wa.me/51987654321?text=Hola,%20quiero%20comprar%20Vodka%20Smirnoff%201L"
    },

    // SNACKS
    {
        id: 18,
        nombre: "Chizitos",
        descripcion: "Bolsa 180g - Sabor queso",
        precio: 5.80,
        imagen: "images/chizitos.jpg",
        categoria: "snack",
        whatsapp: "https://wa.me/51987654321?text=Hola,%20quiero%20comprar%20Chizitos%20180g"
    },
    {
        id: 19,
        nombre: "Doritos",
        descripcion: "Bolsa 180g - Sabor nacho",
        precio: 6.50,
        imagen: "images/doritos.jpg",
        categoria: "snack",
        whatsapp: "https://wa.me/51987654321?text=Hola,%20quiero%20comprar%20Doritos%20180g"
    },
    {
        id: 20,
        nombre: "Papas Lays",
        descripcion: "Bolsa 160g - Sabor clásico",
        precio: 5.20,
        imagen: "images/papas-lays.jpg",
        categoria: "snack",
        whatsapp: "https://wa.me/51987654321?text=Hola,%20quiero%20comprar%20Papas%20Lays%20160g"
    },

    // GASEOSAS
    {
        id: 21,
        nombre: "Inca Kola",
        descripcion: "Botella 3L - Sabor original",
        precio: 12.50,
        imagen: "images/inca-kola.jpg",
        categoria: "gaseosa",
        whatsapp: "https://wa.me/51987654321?text=Hola,%20quiero%20comprar%20Inca%20Kola%203L"
    },
    {
        id: 22,
        nombre: "Coca-Cola",
        descripcion: "Botella 2.5L - Original",
        precio: 10.80,
        imagen: "images/coca-cola.jpg",
        categoria: "gaseosa",
        whatsapp: "https://wa.me/51987654321?text=Hola,%20quiero%20comprar%20Coca-Cola%202.5L"
    },
    {
        id: 23,
        nombre: "Sprite",
        descripcion: "Botella 2.5L - Limón",
        precio: 10.50,
        imagen: "images/sprite.jpg",
        categoria: "gaseosa",
        whatsapp: "https://wa.me/51987654321?text=Hola,%20quiero%20comprar%20Sprite%202.5L"
    }
];

// Función para formatear precios en Soles peruanos
function formatPrice(price) {
    return new Intl.NumberFormat('es-PE', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(price);
}

// Función para mostrar productos
function mostrarProductos(productosMostrar) {
    const container = document.getElementById('productos-container');
    container.innerHTML = '';
    
    if (productosMostrar.length === 0) {
        container.innerHTML = `
            <div class="no-productos">
                <i class="fas fa-search"></i>
                <h3>No se encontraron productos</h3>
                <p>Intenta con otra categoría</p>
            </div>
        `;
        return;
    }
    
    productosMostrar.forEach(producto => {
        const precioFormateado = formatPrice(producto.precio);
        
        const productoHTML = `
            <div class="producto-card" data-categoria="${producto.categoria}">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-img" 
                     onerror="this.src='https://via.placeholder.com/400x300/1a1a2e/ffffff?text=Producto'">
                <div class="producto-info">
                    <h3>${producto.nombre}</h3>
                    <p class="producto-desc">${producto.descripcion}</p>
                    <p class="producto-precio">${precioFormateado}</p>
                    <a href="${producto.whatsapp}" class="whatsapp-btn" target="_blank">
                        <i class="fab fa-whatsapp"></i> Pedir por WhatsApp
                    </a>
                </div>
            </div>
        `;
        container.innerHTML += productoHTML;
    });
}

// Función para actualizar enlaces de WhatsApp con número real
function actualizarEnlacesWhatsApp() {
    const numeroReal = "987177445"; // REEMPLAZA con tu número real
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    
    whatsappLinks.forEach(link => {
        const currentHref = link.getAttribute('href');
        const newHref = currentHref.replace('51987177445', `51${numeroReal}`);
        link.setAttribute('href', newHref);
    });
}

// Filtrado por categorías
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar todos los productos al cargar
    mostrarProductos(productos);
    
    // Actualizar enlaces de WhatsApp
    actualizarEnlacesWhatsApp();
    
    // Filtrar productos por categoría
    const botonesCategorias = document.querySelectorAll('.categoria-btn');
    
    botonesCategorias.forEach(boton => {
        boton.addEventListener('click', function() {
            // Remover clase active de todos los botones
            botonesCategorias.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            const categoria = this.getAttribute('data-categoria');
            
            // Filtrar productos
            let productosFiltrados;
            if (categoria === 'todos') {
                productosFiltrados = productos;
            } else {
                productosFiltrados = productos.filter(producto => producto.categoria === categoria);
            }
            
            // Mostrar productos filtrados
            mostrarProductos(productosFiltrados);
            
            // Scroll suave a productos
            document.getElementById('productos').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
    
    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Efecto de carga inicial
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
});