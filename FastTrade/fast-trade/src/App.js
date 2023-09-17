import { useState } from 'react';
import './App.css';
import Home from "./components/Home";
import UserAuthenticationPage from './components/UserAuthenticationPage';

function App() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "This is the first product.",
      image: "https://example.com/product1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      description: "This is the second product.",
      image: "https://example.com/product2.jpg",
    },
  ];

  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false); // Define userIsLoggedIn state

  const handleLogin = () => {
    // You can implement your authentication logic here and set userIsLoggedIn to true if login is successful
    // For now, we'll simulate a successful login
    setUserIsLoggedIn(true);
  };

  return (
    <div className="App">
      <div>
        {userIsLoggedIn ? (
          <Home />
        ) : (
          <UserAuthenticationPage onLogin={handleLogin} /> // Pass handleLogin as a prop
        )}
      </div>
    </div>
  );
}

export default App;
