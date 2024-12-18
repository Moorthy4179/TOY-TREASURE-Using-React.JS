import React, { useState, useEffect, useContext, useRef } from "react";
import axios from 'axios';
import styled from 'styled-components';
import Navbar1 from "./Navbar1";
import Footer from "./footer"; 
import { CartContext } from "./CartContext";
const Container = styled.div`
  margin-top: 2rem;
`;
const Title = styled.h2`
  text-align: center;
`;
const Card = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  max-width: 300px; 
  margin: 0 auto;
  margin-bottom: 2rem;
`;
const CardImg = styled.img`
  width: 100%;
  height: 200px;
`;
const CardBody = styled.div`
  padding: 1.5rem;
`;
const CardTitle = styled.h5`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;
const CardText = styled.p`
  margin-bottom: 1rem;
`;
const Button = styled.button`
  margin-top: auto;
  display: block;
  width: 100%;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #ffffff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;
const HomeContainer = styled.div`
  background-image: url('https://s1.dmcdn.net/v/QQvEm1aiHBinoCqP8/x1080'); 
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;
const HomeContent = styled.div`
  text-align: center;
  background: rgba(0, 0, 0, 0.6); 
  padding: 20px;
  border-radius: 10px;
`;
const HomeTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;
const HomeSubtitle = styled.p`
  font-size: 1.5rem;
  margin-top: 10px;
`;
const HomeButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1.2rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;
const FixedNavbar = styled(Navbar1)`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;
const Home = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext); 
  useEffect(() => {
    const p_ids = [7, 8, 30];
    axios
      .get(`http://localhost/project/trending.php?p_id=${p_ids.join(',')}`)
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);
  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.p_name} has been added to your cart.`);
  };
  const trendingRef = useRef(null);
  const scrollToTrending = () => {
    trendingRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <FixedNavbar />
      <HomeContainer>
        <HomeContent>
          <HomeTitle>Welcome to ToyTreasure</HomeTitle>
          <HomeSubtitle>Discover a world of fun and learning with our diverse range of toys.</HomeSubtitle>
          <HomeButton onClick={scrollToTrending}>Shop Now</HomeButton>
        </HomeContent>
      </HomeContainer>
      <br></br>
      <div ref={trendingRef}>
        <Title>Trending Products</Title>
        <Container className="container-fluid">
          <div className="container mt-5">
            <div className="row justify-content-center">
              {products.map((product) => (
                <div key={product.id} className="col-md-4 mb-4">
                  <Card>
                    <CardImg src={product.p_image} alt={product.alt} />
                    <CardBody>
                      <CardTitle>{product.p_name}</CardTitle>
                      <CardText>₹{product.p_price}</CardText>
                      <Button onClick={() => handleAddToCart(product)}>Buy Now</Button>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};
export default Home;
