import React, { useState } from "react";
import { Form, Input, Button } from "reactstrap";

const UserAuthenticationPage = ({ onLogin }) => { // Pass onLogin as a prop
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Simulate a successful login (replace with actual authentication logic)
    // If the login is successful, call onLogin   

    if (email === "admin" && password === "admin") {
        // If the login is successful, call onLogin to set userIsLoggedIn to true
        onLogin();
    } else {
        // If the login fails, handle the error (e.g., show an error message)
        
        alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <Form>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button onClick={handleLogin}>Login</Button>
    </Form>
  );
};

export default UserAuthenticationPage;
