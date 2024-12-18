// import React, { useState, useContext } from 'react';
// import Navbar from './Navbar';
// import Footer from './footer';
// import { CartContext } from './CartContext'; // Import your CartContext
// import { useHistory } from 'react-router-dom'; // Assuming you use React Router for navigation

// const CheckoutPage = () => {
//   const { cart } = useContext(CartContext);
//   const history = useHistory();

//   // State for form inputs
//   const [shippingAddress, setShippingAddress] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('');

//   // Function to handle form submission
//   const handleCheckout = async () => {
//     try {
//       // Replace with actual API endpoint for checkout
//       const response = await fetch('/api/checkout', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           cart,
//           shippingAddress,
//           paymentMethod,
//         }),
//       });

//       if (response.ok) {
//         // Clear cart after successful checkout
//         // You may implement this in your CartContext or here
//         // For now, simulate clearing the cart
//         alert('Checkout successful!');
//         // Redirect to a confirmation page
//         history.push('/confirmation');
//       } else {
//         // Handle error responses
//         alert('Checkout failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error during checkout:', error);
//       alert('An error occurred during checkout. Please try again later.');
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container mt-5">
//         <h1>Checkout</h1>
//         <form onSubmit={handleCheckout}>
//           <div className="form-group">
//             <label htmlFor="shippingAddress">Shipping Address:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="shippingAddress"
//               value={shippingAddress}
//               onChange={(e) => setShippingAddress(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="paymentMethod">Payment Method:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="paymentMethod"
//               value={paymentMethod}
//               onChange={(e) => setPaymentMethod(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Confirm Order
//           </button>
//         </form>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default CheckoutPage;
// CheckoutPage.js


//latest

// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import Footer from './footer';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom

// const CheckoutPage = () => {
//   const history = useHistory(); // Use useHistory hook to access the history object

//   // State for form inputs
//   const [shippingAddress, setShippingAddress] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('');

//   // Function to handle form submission
//   const handleCheckout = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('/api/checkout', {
//         cart: [], // Replace with actual cart data if needed
//         shippingAddress,
//         paymentMethod,
//       });

//       if (response.status === 200) {
//         // Clear form fields after successful checkout
//         setShippingAddress('');
//         setPaymentMethod('');

//         // Redirect to confirmation page
//         history.push('/confirmation');
//       } else {
//         alert('Checkout failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error during checkout:', error);
//       alert('An error occurred during checkout. Please try again later.');
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container mt-5">
//         <h1>Checkout</h1>
//         <form onSubmit={handleCheckout}>
//           <div className="form-group">
//             <label htmlFor="shippingAddress">Shipping Address:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="shippingAddress"
//               value={shippingAddress}
//               onChange={(e) => setShippingAddress(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="paymentMethod">Payment Method:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="paymentMethod"
//               value={paymentMethod}
//               onChange={(e) => setPaymentMethod(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Confirm Order
//           </button>
//         </form>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default CheckoutPage;


//13/7

import React, { useState } from "react";

const Checkout = () => {
  const [shippingDetails, setShippingDetails] = useState({});
  const [paymentDetails, setPaymentDetails] = useState({});
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment logic
    // If payment is successful
    console.log("Order confirmed", { shippingDetails, paymentDetails });
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <h3>Shipping Details</h3>
        {/* Shipping details form fields */}
        <input type="text" placeholder="Name" required />
        <input type="text" placeholder="Address" required />
        <h3>Payment Details</h3>
        {/* Payment details form fields */}
        <input type="text" placeholder="Card Number" required />
        <input type="text" placeholder="Expiration Date" required />
        <button type="submit">Place Order</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Checkout;

