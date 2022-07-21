import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import {toast } from 'react-toastify';
import axios from 'axios';
import authService from '../../services/authService';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate()

    const loginHandler = async (event) => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const loginInfo = { email, password };

        try {
            await authService.login(email, password).then(
                () => {
                    navigate("/");
                },
                (error) => {

                    toast.error(error.message)
                    // console.log(error);
                }
            );
        } catch (err) {
            console.log(err);
        }


        // axios.post('http://51.195.148.112/api/admin/auth/login', loginInfo)
        //     .then(res => {
        //         //get token from response
        //         const token = res?.data?.token;
        //         const user = res?.data?.admin?.name;

        //         saveToken(user, token)
        //         navigate('/')





        //     })
        //     .catch(err => console.log(err));


        // post('/login', loginInfo)
        //     .then(res => {
        //         const token = res?.data?.token;
        //         const user = res?.data?.admin?.name;


        //     })



    }

    return (
        <div className='container overflow-hidden'>

            <div className='w-50 mx-auto mt-5'>
                <h3 className='my-4 fs-3'>Login</h3>
                <Form onSubmit={loginHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                </Form>
            </div>

        </div>
    );
};

export default Login;