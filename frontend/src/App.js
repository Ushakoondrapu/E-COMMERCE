
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Login from './pages/Login';
// import EditProduct from './pages/EditProduct';
import RegistrationPage from './pages/RegistrationPage';
import CheckOut from './pages/CheckOut';
import AdminDashboard from './pages/AdminDashboard';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import DeleteProduct from './pages/DeleteProduct';
import AdminRoute from './pages/AdminRoute';


function App() {
  return (
    
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='login' element={<Login />} />
          <Route path='/register' element={<RegistrationPage />} />
          <Route path='/checkout' element={<CheckOut />} />
          <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product" element={<EditProduct />} />
          <Route path="/delete-product" element={<DeleteProduct />} />
        </Routes>
      </Router>
    
  );
}

export default App;
