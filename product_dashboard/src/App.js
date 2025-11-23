import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import ProductTable from './components/ProductTable';

function App() {
  return (
    <div className="App">
     <h1> Product Dashboard </h1>
     {/* <SearchBar />
     <Filters /> */}
     <ProductTable />
    </div>
  );
}

export default App;
