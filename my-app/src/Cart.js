import React, { useContext, useState } from 'react';
import Navbar1 from './Navbar1';
import { CartContext } from './CartContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [upiId, setUPIId] = useState('');
  const [upiIdError, setUpiIdError] = useState(false);
  const [showUpiIdWarning, setShowUpiIdWarning] = useState(false);

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState(null); 
  const [cvc, setCVC] = useState('');
  const [cardError, setCardError] = useState({
    cardNumberError: '',
    expiryDateError: '',
    cvcError: ''
  });

  // User information states
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [nameError, setNameError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const navigate = useNavigate();

  const calculateTotal = () => {
    const subtotal = cart.reduce((total, item) => total + parseFloat(item.p_price.replace(/[₹, INR]/g, '')), 0);
    const deliveryCharge = subtotal < 700 ? 60 : 0;
    return (subtotal + deliveryCharge).toFixed(2);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
    setUpiIdError(false);
    setCardError({
      cardNumberError: '',
      expiryDateError: '',
      cvcError: ''
    });
    setShowUpiIdWarning(false);
  };

  const handleUPIIdChange = (event) => {
    const { value } = event.target;
    setUPIId(value);
    if (/^[a-zA-Z]{6,}@[yY][bB][lL]$/.test(value)) {
      setUpiIdError(false);
      setShowUpiIdWarning(false); 
    } else {
      setUpiIdError(true);
    }
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (date) => {
    setExpiryDate(date);
  };

  const handleCVCChange = (event) => {
    setCVC(event.target.value);
  };

  const validateCardDetails = () => {
    let valid = true;
    const errors = {
      cardNumberError: '',
      expiryDateError: '',
      cvcError: ''
    };

    if (cardNumber.trim().length === 0) {
      errors.cardNumberError = 'Card number is required.';
      valid = false;
    }

    if (!expiryDate || expiryDate < new Date()) {
      errors.expiryDateError = 'Expiry date is required and must be a future date.';
      valid = false;
    }

    if (!/^\d{3,4}$/.test(cvc)) {
      errors.cvcError = 'CVC should be 3 or 4 digits.';
      valid = false;
    }

    setCardError(errors);
    return valid;
  };

  const validateUserInfo = () => {
    let valid = true;
    setNameError('');
    setAddressError('');
    setPhoneNumberError('');

    if (name.trim().length === 0) {
      setNameError('Name is required.');
      valid = false;
    }

    if (address.trim().length === 0) {
      setAddressError('Address is required.');
      valid = false;
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      setPhoneNumberError('Phone number must be 10 digits.');
      valid = false;
    }

    return valid;
  };

  // const handleRemoveFromCart = (itemId) => {
  //   removeFromCart(itemId);
  // };

  const handleBuyNow = async () => {
    if (paymentMethod === 'google' && upiIdError) {
      setShowUpiIdWarning(true);
      return;
    } else if (paymentMethod === 'card') {
      const isValid = validateCardDetails();
      if (!isValid) return;
    }

    const isValidUserInfo = validateUserInfo();
    if (!isValidUserInfo) return;

    const orderData = {
      products: cart.map(item => ({
        id: item.id,
        name: item.p_name,
        price: item.p_price,
      })),
      total: calculateTotal(),
      paymentMethod,
      upiId: paymentMethod === 'google' ? upiId : undefined,
      cardNumber: paymentMethod === 'card' ? cardNumber : undefined,
      expiryDate: paymentMethod === 'card' ? expiryDate : undefined,
      cvc: paymentMethod === 'card' ? cvc : undefined,
      user: {
        name,
        address,
        phoneNumber,
      },
    };

    try {
      await axios.post('http://localhost/project/orders.php', orderData);
      navigate('/success');
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  const styles = {
    container: {
      backgroundImage: 'url(https://png.pngtree.com/thumb_back/fw800/background/20230718/pngtree-exciting-online-shopping-experience-3d-illustration-of-a-shopping-cart-with-image_3912347.jpg)', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '90vh',
      paddingTop: '3rem',
    },
    card: {
      padding: '2rem',
      borderRadius: '10px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      marginBottom: '2rem',
    },
    title: {
      textAlign: 'center',
      marginBottom: '1rem',
      color: '#343a40',
    },
    btnPrimary: {
      backgroundColor: '#343a40',
      borderColor: '#343a40',
    },
    btnDefault: {
      borderColor: '#000',
      color: '#000',
    },
    summaryItem: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '1rem',
    },
    summaryTitle: {
      marginBottom: '1rem',
      color: '#343a40',
    },
    img: {
      maxWidth: '100px',
      maxHeight: '100px',
      borderRadius: '5px',
    },
    formControl: {
      marginBottom: '1rem',
    },
  };

  return (
    <>
      <Navbar1 />
      <div style={styles.container}>
        <div className="container mt-5">
          <h1 style={styles.title}>Shopping Cart</h1>
          {cart.length === 0 ? (
            <p className="text-center">Your cart is empty.</p>
          ) : (
            <div className="row">
              <div className="col-md-8">
                <div className="items">
                  {cart.map(item => (
                    <div key={item.id} className="product mb-3 p-3 border rounded" style={styles.card}>
                      <div className="row align-items-center">
                        <div className="col-md-3">
                          <img src={item.p_image} alt={item.p_name} className="img-fluid" style={styles.img} />
                        </div>
                        <div className="col-md-7">
                          <div className="info">
                            <h5 className="mb-1">{item.p_name}</h5>
                            <div className="d-flex align-items-center justify-content-between">
                              <span className="text-primary font-weight-bold">{item.category}</span>
                              <span className="text-primary font-weight-bold">₹{item.p_price}</span>
                              {/* <button className="btn btn-sm btn-danger ml-2" onClick={() => handleRemoveFromCart(item.id)}>Remove</button> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-md-4">
                <div className="summary mb-3 p-3 border rounded" style={styles.card}>
                  <h3 style={styles.summaryTitle}>Summary</h3>
                  <div style={styles.summaryItem}>
                    <span className="text">Subtotal</span>
                    <span className="price">₹ {calculateTotal()}</span>
                  </div>
                  <div style={styles.summaryItem}>
                    <span className="text">Delivery Charge</span>
                    <span className="price">{calculateTotal() < 700 ? '₹60' : '₹0'}</span>
                  </div>
                  <div style={styles.summaryItem}>
                    <span className="text font-weight-bold">Total</span>
                    <span className="price font-weight-bold">₹ {calculateTotal()}</span>
                  </div>
                  <hr />
                  <div className="form-group">
                    <label htmlFor="paymentMethod">Payment Method:</label>
                    <select id="paymentMethod" className="form-control" value={paymentMethod} onChange={handlePaymentMethodChange}>
                      <option value="cash">Cash on Delivery</option>
                      <option value="google">Google Pay</option>
                      <option value="card">Credit/Debit Card</option>
                    </select>
                  </div>
                  {paymentMethod === 'google' && (
                    <div className="form-group" style={styles.formControl}>
                      <label htmlFor="upiId">UPI ID:</label>
                      <input
                        id="upiId"
                        type="text"
                        className={`form-control ${upiIdError ? 'is-invalid' : ''}`}
                        placeholder="Enter your UPI ID"
                        value={upiId}
                        onChange={handleUPIIdChange}
                      />
                      {upiIdError && <div className="invalid-feedback">UPI ID format should be like 'abcdef@ybl'. Example: abcdef@ybl</div>}
                      {showUpiIdWarning && !upiIdError && <div className="text-danger">Please enter a valid UPI ID.</div>}
                    </div>
                  )}
                  {paymentMethod === 'card' && (
                    <div className="form-group" style={styles.formControl}>
                      <label htmlFor="cardNumber">Card Number:</label>
                      <input
                        id="cardNumber"
                        type="text"
                        className={`form-control ${cardError.cardNumberError ? 'is-invalid' : ''}`}
                        placeholder="Enter your card number"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                      />
                      {cardError.cardNumberError && <div className="invalid-feedback">{cardError.cardNumberError}</div>}
                      <br />
                      <label htmlFor="expiryDate">Expiry Date:</label>
                      <DatePicker
                        selected={expiryDate}
                        onChange={handleExpiryDateChange}
                        dateFormat="MM/yy"
                        showMonthYearPicker
                        className={`form-control ${cardError.expiryDateError ? 'is-invalid' : ''}`}
                        placeholderText="MM/YY"
                      />
                      {cardError.expiryDateError && <div className="invalid-feedback">{cardError.expiryDateError}</div>}
                      <br />
                      <label htmlFor="cvc">CVC:</label>
                      <input
                        id="cvc"
                        type="text"
                        className={`form-control ${cardError.cvcError ? 'is-invalid' : ''}`}
                        placeholder="Enter CVC"
                        value={cvc}
                        onChange={handleCVCChange}
                      />
                      {cardError.cvcError && <div className="invalid-feedback">{cardError.cvcError}</div>}
                    </div>
                  )}
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      id="name"
                      type="text"
                      className={`form-control ${nameError ? 'is-invalid' : ''}`}
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {nameError && <div className="invalid-feedback">{nameError}</div>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input
                      id="address"
                      type="text"
                      className={`form-control ${addressError ? 'is-invalid' : ''}`}
                      placeholder="Enter your address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    {addressError && <div className="invalid-feedback">{addressError}</div>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                      id="phoneNumber"
                      type="text"
                      className={`form-control ${phoneNumberError ? 'is-invalid' : ''}`}
                      placeholder="Enter your phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    {phoneNumberError && <div className="invalid-feedback">{phoneNumberError}</div>}
                  </div>
                  <button className="btn btn-primary btn-lg btn-block" style={styles.btnPrimary} onClick={handleBuyNow}>Order Now</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;
