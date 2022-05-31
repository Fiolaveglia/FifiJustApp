import ItemCard from "../ItemCard/ItemCard";

function ItemList ({productos}) {
    return (
        productos.map (prod => (
            <ItemCard 
            key = {prod.id}
            nombre = {prod.nombre}
            precio = {prod.precio}
            img = {prod.img}
            categoria = {prod.category}
            stock = {prod.stock}
            detalle = {prod.detalle}
            />
        ))
    )
}

export default ItemList;