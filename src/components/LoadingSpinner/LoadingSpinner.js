import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
const LoadingSpinner = () => {
    return (
        <div className='text-center'>
            <Spinner className='text-center' animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>

    );
};

export default LoadingSpinner;