import React from 'react';

const ProductRow = ({ product }) => {
    const { created_at, id, name, updated_at } = product;
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{created_at}</td>
            <td>{updated_at}</td>
        </tr>
    );
};

export default ProductRow;