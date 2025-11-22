import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import NavBar from './components/navbar';
import ProductCard from './components/product_card';
import Footer from './components/footer';
import StateDemo from './components/StateDemo';
import InputDemo from './components/inputdemo';
import ProductInfo from './components/productinfo';
import Products from './components/products';

function App() {
  return (
    <div className="row">

      <StateDemo />
      {/* <ProductCard title="Product 1" image="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg" price="$10" description="This is product 1"/>
      <ProductCard title="Product 2" image="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg" price="$20" description="This is product 2"/>
      <ProductCard title="Product 3" image="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg" price="$30" description="This is product 3"/> */}
    <InputDemo />
    <ProductInfo />
    <Products />
    </div>
  );
}

export default App;
