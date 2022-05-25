import ItemCard from "../ItemCard/ItemCard";

function ItemList ({productos}) {
    return (
        productos.map (prod => (
            <ItemCard 
            key = {prod.id}
            nombre = {prod.nombre}
            precio = {prod.precio}
            img = {prod.img}
            stock = {prod.stock}
            />
        ))
    )
}

export default ItemList;