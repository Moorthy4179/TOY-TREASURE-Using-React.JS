// // src/BoardGames.js
// import React, { useContext, useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Navbar1 from "./Navbar1";
// import Footer from "./footer";
// import { CartContext } from "./CartContext";
// import axios from "axios";

// const products = [
//   {
//     id: 601,
//     category: "Board Games",
//     name: "Chess Set",
//     price: "₹499.00 INR",
//     image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/board-game/8/4/v/7-wooden-folding-chess-set-12-12-inch-solid-plastic-chess-pieces-original-imagmhqfbkzrgvdq.jpeg?q=20&crop=false",
//     alt: "Chess Set",
//     link: "/buy/601",
//   },
//   {
//     id: 602,
//     category: "Board Games",
//     name: "Monopoly",
//     price: "₹999.00 INR",
//     image: "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:376/h:376/q:75/https://bleedingcool.com/wp-content/uploads/2022/11/Monopoly-Original-Squishmallows-Collectors-Edition.jpg",
//     alt: "Monopoly",
//     link: "/buy/602",
//   },
//   {
//     id: 603,
//     category: "Board Games",
//     name: "Scrabble",
//     price: "₹699.00 INR",
//     image: "https://shopon.pk/images/thumbnails/1223/1000/detailed/154/Letter_Matching_Game_Scrabble_Board_Game_Original_Or_Travel_For.jpg",
//     alt: "Scrabble",
//     link: "/buy/603",
//   },
//   {
//     id: 604,
//     category: "Board Games",
//     name: "Risk",
//     price: "₹1299.00 INR",
//     image: "https://goldendiscs.ie/cdn/shop/files/91DpjRwpekL._AC_SX425.jpg?v=1701448687",
//     alt: "Risk",
//     link: "/buy/604",
//   },
//   {
//     id: 605,
//     category: "Board Games",
//     name: "Carrom Board",
//     price: "₹1799.00 INR",
//     image: "https://m.media-amazon.com/images/I/51-V3ZQdC0L.jpg",
//     alt: "Catan",
//     link: "/buy/605",
//   },
// ];

// const BoardToys = () => {
//   const [plush1, setUsers] = useState([]);
//   const { addToCart } = useContext(CartContext); 

//   useEffect(() => {
//     axios
//       .get('http://localhost/project/w3.php')
//       .then(res => setUsers(res.data));
//   }, []);

//   const handleAddToCart = (product) => {
//     addToCart(product);
//     alert(`${product.p_name} has been added to your cart.`);
//   };

//   return (
//     <>
//       <Navbar1 />
//       <div className="container mt-5">
//         <h1 className="text-warning">Plush Toys</h1><br />
//         <div className="row justify-content-center">
//           {plush1.map((product) => (
//             <div key={product.id} className="col-md-4 mb-4 d-flex align-items-stretch">
//               <div className="card" style={{ width: "18rem" }}>
//                 <img src={product.p_image} className="card-img-top" alt={product.alt} height="150px" />
//                 <div className="card-body d-flex flex-column">
//                   <h5 className="card-title">{product.p_name}</h5>
//                   <p className="card-text">{product.p_price}</p>
//                   <button onClick={() => handleAddToCart(product)} className="btn btn-primary mt-auto">Add To Cart</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <br />
//       <Footer />
//     </>
//   );
// };

// export default BoardToys;


import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Navbar1 from "./Navbar1";
import Footer from "./footer"; 
import axios from "axios";
import { CartContext } from "./CartContext";

const EducationalToys = () => {
  const [plush1, setUsers] = useState([]);
  const { addToCart } = useContext(CartContext); 

  useEffect(() => {
    axios
    .get('http://localhost/project/w3.php?p_c_id=6')
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
          <h1 style={headerStyle}>BOARD GAMES</h1><br />
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

export default EducationalToys;
