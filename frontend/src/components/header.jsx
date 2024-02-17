// import '../css/index.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useEffect, useState } from 'react';
import Cookies from "universal-cookie";
// import jwt_decode from "jwt-decode";

const cookies = new Cookies();

// HEADER BAR COMPONENT
// RENDERS A HEADER ATOP THE PAGE

function Header() {

  const [name, setName] = useState("Not Signed In");
  const [signIn, setSignIn] = useState("Sign In?");

  const token = cookies.get("TOKEN");

  useEffect(() => {
    if (token) {
      var decodedEmail = token.userEmail;
      setName("Signed in as: " + decodedEmail);
      setSignIn("Sign Out?");
    };
  }, [token]);

  const handleClick = event => {
    if (signIn === "Sign Out?") {
      cookies.remove("TOKEN", { path:"/" });
      window.location.href = "/";
      setName("Not Signed In");
      setSignIn("Sign In?");
    };
  };

  return (
    <Navbar sticky = "top" bg = 'light' variant = 'light'>
      <Container>
        <Navbar.Brand href="/">Asians++ Trading</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/stocks">Stocks</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style = {{paddingRight: "10px"}}>{name}</Navbar.Text>
          <Nav.Link onClick={handleClick} href="/loginSignUp">{signIn}</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;