# FifiJust Aromaterapia a tu medida

Este proyecto trata de un ecommerce web de Aceites esenciales donde podés ver los productos, filtrarlos por categoría y ver el detalle de cada uno. 

## Correr el proyecto localmente

Clonar el proyecto ejecutando en consola los siguientes comandos: 

```bash
  $ git clone https://github.com/Fiolaveglia/React-Proyecto.git 
  
  $ cd React Proyecto/fifijust
   ```

 Ejecutar: 

 ```bash 
  npm install
  
  npm start
```

El proyecto se va a ejecutar en [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

La página se va a recargar cada vez que realices cambios y los guardes.\
En consola vas a poder visualizar los posibles errores que se presenten.

## Dependencias NPM

- [Create React App](https://create-react-app.dev/) Utilizada para crear la aplicacion
- [React Bootstrap](https://react-bootstrap.github.io/) Utilizado en varios componentes
- [React Router Dom](https://www.npmjs.com/package/react-router-dom) Para realizar el routing en el navegador
- [React Hook Form](https://react-hook-form.com/) Utilizado en el componente del formulario
- [React Spinners](https://www.npmjs.com/package/react-spinners) Utilizado para el loading
- [Sweet Alert](https://sweetalert.js.org/) Utilizado para las alertas
- [Firebase](https://firebase.google.com/) Base de datos

## Desarrollado con: 

- HTML5
- CSS
- JavaScript
- React

## Analisis de la aplicacion 

La ruta principal es '/' donde se muestra el componente ItemListContainer que trae todos los productos. 

Para filtrar por categoría la ruta es '/category/:categoryId' la cual muestra el componente ItemListContainer pero con los productos filtrados por categoría. 

Cada producto tiene su botón de detalle, la ruta para ver dicho detalle de producto es '/detalle/:productId' que muestra el componente ItemDetailContainer y agregar la cantidad que se desee, siempre y cuando la cantidad no sobrepase el stock. 

En el detalle de cada producto aparece un boton "Agregar al carrito" para agregar la cantidad deseada al carrito, una vez agregada la cantidad aparece un boton de "Finalizar compra" donde te dirije al detalle de compra a traves de la ruta '/cart' 

En el detalle del carrito aparece el o los productos agregados, se pueden eliminar, y te da la opcion de vaciar el carrito, constinuar comprando redirigiendo al inicio o finalizar compra donde redirige al formulario a traves de la ruta '/form' donde el cliente envia sus datos para concretar la compra. 

Una vez enviado el formulario a traves de una notificacion comunica si hubo algun error o si la compra fue satisfactoria, en ambos casos redirige al inicio. 

## Documentos de base de datos

### Colección Productos
 
| CAMPO | TIPO | VALOR |
| ------ | ------ |------ |
| categoria | string | Categoria del producto|
| detalle | string | Detalle del producto |
| img | string | Imagen del producto |
| nombre | string | Nombre del producto |
| stock | number | Stock del producto |
| precio | number | Precio del producto |

### Colección Categorias
 
| CAMPO | TIPO | VALOR |
| ------ | ------ |------ |
| descripcion | string | Nombre de la categoria|

### Colección Ordenes
 
| CAMPO | SUBCAMPO | TIPO | VALOR |
| ------ | ------ |------ |------ |
| cliente | nombre | string | Nombre del cliente|
|  | email | string | Email del cliente|
|  | tel | number | Telefono del cliente|
|  | direccion | string | Direccion del cliente|
| items | cantidad | number | Cantidad de productos|
|  | id | string | Id de compra|
|  | img | string | Imagen del producto|
|  | nombre | string | Nombre del producto|
|  | precio | number | Precio del producto|



## Variables de entorno

Ver ejemplo: [`.env.example`] (https://github.com/Fiolaveglia/React-Proyecto/blob/main/.env.example) 

## Demo de la aplicación 

![Alt Text](./public/img/demo.gif)

### Deploy 
[Fifi Just](fifijustapp.netlify.app/)

### Autora 

[@fiolaveglia](https://github.com/Fiolaveglia)




