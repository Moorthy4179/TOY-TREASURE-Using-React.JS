
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "./Navbar";
// import Footer from "./footer"; 
// import Navbar1 from "./Navbar1";
// import axios from "axios";

// const products = [
//   {
//     id: 201,
//     category: "Plush Toys",
//     name: "Cuddly Bear",
//     price: "₹499.00 INR",
//     image: "https://m.media-amazon.com/images/I/91oxSXgVD6L.jpg",
//     alt: "Cuddly Bear",
//     link: "/buy/201", 
//   },
//   {
//     id: 202,
//     category: "Plush Toys",
//     name: "Soft Bunny",
//     price: "₹399.00 INR",
//     image: "https://m.media-amazon.com/images/I/51v7OEYlWZL._AC_UF1000,1000_QL80_.jpg",
//     alt: "Soft Bunny",
//     link: "/buy/202", 
//   },
//   {
//     id: 203,
//     category: "Plush Toys",
//     name: "Teddy Bear",
//     price: "₹299.00 INR",
//     image: "https://assets.ajio.com/medias/sys_master/root/20230629/u8r9/649d17c5eebac147fc3af7bf/-1117Wx1400H-465845109-brown-MODEL.jpg",
//     alt: "Teddy Bear",
//     link: "/buy/203", 
//   },
//   {
//     id: 204,
//     category: "Plush Toys",
//     name: "Stuffed Elephant",
//     price: "₹599.00 INR",
//     image: "https://images-cdn.ubuy.co.in/64012a013813f845053390d3-kinrex-elephant-stuffed-animals.jpg",
//     alt: "Stuffed Elephant",
//     link: "/buy/204",
//   },
//   {
//     id: 205,
//     category: "Plush Toys",
//     name: "Penguin Plush",
//     price: "₹249.00 INR",
//     image: "https://m.media-amazon.com/images/I/61A2ddWFQxL._AC_UF1000,1000_QL80_.jpg",
//     alt: "Penguin Plush",
//     link: "/buy/205",
//   },
//   {
//     id: 206,
//     category: "Plush Toys",
//     name: "Fluffy Kitten",
//     price: "₹399.00 INR",
//     image: "https://images-cdn.ubuy.co.in/63b632ddd92a0a420247459b-cute-kitten-plush-toy-throw-pillow.jpg",
//     alt: "Fluffy Kitten",
//     link: "/buy/206",
//   },
// ];



import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Navbar1 from "./Navbar1";
import Footer from "./footer"; 
import axios from "axios";
import { CartContext } from "./CartContext";

const PlushToys = () => {
  const [plush1, setUsers] = useState([]);
  const { addToCart } = useContext(CartContext); 

  useEffect(() => {
    axios
      .get('http://localhost/project/w3.php?p_c_id=2')
      .then(res => setUsers(res.data));
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.p_name} has been added to your cart.`);
  };

  const styles = {
    container: {
      background: 'url("https://freedesignfile.com/upload/2016/11/Toys-with-paper-background-vectors-06.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      color: '#fff',
      paddingTop: '80px',
    },
    title: {
      textAlign: 'center',
      color: '#000000',
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '40px',
    },
    card: {
      width: "18rem",
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      border: 'none',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    cardImg: {
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
      height: '150px',
      // objectFit: 'cover',
    },
    cardBody: {
      color: '#333',
    },
    cardTitle: {
      color: '#333',
    },
    cardText: {
      color: '#777',
    },
    button: {
      backgroundColor: '#f39c12',
      borderColor: '#e67e22',
    }
  };
  const headerStyle = {
    color: '#343a40',
    marginBottom: '40px',
    fontSize: '3rem',
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottom: '1px solid #ddd',
    paddingBottom: '10px',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px 10px 0 0',
    width: '100%',
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
  };

  return (
    <>
      <Navbar1 />
      <div className="container-fluid" style={styles.container}>
        <div className="container mt-5">
          <h1 style={headerStyle}>PLUSH TOYS</h1><br />
          <div className="row justify-content-center">
            {plush1.map((product) => (
              <div key={product.id} className="col-md-4 mb-4 d-flex align-items-stretch">
                <div className="card" style={styles.card}>
                  <img src={product.p_image} className="card-img-top" alt={product.alt} style={styles.cardImg} />
                  <div className="card-body d-flex flex-column" style={styles.cardBody}>
                    <h5 className="card-title" style={styles.cardTitle}>{product.p_name}</h5>
                    <p className="card-text" style={styles.cardText}>₹{product.p_price}</p>
                    <p className="card-text" style={styles.cardText}>{product.p_description}</p>
                    <button 
                      onClick={() => handleAddToCart(product)} 
                      className="btn btn-primary mt-auto" 
                      style={styles.button}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PlushToys;
