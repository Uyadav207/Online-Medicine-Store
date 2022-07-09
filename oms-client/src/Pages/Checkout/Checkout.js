import React from 'react'
import CheckoutcartEmpty from '../../Components/CheckoutCards/checkoutcartEmpty/CheckoutcartEmpty'

function Checkout() {
  const isCartEmpty = true;
  
  return (
    <div>
      {
          (isCartEmpty) ? <CheckoutcartEmpty /> : <h1>Cart</h1>
      }
    </div>
  )
}

export default Checkout;