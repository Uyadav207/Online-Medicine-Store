import React from 'react'
import './productcard.css';

function ProductCard({id,productName,price, quantity, productExp, productMfd, image, productDesc}) {
  return (
    <div className='outer-product-container'>
        <div className='combine-image-details'>
        <div className='product-image'>
            <p><img style={{ borderRadius: 10 }} src='https://static.remove.bg/remove-bg-web/5c20d2ecc9ddb1b6c85540a333ec65e2c616dbbd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg' width={60} height={60} alt="..."/></p>
        </div>
        <div className='product-details'>
            <p className='p-d-n'>{productName}</p>
            <p className='p-d-d'>{productDesc}<strong> | mfd: {new Date(productMfd).toDateString()}</strong><strong> | exp: {new Date(productExp).toDateString()}</strong></p>
        </div>
        </div>
        <div className='product-price-quantity'>
            <strong>₹ {price}</strong>
            <p>Qty: {quantity}</p>
        </div>
    </div> 
  )
}

export default ProductCard