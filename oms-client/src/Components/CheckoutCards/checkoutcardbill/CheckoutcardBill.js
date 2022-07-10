import React from 'react'
import './checkoutcardbill.css'

function CheckoutcardBill() {
    return (
        <div className='col container_bill'>
            <div className='title'>
                <p>Billing Details</p>
            </div>
            <div className='container_subtotal_inner'>
                <p className='subtotal'>
                    <small>Subtotal</small>
                    <strong>$ 4000</strong>
                </p>
                <p className='shipping_charge'>
                    <small>Shipping</small>
                    <strong>$ 4000</strong>
                </p>
                <p className='total'>
                    <small>Total (tax Incl.)</small>
                    <strong>$ 3000.00</strong>
                </p>
                <div className='place-order'>
                    <p>
                        <small>$ 4000</small>
                        <small>Checkout</small>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CheckoutcardBill