// import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Contact from './Contact';
import Cart from './Cart';
import ProductDetail from './ProductDetail';
import ElectronicToys from "./ElectronicToys";
import PlushToys from "./PlushToys";
import EducationalToys from "./EducationalToys";
import OutdoorToys from "./OutdoorToys";
import FidgetToys from "./FidgetToys";
import CheckoutPage from './Checkout';
import ConfirmationPage from './ConfirmationPage';
import Login from './Login'; 
import Signup from './Signup';
import SuccessPage from './SuccessPage';
import BoardToys from './BoardToys';
import Other from './Other';
import AdminDashboard from './AdminDashboard';
import ManageProducts from './Admin/ManageProducts';
import ManageUsers from './Admin/ManageUsers';
import AddProduct from './Admin/AddProduct';
import Account from './Account';
import SearchResults from './SearchResults';
import NotAvailable from './NotAvailable';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home1" element={<Home />} />
          <Route path="/products" element={<Products />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" exact component={CheckoutPage} />
          <Route path="/account" element={<Account />} />
          <Route path="/confirmation" component={ConfirmationPage} />
          <Route path="/electronic-toys" element={<ElectronicToys />} />
          <Route path="/plush-toys" element={<PlushToys />} />
          <Route path="/educational-toys" element={<EducationalToys />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/outdoor-toys" element={<OutdoorToys />} />
          <Route path="/fidget-toys" element={<FidgetToys />} />
          <Route path="/login" element={<Login />} />
          <Route path="/board-toys" element={<BoardToys />} />
          <Route path="/other" component={Other} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/buy/:id" element={<ProductDetail />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/products" element={<ManageProducts />} />
          <Route path="/admin/users" element={<ManageUsers />} />
          <Route path="/admin/products/add" element={<AddProduct />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/not-available" element={<NotAvailable />} />
      </Routes>
    </Router>
     </>
  );
}
export default App;

// src/App.js

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Home';
// import Products from './Products';
// import Contact from './Contact';
// import Cart from './Cart';
// import ProductDetail from './ProductDetail';
// import ElectronicToys from "./ElectronicToys";
// import PlushToys from "./PlushToys";
// import EducationalToys from "./EducationalToys";
// import OutdoorToys from "./OutdoorToys";
// import FidgetToys from "./FidgetToys";
// import Navbar from "./Navbar";

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/electronic-toys" element={<ElectronicToys />} />
//         <Route path="/plush-toys" element={<PlushToys />} />
//         <Route path="/educational-toys" element={<EducationalToys />} />
//         <Route path="/outdoor-toys" element={<OutdoorToys />} />
//         <Route path="/fidget-toys" element={<FidgetToys />} />
//         <Route path="/buy/:id" element={<ProductDetail />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
