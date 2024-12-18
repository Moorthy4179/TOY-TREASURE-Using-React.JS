// src/BoardGames.js
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar1 from "./Navbar1";
import Footer from "./footer";
import { CartContext } from "./CartContext";

const products = [
  {
    id: 13,
    category: "Board Games",
    name: "Chess Set",
    price: "₹499.00 INR",
    image: "https://example.com/chess-set.jpg",
    alt: "Chess Set",
    link: "/buy/13",
  },
  {
    id: 14,
    category: "Board Games",
    name: "Monopoly",
    price: "₹999.00 INR",
    image: "https://example.com/monopoly.jpg",
    alt: "Monopoly",
    link: "/buy/14",
  },
  {
    id: 15,
    category: "Board Games",
    name: "Scrabble",
    price: "₹699.00 INR",
    image: "https://example.com/scrabble.jpg",
    alt: "Scrabble",
    link: "/buy/15",
  },
  {
    id: 16,
    category: "Board Games",
    name: "Risk",
    price: "₹1299.00 INR",
    image: "https://example.com/risk.jpg",
    alt: "Risk",
    link: "/buy/16",
  },
  {
    id: 17,
    category: "Board Games",
    name: "Catan",
    price: "₹1599.00 INR",
    image: "https://example.com/catan.jpg",
    alt: "Catan",
    link: "/buy/17",
  },
  {
    id: 18,
    category: "Board Games",
    name: "Clue",
    price: "₹799.00 INR",
    image: "https://example.com/clue.jpg",
    alt: "Clue",
    link: "/buy/18",
  },
];

const BoardGames = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(CartContext);

  const handleAddToCart = (event, product) => {
    event.stopPropagation();
    dispatch({ type: 'ADD_TO_CART', product });
    alert('Product added to cart!');
  };

  const handleCardClick = (link) => {
    navigate(link);
  };

  const boardGames = products.filter((product) => product.category === "Board Games");

  return (
    <>
      <Navbar1 />
      <div className="container mt-5">
        <h1 className="text-warning">Board Games</h1><br></br>
        <div className="row justify-content-center">
          {boardGames.map((product) => (
            <div key={product.id} className="col-md-4 mb-4 d-flex align-items-stretch">
              <div 
                className="card" 
                style={{ width: "18rem", cursor: "pointer" }}
                onClick={() => handleCardClick(product.link)}
              >
                <img src={product.image} className="card-img-top" alt={product.alt} height="150px" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                  <button 
                    className="btn btn-primary btn-sm mt-auto" 
                    onClick={(event) => handleAddToCart(event, product)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BoardGames;
