import React from 'react';
import ProductQuantity from './ProductQuantity';

function ProductRow({ company, product, price }) {
  return (
    <tr>
      <td>{company}</td>
      <td>{product}</td>
      <td>{price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
      <td><ProductQuantity /></td>
    </tr>
  );
}

export default ProductRow;
