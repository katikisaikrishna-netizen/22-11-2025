// import logo from './logo.svg';
// import './App.css';
// import Header from './components/header';
// import NavBar from './components/navbar';
// import ProductCard from './components/product_card';
// import Footer from './components/footer';
// import StateDemo from './components/StateDemo';
// import InputDemo from './components/inputdemo';
// import ProductInfo from './components/productinfo';
// import Products from './components/products';
// import ComponentExample from './components/componentlifecycle';
// import Parent from './components/parent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import ProductsComponents from './pages/productscomponents';
import ProductDetails from './pages/productDetails';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="row">

    {/* <StateDemo />
    <ProductCard title="Product 1" image="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg" price="$10" description="This is product 1"/>
    <ProductCard title="Product 2" image="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg" price="$20" description="This is product 2"/>
    <ProductCard title="Product 3" image="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg" price="$30" description="This is product 3"/>
    <InputDemo />
    <ProductInfo />
    <Products />
    <ComponentExample />
    <Parent /> */}
      <BrowserRouter>
      <nav>
        <Link to ="/">Home</Link> |{" "}
        <Link to ="/about">About</Link> |{" "}
        <Link to ="/products">ProductsComponents</Link>  
        <Link to ="/products/1898/Laptop"> (Product Details)</Link>
      </nav>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductsComponents />} /> 
        <Route path="/products/:id/:title" element={<ProductDetails />} />
     </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
