import React from 'react';

export default function Product({ price, path }) {
  return (
    <div className="card shadow-sm p-3 mb-4 text-center">
      <img src={path} alt="product" className="card-img-top img-fluid" style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title">Price: {price || "₹0"}</h5>
        <button className="btn btn-dark">Add to Cart</button>
      </div>
    </div>
  );
}
