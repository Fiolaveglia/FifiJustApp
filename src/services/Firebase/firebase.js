import {db} from '.'
import {getDocs, getDoc, doc, collection, query, where} from 'firebase/firestore'


export const obtenerProductos = (categoryId) => {
    return new Promise((resolve, reject)=> {
        const collectionRef = categoryId
        ? query(collection(db, 'Productos'), where('categoria', '==', categoryId))
        : collection(db, 'Productos')

        getDocs(collectionRef)
        .then(resp => {
            const Products = resp.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            resolve(Products)
        }).catch(error => {
            reject(error)
        })
    }) 
}

export const detalleProducto = (productId) => {
    return new Promise((resolve, reject) => {
        getDoc(doc(db, 'Productos',productId))
        .then(resp => {
            const producto = {id: resp.id, ...resp.data()}
            resolve(producto)
        }).catch(error => {
            reject(error)
        })
    })
}




