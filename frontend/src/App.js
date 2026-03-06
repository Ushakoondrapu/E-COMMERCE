
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Login from './pages/Login';
import EditProduct from './pages/EditProduct';
// import AddProduct from './pages/AddProduct';
// import AdminDashboard from './pages/AdminDashboard';


function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>} />
        <Route path='/cart' element={<Cart />}/>
        <Route path='login' element={<Login />}/>
      </Routes>
      {/* <AdminDashboard /> */}
      {/* <AddProduct /> */}
      <EditProduct />
    </Router>
  );
}

export default App;
