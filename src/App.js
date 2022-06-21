//import './assets/css/fonts.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'; 
import Cart from './components/Cart/Cart';
import Formulario from './components/Form/Form';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {CartContextProvider} from './context/CartContext';


function App() {
  return (
    <div className="App container">
      <CartContextProvider>
        <BrowserRouter>
          <header className="app-header">
            <NavBar />
          </header>
          <Routes>
            <Route path='/' element = {<ItemListContainer/>} />
            <Route path='/category/:categoryId' element = {<ItemListContainer />}/>
            <Route path='/detail/:productId' element = {<ItemDetailContainer />}/>
            <Route path='/cart' element = {<Cart/>}/>
            <Route path='/form' element = {<Formulario/>} />
            <Route path = "*" element = {<h1>PAGE NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
