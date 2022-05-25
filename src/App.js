import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header className="app-header">
      <NavBar />
      </header>
      <ItemListContainer />
    </div>
  );
}

export default App;
