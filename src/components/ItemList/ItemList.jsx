import ItemCard from "../ItemCard/ItemCard";

function ItemList ({productos}) {
    return (
        productos.map (prod => (
            <ItemCard 
            id = {prod.id}
            nombre = {prod.nombre}
            precio = {prod.precio}
            img = {prod.img}
            img_2 = {prod.img_2}
            img_3 = {prod.img_3}
            categoria = {prod.categoria}
            stock = {prod.stock}
            detalle = {prod.detalle}
            edad = {prod.edad}
            />
        ))
    )
}

export default ItemList;