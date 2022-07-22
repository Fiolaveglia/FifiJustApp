import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
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
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        className="Logo col-"
                        src="../img/logo.png"
                        alt="logo"
                    ></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {data &&
                            data.map((cat) => (
                                <NavLink
                                    key={cat.id}
                                    to={`/category/${cat.id}`}
                                    className="ButtonNav col"
                                >
                                    {cat.descripcion}
                                </NavLink>
                            ))}
                        <NavLink to="/cart" className='ButtonNav'>
                            <CartWidget />
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <nav className="navbar container">
        //     <div className="row">
        //         <NavLink to = "/"><img className="Logo col-" src= "../img/logo.png" alt="logo"></img></NavLink>
        //         {data && data.map(cat =>
        //                 <NavLink key={cat.id} to ={`/category/${cat.id}`} className='ButtonNav col'>{cat.descripcion}</NavLink>
        //             )}
        //         <NavLink to = "/cart"><CartWidget /></NavLink>
        //     </div>
        // </nav>
    );
}


export default NavBar 

