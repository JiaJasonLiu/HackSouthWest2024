// import '../index.css';
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import {  useState } from "react";
import { useNavigate } from 'react-router-dom';

import Cookies from "universal-cookie";
const cookies = new Cookies();

function LoginBox() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);
    const navigate = useNavigate();
 
    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();

        const configuration = {
            method: "post",
            url: "http://localhost:3001/login",
            data: {
              email,
              password,
            },
        };
        axios(configuration)
        .then((result) => {
            setLogin(true);
            navigate("/");
            cookies.set("TOKEN", result.data.token, {
                path: "/",
            });
        })
        .catch((error) => {
            error = new Error();
            alert("Email or Password incorrect!");
        });
    }

    // PRESSING LOGIN BUTTON CURRENTLY DOES NOT CHANGE NAME DISPLAYED IN HEADER

    return (
        <div>
            <Form onSubmit={(e)=>handleSubmit(e)}>
                <h2 style = {{color:"black", padding:"30px"}}>Login</h2>
                <Form.Group controlId="formBasicEmail1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email" />
                </Form.Group>

                {/* password */}
                <Form.Group controlId="formBasicPassword1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    name="password"
                    value={password}
                    minLength="8"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" />
                </Form.Group>

                {/* submit button */}
                <Button variant="primary" type="submit">
                    Sign In
                </Button>
                {login ? (
                <p className="text-success">You Are Logged in Successfully</p>
                ) : (
                <p className="text-danger">You Are Not Logged in</p>
                )}
            </Form>
        </div>
    );
}
  
export default LoginBox;