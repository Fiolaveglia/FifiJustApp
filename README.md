# FifiJust Aromaterapia a tu medida

Este proyecto trata de un ecommerce web de Aceites esenciales donde podés ver los productos, filtrarlos por categoría y ver el detalle de cada uno. 

## Requisitos para inicializar el proyecto

Clonar el proyecto ejecutando en consola los siguientes comandos: 

```bash
  git clone https://github.com/Fiolaveglia/React-Proyecto.git 
 ```

 Ejecutar: 

 ```bash 
  npm install
  
  npm start
```
El proyecto se va a ejecutar en [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

La página se va a recargar cada vez que realices cambios y los guardes.\
En consola vas a poder visualizar los posibles errores que se presenten.

## Rutas de la aplicación 

La ruta al index de la aplicación es '/' dónde se muestra el componente ItemListContainer que trae todos los productos. 

Para filtrar por categoría la ruta es '/category/:categoryId' la cual muestra el componente ItemListContainer pero con los productos filtrados por categoría. 

Cada producto tiene su botón de detalle, la ruta para ver dicho detalle de producto es '/detalle/:productId' que muestra el componente ItemDetailContainer y agregar la cantidad que se desee, siempre y cuando la cantidad no sobrepase el stock, 



