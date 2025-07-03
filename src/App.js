import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './components/layout/Navbar'; 
import Footer from './components/layout/Footer';

import Home from './pages/Home';
import ProductDetailPage from './pages/ProductDetailPage';
import Cartpage from './pages/Cartpage';
import CheckoutPage from './pages/CheckoutPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import EmailVerificationPage from './pages/EmailVerificationPage';


function App () {
  return (
    <Router> 
      <Navbar /> 
      <div className="container mt-4">
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<Cartpage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-history" element={<OrderHistoryPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/verify-email" element={<EmailVerificationPage />} />
        </Routes> 
      </div>
      <Footer />
    </Router>
  );
}

export default App;
