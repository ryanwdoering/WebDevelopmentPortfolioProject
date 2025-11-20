import {React} from 'react';
import ProductRow from '../components/ProductRow';

function OrderPage() {
  const products = [
    { id: 'ball', company: 'AGYM', product: 'Spinning Cat Scratcher Ball', price: 52.99 },
    { id: 'pool', company: 'Jasonwell', product: 'Foldable Dog Pool', price: 27.25 },
    { id: 'window', company: 'Expawlorer', product: 'Dog Fence Window', price: 30.50 },
    { id: 'backpack', company: 'Lollimeow', product: 'Capsule Pet Travel Backpack', price: 59.00 },
    { id: 'wheel', company: 'Droold\'d', product: 'Cat Hampster Wheel', price: 349.75 },
  ];

  return (
    <>
      <h2>Orders</h2>
      <p>On this page, you can select quantity for hypothetical products </p>
      <article>
        <form action="/orders" method="post">
          <table>
            <caption>Change quantity scalers</caption>
            <thead>
              <tr>
                <th>Company</th>
                <th>Product</th>
                <th>Price ($)</th>
                <th></th> 
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <ProductRow
                  key={product.id}
                  company={product.company}
                  product={product.product}
                  price={product.price}
                />
              ))}
            </tbody>
          </table>
        </form>
      </article>
    </>
  );
}

export default OrderPage;