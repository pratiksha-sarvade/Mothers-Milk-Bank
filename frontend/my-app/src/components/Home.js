import React from 'react';
import Product from './Product';

export default function Home() {
  const productList = [
  
  ];

  return (
    <div className='container'>
      <h1>Products</h1>
      <div className='row'>
        {productList.map((product, index) => (
          <div className='col-xl-3' key={index}>
            <Product price={product.price} path={product.path} />
          </div>
        ))}
      </div>
    </div>
  );
}
