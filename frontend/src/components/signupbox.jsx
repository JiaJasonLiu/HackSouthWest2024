import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
 
function SignUpBox() {
 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const configuration = {
            method: "post",
            url: "http://localhost:3001/register",
            data: {
              email,
              password,
            },
        };
        axios(configuration)
        .then((result) => {
            setRegister(true);
            navigate("/");
        })
        .catch((error) => {
            error = new Error();
            alert("Email already in use!");
        });
    };
 
    return (
        <div>
            <Form onSubmit={(e)=>handleSubmit(e)}>
                <h2 style = {{color:"black", padding:"30px"}}>Register</h2>
                
                <Form.Group controlId="formBasicEmail2">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
                {register ? (
                <p className="text-success">You Are Registered Successfully</p>
                ) : (
                <p className="text-danger">You Are Not Registered</p>
                )}
            </Form>
        </div>
    );
}
  
export default SignUpBox;