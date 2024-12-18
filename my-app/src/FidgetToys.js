// import React from "react";
// import { Link } from "react-router-dom";
// import Navbar from "./Navbar";
// import Footer from "./footer"; 
// import Navbar1 from "./Navbar1";

// const products = [
//   {
//     id: 101,
//     category: "Fidget Toys",
//     name: "Spinner",
//     price: "₹149.00 INR",
//     image: "https://www.sybazzar.com/public/832-832/files/A4032ED7DC6B926-37a5ae74c946fa1fcc04f975764a6484.jpg",
//     alt: "Spinner",
//     link: "/buy/101", 
//   },
//   {
//     id: 102,
//     category: "Fidget Toys",
//     name: "Fidget Cube",
//     price: "₹199.00 INR",
//     image: "https://images.meesho.com/images/products/122722597/sifff_512.webp",
//     alt: "Fidget Cube",
//     link: "/buy/102", 
//   },
//   {
//     id: 103,
//     category: "Fidget Toys",
//     name: "Stress Ball",
//     price: "₹49.00 INR",
//     image: "https://images.meesho.com/images/products/272640732/mxmfc_512.jpg",
//     alt: "Stress Ball",
//     link: "/buy/103", 
//   },
//   {
//     id: 104,
//     category: "Fidget Toys",
//     name: "Infinity Cube",
//     price: "₹2299.00 INR",
//     image: "https://images-cdn.ubuy.co.in/633b4252426ccc220158dfb6-star-cube-vcall-2-in-1-combo-infinity.jpg",
//     alt: "Infinity Cube",
//     link: "/buy/104", 
//   },
//   {
//     id: 105,
//     category: "Fidget Toys",
//     name: "Pop It",
//     price: "₹99.00 INR",
//     image: "https://media.takealot.com/covers_images/bbb03da0598c4ad49f04b0fb71009a56/s-pdpxl.file",
//     alt: "Pop It",
//     link: "/buy/105", 
//   },
//   {
//     id: 106,
//     category: "Fidget Toys",
//     name: "Tangle Toy",
//     price: "₹79.00 INR",
//     image: "https://m.media-amazon.com/images/I/61KjeMj3ETL.jpg",
//     alt: "Tangle Toy",
//     link: "/buy/106", 
//   },
// ];

// const FidgetToys = () => {
//   const fidgetToys = products.filter((product) => product.category === "Fidget Toys");

//   return (
//     <>
//       <Navbar1 />
//       <div className="container mt-5">
//         <h1 class="text-warning">Fidget Toys</h1>
//         <br></br>
//         <div className="row justify-content-center">
//           {fidgetToys.map((product) => (
//             <div key={product.id} className="col-md-4 mb-4 d-flex align-items-stretch">
//               <div className="card" style={{ width: "18rem" }}>
//                 <img src={product.image} className="card-img-top" alt={product.alt} height="150px" />
//                 <div className="card-body d-flex flex-column">
//                   <h5 className="card-title">{product.name}</h5>
//                   <p className="card-text">{product.price}</p>
//                   <Link to={product.link} className="btn btn-primary mt-auto">Buy Now</Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default FidgetToys;

import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Navbar1 from "./Navbar1";
import Footer from "./footer"; 
import axios from "axios";
import { CartContext } from "./CartContext";

const FidgetToys = () => {
  const [plush1, setUsers] = useState([]);
  const { addToCart } = useContext(CartContext); 

  useEffect(() => {
    axios
      .get('http://localhost/project/w3.php?p_c_id=5')
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
      textDecoration: 'none', 
      color: 'inherit', 
    },
    cardImg: {
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
      height: '150px',
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
          <h1 style={headerStyle}>FIDGET TOYS</h1><br />
          <div className="row justify-content-center">
            {plush1.map((product) => (
              <div key={product.id} className="col-md-4 mb-4 d-flex align-items-stretch">
                <Link to={`/buy/${product.id}`} style={styles.card}>
                  <div className="card" style={styles.card}>
                    <img src={product.p_image} className="card-img-top" alt={product.alt} style={styles.cardImg} />
                    <div className="card-body d-flex flex-column" style={styles.cardBody}>
                      <h5 className="card-title" style={styles.cardTitle}>{product.p_name}</h5>
                      <p className="card-text" style={styles.cardText}>₹{product.p_price}</p>
                      <p className="card-text" style={styles.cardText}>{product.p_description}</p>
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          handleAddToCart(product);
                        }} 
                        className="btn btn-primary mt-auto" 
                        style={styles.button}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FidgetToys;
