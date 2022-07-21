import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';
import Login from '../Login/Login';
import { toast } from 'react-toastify';
const Dashboard = () => {
    const navigate = useNavigate();
    const token = authService.getCurrentUser();
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://51.195.148.112/api/admin/product-type/', {
            method: "GET",
            headers: { authorization: `Bearer ${token}` }
        })
            .then(res =>
                res.json()
            )
            .then(data => {
                if (data.success) {
                    setProducts(data.data)

                }
                else {
                    toast.error(data.message)
                    authService.logout();
                    navigate('/login')
                    // console.log('Logout')

                }
            })
    }, [token, navigate])

    console.log(products)

    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
};

export default Dashboard;