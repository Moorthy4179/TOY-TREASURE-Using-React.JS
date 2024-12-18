// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
// import { Table, Modal, Button, Form } from 'react-bootstrap';

// const ManageProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [currentProduct, setCurrentProduct] = useState({
//     p_id: '',
//     p_name: '',
//     p_price: '',
//     p_c_id: '',
//     p_image: '',
//     p_description: '',
//   });
//   const [originalProduct, setOriginalProduct] = useState({});

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('http://localhost/project/w6.php');
//       if (Array.isArray(response.data)) {
//         setProducts(response.data);
//       } else {
//         console.error('Invalid data structure returned from API:', response.data);
//       }
//     } catch (error) {
//       setError('Error fetching products. Please try again later.');
//       console.error('Error fetching products:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDeleteProduct = async (productId) => {
//     setLoading(true);
//     try {
//       const response = await axios.delete('http://localhost/project/deleteproduct.php', {
//         data: { p_id: productId }
//       });
//       if (response.data.success) {
//         fetchProducts(); 
//       } else {
//         setError(response.data.message || 'Error deleting product. Please try again later.');
//       }
//     } catch (error) {
//       setError('Error deleting product. Please try again later.');
//       console.error('Error deleting product:', error.response || error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleUpdateProduct = (product) => {
//     setCurrentProduct(product);
//     setOriginalProduct(product);
//     setShowModal(true);
//   };

//   const handleSaveChanges = async () => {
//     setLoading(true);
//     setError(null);
//     console.log('Saving product:', currentProduct); 
//     try {
//       const response = await axios.post('http://localhost/project/updateproduct.php', currentProduct, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       console.log('Response:', response.data); 
//       if (response.data.success) {
//         fetchProducts();
//         setShowModal(false);
//       } else {
//         setError(response.data.message || 'Error updating product. Please try again later.');
//       }
//     } catch (error) {
//       setError('Error updating product. Please try again later.');
//       console.error('Error updating product:', error.response || error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleReset = () => {
//     setCurrentProduct(originalProduct);
//   };

//   const containerStyle = {
//     minHeight: '100vh',
//     padding: '20px',
//     backgroundImage: 'url("https://watermark.lovepik.com/photo/40042/1596.jpg_wh1200.jpg")',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   };

//   const contentStyle = {
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     padding: '20px',
//     maxWidth: '1200px',
//     width: '100%',
//   };

//   const headerStyle = {
//     textAlign: 'center',
//     marginBottom: '20px',
//     color: '#343a40',
//   };

//   const tableStyle = {
//     backgroundColor: '#ffffff',
//   };

//   const buttonContainerStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//   };

//   const deleteButtonStyle = {
//     backgroundColor: '#dc3545',
//     borderColor: '#dc3545',
//     color: '#ffffff',
//     fontSize: '14px',
//     marginRight: '10px',
//   };

//   const updateButtonStyle = {
//     backgroundColor: '#007bff',
//     borderColor: '#007bff',
//     color: '#ffffff',
//     fontSize: '14px',
//   };

//   const tableHeaderStyle = {
//     textAlign: 'center',
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={contentStyle}>
//         <h2 style={headerStyle}>Manage Products</h2>
//         {loading && <p>Loading...</p>}
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         <Table striped bordered hover style={tableStyle}>
//           <thead>
//             <tr>
//               <th style={tableHeaderStyle}>ID</th>
//               <th style={tableHeaderStyle}>Name</th>
//               <th style={tableHeaderStyle}>Price</th>
//               <th style={tableHeaderStyle}>Category Id</th>
//               <th style={tableHeaderStyle}>Image</th>
//               <th style={tableHeaderStyle}>Description</th>
//               <th style={tableHeaderStyle}>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((product) => (
//               <tr key={product.p_id}>
//                 <td>{product.p_id}</td>
//                 <td>{product.p_name}</td>
//                 <td>{product.p_price}</td>
//                 <td>{product.p_c_id}</td>
//                 <td>
//                   <img 
//                     src={product.p_image} 
//                     alt={product.p_name} 
//                     style={{ width: '40px', height: '40px', objectFit: 'cover' }} 
//                   />
//                 </td>
//                 <td>{product.p_description}</td>
//                 <td style={buttonContainerStyle}>
//                   <button 
//                     style={deleteButtonStyle} 
//                     className="btn btn-danger btn-sm" 
//                     onClick={() => handleDeleteProduct(product.p_id)}
//                   >
//                     <FontAwesomeIcon icon={faTrashAlt} />
//                   </button>
//                   <button 
//                     style={updateButtonStyle} 
//                     className="btn btn-primary btn-sm" 
//                     onClick={() => handleUpdateProduct(product)}
//                   >
//                     <FontAwesomeIcon icon={faEdit} />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>

//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Product</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formProductName">
//               <Form.Label>Name</Form.Label>
//               <Form.Control 
//                 type="text" 
//                 value={currentProduct.p_name} 
//                 onChange={(e) => setCurrentProduct({ ...currentProduct, p_name: e.target.value })}
//               />
//             </Form.Group>
//             <Form.Group controlId="formProductPrice">
//               <Form.Label>Price</Form.Label>
//               <Form.Control 
//                 type="number" 
//                 value={currentProduct.p_price} 
//                 onChange={(e) => setCurrentProduct({ ...currentProduct, p_price: e.target.value })}
//               />
//             </Form.Group>
//             <Form.Group controlId="formProductCategoryId">
//               <Form.Label>Category ID</Form.Label>
//               <Form.Control 
//                 type="text" 
//                 value={currentProduct.p_c_id} 
//                 onChange={(e) => setCurrentProduct({ ...currentProduct, p_c_id: e.target.value })}
//               />
//             </Form.Group>
//             <Form.Group controlId="formProductImage">
//               <Form.Label>Image URL</Form.Label>
//               <Form.Control 
//                 type="text" 
//                 value={currentProduct.p_image} 
//                 onChange={(e) => setCurrentProduct({ ...currentProduct, p_image: e.target.value })}
//               />
//             </Form.Group>
//             <Form.Group controlId="formProductDescription">
//               <Form.Label>Description</Form.Label>
//               <Form.Control 
//                 type="text" 
//                 value={currentProduct.p_description} 
//                 onChange={(e) => setCurrentProduct({ ...currentProduct, p_description: e.target.value })}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="warning" onClick={handleReset}>
//             Reset
//           </Button>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSaveChanges}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default ManageProducts;


// ---------------------------------

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Table, Modal, Button, Form } from 'react-bootstrap';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({
    p_id: '',
    p_name: '',
    p_price: '',
    p_c_id: '',
    p_image: '',
    p_description: '',
  });
  const [originalProduct, setOriginalProduct] = useState({});

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost/project/w6.php');
      if (Array.isArray(response.data)) {
        setProducts(response.data);
      } else {
        console.error('Invalid data structure returned from API:', response.data);
      }
    } catch (error) {
      setError('Error fetching products. Please try again later.');
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (productId) => {
    setLoading(true);
    try {
      const response = await axios.delete('http://localhost/project/deleteproduct.php', {
        data: { p_id: productId }
      });
      if (response.data.success) {
        fetchProducts(); 
      } else {
        setError(response.data.message || 'Error deleting product. Please try again later.');
      }
    } catch (error) {
      setError('Error deleting product. Please try again later.');
      console.error('Error deleting product:', error.response || error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProduct = (product) => {
    setCurrentProduct(product);
    setOriginalProduct(product);
    setShowModal(true);
  };

  const handleSaveChanges = async () => {
    setLoading(true);
    setError(null);
    console.log('Saving product:', currentProduct);

    try {
      const response = await axios.post(
        'http://localhost/project/updateproduct.php',
        JSON.stringify(currentProduct),  
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Response:', response.data);

      if (response.data.success) {
        fetchProducts();
        setShowModal(false);
      } else {
        setError(response.data.message || 'Error updating product. Please try again later.');
      }
    } catch (error) {
      setError('Error updating product. Please try again later.');
      console.error('Error updating product:', error.response?.data || error);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setCurrentProduct(originalProduct);
  };

  const containerStyle = {
    minHeight: '100vh',
    padding: '20px',
    backgroundImage: 'url("https://watermark.lovepik.com/photo/40042/1596.jpg_wh1200.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const contentStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    maxWidth: '1200px',
    width: '100%',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#343a40',
  };

  const tableStyle = {
    backgroundColor: '#ffffff',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const deleteButtonStyle = {
    backgroundColor: '#dc3545',
    borderColor: '#dc3545',
    color: '#ffffff',
    fontSize: '14px',
    marginRight: '10px',
  };

  const updateButtonStyle = {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    color: '#ffffff',
    fontSize: '14px',
  };

  const tableHeaderStyle = {
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h2 style={headerStyle}>Manage Products</h2>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Table striped bordered hover style={tableStyle}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>ID</th>
              <th style={tableHeaderStyle}>Name</th>
              <th style={tableHeaderStyle}>Price</th>
              <th style={tableHeaderStyle}>Category Id</th>
              <th style={tableHeaderStyle}>Image</th>
              <th style={tableHeaderStyle}>Description</th>
              <th style={tableHeaderStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.p_id}>
                <td>{product.p_id}</td>
                <td>{product.p_name}</td>
                <td>{product.p_price}</td>
                <td>{product.p_c_id}</td>
                <td>
                  <img 
                    src={product.p_image} 
                    alt={product.p_name} 
                    style={{ width: '40px', height: '40px', objectFit: 'cover' }} 
                  />
                </td>
                <td>{product.p_description}</td>
                <td style={buttonContainerStyle}>
                  <button 
                    style={deleteButtonStyle} 
                    className="btn btn-danger btn-sm" 
                    onClick={() => handleDeleteProduct(product.p_id)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                  <button 
                    style={updateButtonStyle} 
                    className="btn btn-primary btn-sm" 
                    onClick={() => handleUpdateProduct(product)}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formProductName">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                value={currentProduct.p_name} 
                onChange={(e) => setCurrentProduct({ ...currentProduct, p_name: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formProductPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control 
                type="number" 
                value={currentProduct.p_price} 
                onChange={(e) => setCurrentProduct({ ...currentProduct, p_price: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formProductCategoryId">
              <Form.Label>Category ID</Form.Label>
              <Form.Control 
                type="text" 
                value={currentProduct.p_c_id} 
                onChange={(e) => setCurrentProduct({ ...currentProduct, p_c_id: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formProductImage">
              <Form.Label>Image URL</Form.Label>
              <Form.Control 
                type="text" 
                value={currentProduct.p_image} 
                onChange={(e) => setCurrentProduct({ ...currentProduct, p_image: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formProductDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control 
                type="text" 
                value={currentProduct.p_description} 
                onChange={(e) => setCurrentProduct({ ...currentProduct, p_description: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleReset}>
            Reset
          </Button>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ManageProducts;
