import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';
import { toast } from 'react-toastify';
import Table from 'react-bootstrap/Table';
import ProductRow from './ProductRow/ProductRow';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
const Dashboard = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState(authService.getCurrentUser())
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
                    if (token) {
                        toast.error(data.message)
                    }

                    authService.logout();
                    navigate('/login')
                    // console.log('Logout')

                }
            })
    }, [token, navigate])


    return (
        <div className='container overflow-hidden' >
            <div className='mt-3'>
                <h1 className='my-4'>Dashboard</h1>

                {
                    products.length > 0 ? <>
                        <div>
                            <Table striped bordered hover responsive size="sm">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Created At</th>
                                        <th>Updated At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map(product => <ProductRow product={product} key={product?.id}></ProductRow>)
                                    }
                                </tbody>
                            </Table>

                        </div>
                    </> : <LoadingSpinner></LoadingSpinner>
                }
            </div>

        </div>
    );
};

export default Dashboard;