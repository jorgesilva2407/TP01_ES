import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import UserAuthenticationPage from "./UserAuthenticationPage";

const Home = () => {
  // State to store the best-selling products
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  

  // Effect to load the best-selling products
  useEffect(() => {
    // Load best-selling products from the API
    fetch("/api/products/best-sellers")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleSearch = () => {
    // Filter the products based on the search query
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Update the products state with the filtered list
    setProducts(filteredProducts);
  };

  const clearSearch = () => {
    setSearchQuery('');
    // Fetch the initial product list from the API again
    fetch("/api/products/best-sellers")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  return (
    <div>
      <h1>FastTrade</h1>

      <Navbar>
        <Nav>
          <li><a href="#">Home</a></li>
          <li><a href="#">Browse</a></li>
          <li><a href="#">Sell</a></li>
          <li><a href="#">Cart</a></li>
          <li><a href="#">Profile</a></li>

          {/* Searchbox */}
          <div className="search-box">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            
            <button onClick={clearSearch}>Clear</button>
            <button onClick={handleSearch}>Search</button>
          </div>
          
        </Nav>
      </Navbar>

      <h2>Products</h2>
      <Container>
        <Row>
          {products.map((product) => (
            <Col key={product.id} sm="6" md="4">
              <Card>
                <CardImg src={product.image} alt={product.name} />
                <CardBody>
                  <CardTitle>{product.name}</CardTitle>
                  <p>{product.description}</p>
                  <Button href="#">Learn More</Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <footer>
        <p>&copy; 2023</p>
      </footer>
    </div>
  );
};

export default Home;
