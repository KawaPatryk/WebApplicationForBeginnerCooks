import React, {useState} from 'react';
import _ from 'lodash';
import { Form, Button, Row, Col} from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import Users from "../data/UsersStorage";

const LoginRegister = ({Users, addUserHandler, loginHandler}) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    const [redirectRender, setRedirectRender] = useState(false) 
    
    const handleRegister = () => {
        let currentUser = Users.filter(elem => {
            return elem.id === userName;
        });

        if(currentUser.length === 0) {
            addUserHandler(userName, password);
            alert("Registered successful!")
        } else alert('Username taken');
    }

    const handleLogin = () => {
        let currentUser = Users.filter(elem => {
            console.log(elem.id, userName, elem.password, password);
            return elem.id === userName && elem.password === password;
        })
        console.log(currentUser);
        if (currentUser.length === 1) {
            loginHandler(userName);
            setRedirectRender(true);
        } else alert('Wrong name or password');

    }

    return (
        <div>
            {redirectRender && <Redirect to="/recipes" />}
            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Login</Form.Label>
                    <Form.Control type="text" value={userName} onChange={e => setUserName(e.target.value)} placeholder="Enter username" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                        value={password} onChange={e => setPassword(e.target.value)}
                     />
                </Form.Group>
                <Row>
                    <Col>
                    <Button variant="success" 
                    onClick={() => {
                        handleRegister()
                    }}>
                    Register
                </Button>
                    </Col>
                    <Col>
                    <Button variant="primary" 
                        onClick={() => {
                            handleLogin(prevState => {
                                return [...prevState, ""]
                            })
                        }}>
                        Login
                    </Button>
                    </Col>
                </Row>
                
                
            </Form>

        </div>
    )
}

export default LoginRegister;