import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const loginHandler = (event) => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const loginInfo = { email, password }


        fetch('http://51.195.148.112/api/admin/auth/login', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(loginInfo)
        })
            .then(res => res.json())
            .then(data => console.log(data))
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