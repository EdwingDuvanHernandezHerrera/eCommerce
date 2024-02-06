# Proyecto página web E-Commerce

Este repositorio contiene un proyecto desarrollado como prueba y aplicación de conocimientos en HTML, CSS y JavaScript para aprobar el filtro en el centro de entrenamiento CampusLands. El proyecto consiste en el diseño de una página web tipo E-Commerce que exhibe productos artesanales colombianos, como mochilas, calzado, canastos, hamacas, entre otros.

## Características principales

- La página es un marketplace que presenta 10 categorías, cada una con 4 productos.
- Desarrollada exclusivamente con GRID de CSS.
- Cada categoría cuenta con 4 imágenes de productos, 4 miniaturas y una imagen grande que se modifica al hacer clic en las miniaturas (implementado con JavaScript).
- Carrito de compras con productos cargados por defecto, ya que no hay backend en esta página.
- Modal del carrito implementado con la etiqueta HTML `<dialog>` y JavaScript.
- Modal para obtener o comprar productos, desarrollado de manera similar al carrito.
- Se utilizan iconos de Boxicons para menús y botones.
- Menú tipo desplegable o hamburguesa para resoluciones menores a 992px (enfoque mobile first con grid).
- Cada categoría está alojada en un archivo HTML separado, compuesto por un encabezado (header/nav), 4 targets para los productos y un pie de página (footer).

## Tecnologías utilizadas

- HTML
- CSS (Flexbox, Grid)
- JavaScript

## Estructura del repositorio

- `index.html`: Página principal que muestra todas las categorías.
- `category1.html` a `category10.html`: Archivos individuales para cada categoría.
- `styles.css`: Estilos generales de la página.
- `script.js`: Código JavaScript para la interactividad de la página.
- `boxicons`: Carpeta que contiene los iconos de Boxicons utilizados en la página.

## Instrucciones de uso

1. Clona este repositorio: `git clone https://github.com/tu-usuario/CampusLands-Marketplace.git`
2. Abre el archivo `index.html` en tu navegador para ver la página principal.
3. Explora las diferentes categorías haciendo clic en los enlaces correspondientes.
4. Experimenta con el carrito de compras y los modales para obtener o comprar productos.

