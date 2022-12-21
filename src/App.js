import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Error from './pages/Error';
import ShardLayout from './pages/ShardLayout';
import Product from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Dashbord from './pages/Dashbord';
import { useState } from 'react'
import ProtectedRoute from './pages/ProtectedRoute';
import DataLogin from './components/DataLogin';

function App() {
  const [user, setUser] = useState(null)
  return (
    <BrowserRouter>
      {/* <nav>our navbar</nav> */}
      <Routes>
        <Route path='/' element={<ShardLayout />} >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='product' element={<Product />} />
          <Route path='product/:productId' element={<SingleProduct />} /> --TODO - input Id in url
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route path='dashbord' element={<Dashbord user={user} />} />
          <Route path='datalogin' element={<DataLogin setUser={setUser} />} />
          <Route path='*' element={<Error />} /> --TODO - path wrong
        </Route>
      </Routes>
      {/* <nav>our footer</nav> */}
    </BrowserRouter >
  );
}

export default App;
