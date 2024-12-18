import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const params = {
        name: name,
        price: parseFloat(price),
        description: description,
        image: image,
        category_id: parseInt(categoryId),
      };

      const queryString = new URLSearchParams(params).toString();
      const response = await axios.get(`http://localhost/project/product.php?${queryString}`);
      console.log(response.data);
      if (response.data.success) {
        setSuccessMessage('Product added successfully!');
        setName('');
        setPrice('');
        setDescription('');
        setImage('');
        setCategoryId('');
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.error('Error adding product:', error);
      setErrorMessage('Product added successfully!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (errorMessage) {
      alert(errorMessage);
      setTimeout(() => {
        navigate('/admin');
      }, 1000); 
    }
  }, [errorMessage, navigate]);

  return (
    <div
      style={{
        backgroundImage: "url('https://img.freepik.com/premium-photo/mockup-plastic-jar-white-cube-podium-with-ethereal-tea-tree-leaves-glass-divider-wall-stands-this-cosmetic-ad-banner-that-is-suitable-skin-soothing-night-skincare_76964-132102.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '500px',
          padding: '30px',
          border: '1px solid #ccc',
          borderRadius: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
          textAlign: 'center',
        }}
      >
        <h2 style={{ marginBottom: '20px', fontSize: '24px', color: '#333' }}>Add New Product</h2>
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {[
            { label: 'Product Name:', value: name, onChange: setName },
            { label: 'Product Price:', value: price, onChange: setPrice, type: 'text' },
            { label: 'Product Description:', value: description, onChange: setDescription },
            { label: 'Product Image URL:', value: image, onChange: setImage },
            { label: 'Product Category ID:', value: categoryId, onChange: setCategoryId, type: 'number' },
          ].map((field, index) => (
            <label key={index} style={{ marginBottom: '15px', fontWeight: 'bold', width: '100%' }}>
              {field.label}
              <input
                type={field.type || 'text'}
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                required
                style={{
                  padding: '10px',
                  marginBottom: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  fontSize: '16px',
                  width: 'calc(100% - 20px)',
                }}
              />
            </label>
          ))}
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '12px 25px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              width: '100%',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
          >
            {loading ? 'Adding...' : 'Add Product'}
          </button>
          {successMessage && <p style={{ color: '#4caf50', marginTop: '10px' }}>{successMessage}</p>}
          {errorMessage && <p style={{ color: '#f44336', marginTop: '10px' }}>{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
