// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import Footer from './footer';
// import './Contact.css';
// import Navbar1 from './Navbar1';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic
//     alert('Message sent!');
//   };

//   return (
//     <>
//       <Navbar1 />
//       <div className="container mt-5">
//         <h1 className="text-center mb-4">Contact Us</h1>
//         <div className="row">
//           <div className="col-md-6">
//             <form onSubmit={handleSubmit}>
//               <div className="mb-3">
//                 <label htmlFor="name" className="form-label">Name</label>
//                 <input 
//                   type="text" 
//                   className="form-control" 
//                   id="name" 
//                   name="name" 
//                   value={formData.name} 
//                   onChange={handleChange} 
//                   required 
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="email" className="form-label">Email</label>
//                 <input 
//                   type="email" 
//                   className="form-control" 
//                   id="email" 
//                   name="email" 
//                   value={formData.email} 
//                   onChange={handleChange} 
//                   required 
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="message" className="form-label">Message</label>
//                 <textarea 
//                   className="form-control" 
//                   id="message" 
//                   name="message" 
//                   rows="4" 
//                   value={formData.message} 
//                   onChange={handleChange} 
//                   required 
//                 ></textarea>
//               </div>
//               <button type="submit" className="btn btn-success">Submit</button>
//             </form>
//           </div>
//           <div className="col-md-6">
//             <h3 id="g1">Contact Details</h3>
//             <p><i className="bi bi-geo-alt icon"></i> 123 Toy Lane, Toy City, TO 12345</p>
//             <p><i className="bi bi-telephone icon"></i> +1 234 567 890</p>
//             <p><i className="bi bi-envelope icon"></i> contact@toytreasure.com</p>
//             <h4>About:</h4>
//             <div className="about-section">
//               <p><i className="bi bi-info-circle icon"></i> ToyTreasure offers a wide variety of high-quality toys for all ages. Our products are carefully selected to ensure they are safe, fun, and educational. We pride ourselves on delivering exceptional customer service and ensuring that every toy meets stringent safety standards. Our mission is to provide joy and learning through our extensive range of toys. ToyTreasure has something for every child. We believe in the power of play and its positive impact on children's development. Join us on our journey to bring smiles to children and parents alike!</p>
//             </div>
//             </div>
//           </div>
//         </div>
      
//       <Footer />
//     </>
//   );
// }

// export default Contact;

import React, { useState } from 'react';
import Navbar1 from './Navbar1';
import Footer from './footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  const styles = {
    container: {
      background: 'url("https://st2.depositphotos.com/1265075/7365/i/450/depositphotos_73656201-stock-photo-web-contact-us-icons-cubes.jpg")',
      backgroundSize: 'cover',  
      backgroundPosition: 'center',
      minHeight: '100vh',
      color: '#fff',
      paddingTop: '80px', 
    },
    formContainer: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      padding: '30px',
      borderRadius: '10px',
    },
    contactDetails: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      padding: '30px',
      borderRadius: '10px',
    },
    icon: {
      marginRight: '10px',
    },
    aboutSection: {
      marginTop: '20px',
    },
  };

  return (
    <>
      <Navbar1 />
      <div className="container-fluid" style={styles.container}>
        <div className="container mt-5">
          <h1 className="text-center mb-4">Contact Us</h1>
          <div className="row">
            <div className="col-md-6" style={styles.formContainer}>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea 
                    className="form-control" 
                    id="message" 
                    name="message" 
                    rows="4" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
              </form>
            </div>
            <div className="col-md-6" style={styles.contactDetails}>
              <h3 id="g1">Contact Details</h3>
              <p><i className="bi bi-geo-alt icon"></i> 123 Toy Lane, Toy City, TO 12345</p>
              <p><i className="bi bi-telephone icon"></i> +1 234 567 890</p>
              <p><i className="bi bi-envelope icon"></i> contact@toytreasure.com</p>
              <h4>About:</h4>
              <div className="about-section" style={styles.aboutSection}>
                <p><i className="bi bi-info-circle icon"></i> ToyTreasure offers a wide variety of high-quality toys for all ages. Our products are carefully selected to ensure they are safe, fun, and educational. We pride ourselves on delivering exceptional customer service and ensuring that every toy meets stringent safety standards. Our mission is to provide joy and learning through our extensive range of toys. ToyTreasure has something for every child. We believe in the power of play and its positive impact on children's development. Join us on our journey to bring smiles to children and parents alike!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
