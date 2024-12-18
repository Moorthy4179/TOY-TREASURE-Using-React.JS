// // import React from "react";
// // import { Link } from "react-router-dom";
// // import Navbar from "./Navbar";
// // import Footer from "./footer"; 
// // import Navbar1 from "./Navbar1";

// // const products = [
// //   {
// //     id: 1,
// //     category: "Electronic Toys",
// //     name: "Musical Phone",
// //     price: "₹489.00 INR",
// //     image: "https://funblast.in/cdn/shop/files/61NYw0l2uaL._SL1500.jpg?v=1692434363",
// //     alt: "Musical Phone",
// //     link: "/buy/1", 
// //   },
// //   {
// //     id: 2,
// //     category: "Electronic Toys",
// //     name: "Gesture Robot",
// //     price: "₹1599.00 INR",
// //     image: "https://rukminim2.flixcart.com/image/750/900/jlzhci80/remote-control-toy/e/f/3/gesture-co-jack-royal-original-imaf8yrszhxghwha.jpeg?q=20&crop=false",
// //     alt: "Gesture Robot",
// //     link: "/buy/2", 
// //   },
// //   {
// //     id: 3,
// //     category: "Electronic Toys",
// //     name: "Remote Control Car",
// //     price: "₹599.00 INR",
// //     image: "https://baybee.co.in/cdn/shop/files/001_a13e8b69-e5e6-473b-b8cd-54be881bb60b.jpg?v=1691218455",
// //     alt: "Remote Control Car",
// //     link: "/buy/3", 
// //   },
// //   {
// //     id: 4,
// //     category: "Electronic Toys",
// //     name: "Smart Watch",
// //     price: "₹1299.00 INR",
// //     image: "https://ueeshop.ly200-cdn.com/u_file/UPAW/UPAW306/2210/products/19/8cff47c9b5.png?x-oss-process=image/resize,m_lfit,h_500,w_500",
// //     alt: "Smart Watch",
// //     link: "/buy/4",
// //   },
// //   {
// //     id: 5,
// //     category: "Electronic Toys",
// //     name: "Drone",
// //     price: "₹2999.00 INR",
// //     image: "https://www.jiomart.com/images/product/original/rvood9jik0/drone-toy-legal-images-orvood9jik0-p595551635-5-202211250859.jpg?im=Resize=(420,420)",
// //     alt: "Drone",
// //     link: "/buy/5",
// //   },
// //   {
// //     id: 6,
// //     category: "Electronic Toys",
// //     name: "Robot Dog",
// //     price: "₹1999.00 INR",
// //     image: "https://funblast.in/cdn/shop/files/61fId-H9SML._SL1187.jpg?v=1692436187",
// //     alt: "Robot Dog",
// //     link: "/buy/6",
// //   },
// // ];

// // const ElectronicToys = () => {
// //   const electronicToys = products.filter((product) => product.category === "Electronic Toys");

// //   return (
// //     <>
// //       <Navbar1 />
// //       <div className="container mt-5">
// //         <h1 className="text-warning">Electronic Toys</h1><br></br>
// //         <div className="row justify-content-center">
// //           {electronicToys.map((product) => (
// //             <div key={product.id} className="col-md-4 mb-4 d-flex align-items-stretch">
// //               <div className="card" style={{ width: "18rem" }}>
// //                 <img src={product.image} className="card-img-top" alt={product.alt} height="150px" />
// //                 <div className="card-body d-flex flex-column">
// //                   <h5 className="card-title">{product.name}</h5>
// //                   <p className="card-text">{product.price}</p>
// //                   <Link to={product.link} className="btn btn-primary btn-sm mt-auto">Add To Cart</Link>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //       <Footer />
// //     </>
// //   );
// // };

// // export default ElectronicToys;

// //13/7

// import React, { useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Navbar1 from "./Navbar1";
// import Footer from "./footer";
// import { CartContext } from "./CartContext";

// const products = [
//   {
//     id: 1,
//     category: "Electronic Toys",
//     name: "Musical Phone",
//     price: "₹489.00 INR",
//     image: "https://funblast.in/cdn/shop/files/61NYw0l2uaL._SL1500.jpg?v=1692434363",
//     alt: "Musical Phone",
//     link: "/buy/1",
//   },
//   {
//     id: 2,
//     category: "Electronic Toys",
//     name: "Gesture Robot",
//     price: "₹1599.00 INR",
//     image: "https://rukminim2.flixcart.com/image/750/900/jlzhci80/remote-control-toy/e/f/3/gesture-co-jack-royal-original-imaf8yrszhxghwha.jpeg?q=20&crop=false",
//     alt: "Gesture Robot",
//     link: "/buy/2",
//   },
//   {
//     id: 3,
//     category: "Electronic Toys",
//     name: "Remote Control Car",
//     price: "₹599.00 INR",
//     image: "https://baybee.co.in/cdn/shop/files/001_a13e8b69-e5e6-473b-b8cd-54be881bb60b.jpg?v=1691218455",
//     alt: "Remote Control Car",
//     link: "/buy/3",
//   },
//   {
//     id: 4,
//     category: "Electronic Toys",
//     name: "Smart Watch",
//     price: "₹1299.00 INR",
//     image: "https://ueeshop.ly200-cdn.com/u_file/UPAW/UPAW306/2210/products/19/8cff47c9b5.png?x-oss-process=image/resize,m_lfit,h_500,w_500",
//     alt: "Smart Watch",
//     link: "/buy/4",
//   },
//   {
//     id: 5,
//     category: "Electronic Toys",
//     name: "Drone",
//     price: "₹2999.00 INR",
//     image: "https://www.jiomart.com/images/product/original/rvood9jik0/drone-toy-legal-images-orvood9jik0-p595551635-5-202211250859.jpg?im=Resize=(420,420)",
//     alt: "Drone",
//     link: "/buy/5",
//   },
//   {
//     id: 6,
//     category: "Electronic Toys",
//     name: "Robot Dog",
//     price: "₹1999.00 INR",
//     image: "https://funblast.in/cdn/shop/files/61fId-H9SML._SL1187.jpg?v=1692436187",
//     alt: "Robot Dog",
//     link: "/buy/6",
//   },
// ];

// const ElectronicToys = () => {
//   const navigate = useNavigate();
//   const { dispatch } = useContext(CartContext);

//   const handleAddToCart = (event, product) => {
//     event.stopPropagation();
//     dispatch({ type: 'ADD_TO_CART', product });
//     alert('Product added to cart!');
//   };

//   const handleCardClick = (link) => {
//     navigate(link);
//   };

//   const electronicToys = products.filter((product) => product.category === "Electronic Toys");

//   return (
//     <>
//       <Navbar1 />
//       <div className="container mt-5">
//         <h1 className="text-warning">Electronic Toys</h1><br></br>
//         <div className="row justify-content-center">
//           {electronicToys.map((product) => (
//             <div key={product.id} className="col-md-4 mb-4 d-flex align-items-stretch">
//               <div 
//                 className="card" 
//                 style={{ width: "18rem", cursor: "pointer" }}
//                 onClick={() => handleCardClick(product.link)}
//               >
//                 <img src={product.image} className="card-img-top" alt={product.alt} height="150px" />
//                 <div className="card-body d-flex flex-column">
//                   <h5 className="card-title">{product.name}</h5>
//                   <p className="card-text">{product.price}</p>
//                   <button 
//                     className="btn btn-primary btn-sm mt-auto" 
//                     onClick={(event) => handleAddToCart(event, product)}
//                   >
//                     Add To Cart
//                   </button>
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

// export default ElectronicToys;




import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Navbar1 from "./Navbar1";
import Footer from "./footer"; 
import axios from "axios";
import { CartContext } from "./CartContext";

const ElectronicToys = () => {
  const [plush1, setUsers] = useState([]);
  const { addToCart } = useContext(CartContext); 

  useEffect(() => {
    axios
    .get('http://localhost/project/w3.php?p_c_id=1')
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
    },
    
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
          <h1 style={headerStyle}>ELECTRONIC TOYS</h1><br />
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

export default ElectronicToys;

