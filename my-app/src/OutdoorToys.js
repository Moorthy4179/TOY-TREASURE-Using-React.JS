// // src/OutdoorToys.js

// import React from "react";
// import { Link } from "react-router-dom";
// import Navbar from "./Navbar";
// import Footer from "./footer"; 
// import Navbar1 from "./Navbar1";

// const products = [
//   {
//     id: 401,
//     category: "Outdoor Toys",
//     name: "Swing Set",
//     price: "₹4299.00 INR",
//     image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/outdoor-toy/s/b/d/1-kids-slide-and-swing-set-with-basketball-hoop-indoor-outdoor-original-imagnw4xgukfgtwz.jpeg?q=90&crop=false",
//     alt: "Swing Set",
//     link: "/buy/401", 
//   },
//   {
//     id: 402,
//     category: "Outdoor Toys",
//     name: "Basketball Hoop",
//     price: "₹899.00 INR",
//     image: "https://www.jiomart.com/images/product/original/rvvg6p85cj/buyab-factory-basket-ball-for-kids-toys-for-boys-and-girls-kids-basketball-portable-set-with-hanging-board-ring-net-ball-indoor-and-outdoor-games-product-images-orvvg6p85cj-p595939527-1-202212012152.jpg?im=Resize=(420,420)",
//     alt: "Basketball Hoop",
//     link: "/buy/402", 
//   },
//   {
//     id: 403,
//     category: "Outdoor Toys",
//     name: "Water Slide",
//     price: "₹8499.00 INR",
//     image: "https://s.yimg.com/ny/api/res/1.2/mul.yYppgNFQcUOb4Pi5Rw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ2MQ--/https://media.zenfs.com/en/purewow_185/e8daa371777d060a9a84bb846a8a2861",
//     alt: "Water Slide",
//     link: "/buy/403", 
//   },
//   {
//     id: 404,
//     category: "Outdoor Toys",
//     name: "Soccer Ball",
//     price: "₹299.00 INR",
//     image: "https://i5.walmartimages.com/seo/FRCOLOR-5-Pcs-Inflatable-Soccer-Balls-Kids-Football-Toys-Party-Favors-Supplies-Decorations-Set-9-Inch-Random-Color_de27b392-0e0d-4aa8-a38f-5fbf5bc17559.dfff5385d148da4731e3c25e66788a2d.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
//     alt: "Soccer Ball",
//     link: "/buy/404", 
//   },
//   {
//     id: 405,
//     category: "Outdoor Toys",
//     name: "Frisbee",
//     price: "₹149.00 INR",
//     image: "https://images-cdn.ubuy.com.sa/633b6eb5d8f7d5229d2b57d2-b-toys-by-battat-flying-disc-set-4.jpg",
//     alt: "Frisbee",
//     link: "/buy/405", 
//   },
//   {
//     id: 406,
//     category: "Outdoor Toys",
//     name: "Bicycle",
//     price: "₹4499.00 INR",
//     image: "https://image.made-in-china.com/202f0j00MmDWHenFQUqZ/Bicycle-Toys-Cycling-Bike-for-Kids-by-Cycles-Bicicletas-PARA-Nios-Baratas-Bebes-Children-Model-Bike-Bicycle-Kids-Cycle-for-Boy.jpg",
//     alt: "Bicycle",
//     link: "/buy/406", 
//   },
// ];

// const OutdoorToys = () => {
//   const outdoorToys = products.filter((product) => product.category === "Outdoor Toys");

//   return (
//     <>
//       <Navbar1 />
//       <div className="container mt-5">
//         <h1 class="text-warning">Outdoor Toys</h1><br></br>
//         <div className="row">
//           {outdoorToys.map((product) => (
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

// export default OutdoorToys;


import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Navbar1 from "./Navbar1";
import Footer from "./footer"; 
import axios from "axios";
import { CartContext } from "./CartContext";

const OutdoorToys = () => {
  const [plush1, setUsers] = useState([]);
  const { addToCart } = useContext(CartContext); 

  useEffect(() => {
    axios
    .get('http://localhost/project/w3.php?p_c_id=4')
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
          <h1 style={headerStyle}>OUTDOOR TOYS</h1><br />
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

export default OutdoorToys;