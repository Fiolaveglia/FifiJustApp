import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import {NavLink} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useFirestore } from '../../hooks/useFirestore'
import { obtenerCategorias } from '../../services/Firebase/firebase'



const NavBar = () => {

    const {categoryId} = useParams()

    const {data, error} = useFirestore(() =>  obtenerCategorias(categoryId), [])

    if(error) {
    return <h1>Ha ocurrido un error</h1>
    }
    
    return (
        <nav className="navbar container">
                <NavLink to = "/"><img className="Logo " src= "../img/logo.png" alt="logo"></img></NavLink>
                {data && data.map(cat => 
                        <NavLink key={cat.id} to ={`/category/${cat.id}`} className='ButtonNav'>{cat.descripcion}</NavLink> 
                    )}  
                <NavLink to = "/cart"><CartWidget /></NavLink> 
        </nav>
    )
}


export default NavBar 