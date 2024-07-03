/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react';

// Import icons

const ProductCard = ({ product, color }) => {
  const [favorite, setFavorite] = useState(false);
  console.log(product);

  return (
    <>
      <div
        class='card'
        style={{
          width: '18rem',
          position: 'relative',
          height: '100%',
        }}>
        <span
          className='badge  position-absolute top-0 '
          style={{ backgroundColor: color }}>
          {product.productCategory}
        </span>

        <button className='position-absolute top-0 end-0 text-white btn'>
          <i
            className={favorite ? 'bi bi-heart-fill' : 'bi bi-heart'}
            onClick={() => setFavorite(!favorite)}></i>
        </button>

        <img
          src={`http://localhost:5000/products/${product.productImage}`}
          class='card-img-top'
          alt='...'
        />
        <div class='card-body'>
          <div className='d-flex justify-content-between pb-3'>
            <h5 class='card-title'>{product.productName}</h5>
            <p class='card-text text-danger '>NPR.{product.productPrice}</p>
          </div>

          <p class='card-text'>{product.productDescription.slice(0, 60)}</p>
          <a
            href='#'
            className='btn btn-outline-dark w-100'>
            View more
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
