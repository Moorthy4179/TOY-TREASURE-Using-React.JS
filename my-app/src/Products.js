import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './footer';

const products = [
  {
    id: 1,
    category: "Electronic Toys",
    name: "Musical Phone",
    price: "₹489.00 INR",
    image: "https://funblast.in/cdn/shop/files/61NYw0l2uaL._SL1500.jpg?v=1692434363",
    description: 'A colorful musical mobile phone toy with lights, sounds, and interactive buttons, engaging infants in sensory and auditory play.',
  },
  {
    id: 103,
    category: "Fidget Toys",
    name: "Stress Ball",
    price: "₹49.00 INR",
    image: "https://images.meesho.com/images/products/272640732/mxmfc_512.jpg",
    description: 'A Gesture Sensing Robot interprets human gestures to perform tasks, interaction through intuitive, contactless control.',
  },
  {
    id: 3,
    name: 'Remote Control Car',
    price: '₹599.00',
    image: 'https://baybee.co.in/cdn/shop/files/001_a13e8b69-e5e6-473b-b8cd-54be881bb60b.jpg?v=1691218455',
    description: 'A high-speed remote control car toy with responsive controls, durable build, and vibrant design, providing thrilling playtime for kids.',
  },
  {
    id: 204,
    category: "Plush Toys",
    name: "Stuffed Elephant",
    price: "₹599.00 INR",
    image: "https://images-cdn.ubuy.co.in/64012a013813f845053390d3-kinrex-elephant-stuffed-animals.jpg",
    description: 'A soft, cuddly plush baby toy, perfect for snuggling, with textures and soothing colors, comforting and entertaining infants.',
  },
  {
    id: 101,
    category: "Fidget Toys",
    name: "Spinner",
    price: "₹149.00 INR",
    image: "https://www.sybazzar.com/public/832-832/files/A4032ED7DC6B926-37a5ae74c946fa1fcc04f975764a6484.jpg",
    description: 'A fidget spinner is a small, handheld toy with a central bearing, designed to spin smoothly between fingers for stress relief.',
  },
  {
    id: 404,
    category: "Outdoor Toys",
    name: "Soccer Ball",
    price: "₹299.00 INR",
    image: "https://i5.walmartimages.com/seo/FRCOLOR-5-Pcs-Inflatable-Soccer-Balls-Kids-Football-Toys-Party-Favors-Supplies-Decorations-Set-9-Inch-Random-Color_de27b392-0e0d-4aa8-a38f-5fbf5bc17559.dfff5385d148da4731e3c25e66788a2d.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    description: 'A puppet pop toy is a sensory fidget device featuring bubble-like buttons that can be pushed to make a popping sound.',
  },
];

const Products = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Our Products</h2>
        <div className="row">
          {products.map(product => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img src={product.image} className="card-img-top" alt={product.name} height="200px" />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                  <p className="card-text">{product.description}</p>
                  <Link to={`/buy/${product.id}`} className="btn btn-primary">Buy Now</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
