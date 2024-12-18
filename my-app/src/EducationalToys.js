// import React from "react";
// import { Link } from "react-router-dom";
// import Navbar from "./Navbar";
// import Footer from "./footer"; 
// import Navbar1 from "./Navbar1";

// const products = [
//   {
//     id: 301,
//     category: "Educational Toys",
//     name: "Building Blocks Set",
//     price: "₹699.00 INR",
//     image: "https://5.imimg.com/data5/SELLER/Default/2022/10/WV/VB/RI/21279949/building-blocks-educational-toys-100-pcs-500x500.jpg",
//     alt: "Building Blocks Set",
//     link: "/buy/301", 
//   },
//   {
//     id: 302,
//     category: "Educational Toys",
//     name: "Science Kit",
//     price: "₹799.00 INR",
//     image: "https://i.ebayimg.com/images/g/tPcAAOSwenNjPU~L/s-l1200.jpg",
//     alt: "Science Kit",
//     link: "/buy/302", 
//   },
//   {
//     id: 303,
//     category: "Educational Toys",
//     name: "Math Puzzle",
//     price: "₹499.00 INR",
//     image: "https://images-cdn.ubuy.co.in/634d112f6ece5c6ce95bd126-sankuu-wooden-puzzles-counting-toys.jpg",
//     alt: "Math Puzzle",
//     link: "/buy/303", 
//   },
//   {
//     id: 304,
//     category: "Educational Toys",
//     name: "Solar System Model",
//     price: "₹999.00 INR",
//     image: "https://m.media-amazon.com/images/I/71VNrBHrCKL._AC_UF894,1000_QL80_.jpg",
//     alt: "Solar System Model",
//     link: "/buy/304", 
//   },
//   {
//     id: 305,
//     category: "Educational Toys",
//     name: "Alphabet Blocks",
//     price: "₹399.00 INR",
//     image: "https://images-cdn.ubuy.co.in/66762732334745364a36cc63-skoolzy-wooden-alphabet-blocks-26-abc.jpg",
//     alt: "Alphabet Blocks",
//     link: "/buy/305", 
//   },
//   {
//     id: 306,
//     category: "Educational Toys",
//     name: "Learning Tablet",
//     price: "₹1199.00 INR",
//     image: "https://m.media-amazon.com/images/I/715vkDW3E4L.jpg",
//     alt: "Learning Tablet",
//     link: "/buy/306", 
//   },
// ];

// const EducationalToys = () => {
//   const educationalToys = products.filter((product) => product.category === "Educational Toys");

//   return (
//     <>
//       <Navbar1 />
//       <div className="container mt-5">
//         <h1 className="text-warning">Educational Toys</h1><br></br>
//         <div className="row justify-content-center">
//           {educationalToys.map((product) => (
//             <div key={product.id} className="col-md-4 mb-4 d-flex align-items-stretch">
//               <Link to={product.link} className="card" style={{ width: "18rem", textDecoration: "none", color: "inherit" }}>
//                 <img src={product.image} className="card-img-top" alt={product.alt} height="150px" />
//                 <div className="card-body d-flex flex-column">
//                   <h5 className="card-title">{product.name}</h5>
//                   <p className="card-text">{product.price}</p>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default EducationalToys;


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
    .get('http://localhost/project/w3.php?p_c_id=3')
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
          <h1 style={headerStyle}>EDUCTAIONAL TOYS</h1><br />
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
