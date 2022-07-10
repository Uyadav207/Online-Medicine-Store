import React from 'react'
import CheckoutCard from '../../Components/CheckoutCards/checkoutcard/CheckoutCard';
import CheckoutcartEmpty from '../../Components/CheckoutCards/checkoutcartEmpty/CheckoutcartEmpty'

function Checkout() {
  const isCartEmpty = false;
  
  return (
    <div>
      {
          (isCartEmpty) ? <CheckoutcartEmpty /> : <CheckoutCard />
      }
    </div>
  )
}

export default Checkout;