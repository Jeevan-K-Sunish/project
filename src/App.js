
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Loginsignup from './Pages/Loginsignup';
import Login from './Pages/Login'
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
import ProductDisplay from './Components/ProductDisplay/ProductDisplay';
import AddProduct from './Pages/AdminAddProduct';
import AdminEdit from './Pages/AdminEdit';
import AdminProduct from './Pages/AdminProduct';
import AdminLogin from './Pages/AdminLogin';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/shop' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
          <Route path='/product' element={<Product />} />
          <Route path='product/:productId' element={<ProductDisplay />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/' element={<Loginsignup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/addproduct' element={<AddProduct />} />
          <Route path='/adminedit/:productId' element={<AdminEdit />} />
          <Route path='/adminproduct' element={<AdminProduct />} />
          <Route path='/adminlogin' element={<AdminLogin />} />
        </Routes>
        <Footer />
      </BrowserRouter>


    </div>
  );
}

export default App;
