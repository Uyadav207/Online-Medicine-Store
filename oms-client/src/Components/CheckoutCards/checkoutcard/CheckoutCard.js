import React from 'react';
import './checkoutcard.css'
import CheckoutcardBill from '../checkoutcardbill/CheckoutcardBill';
import CheckoutcardProduct from '../checkoutcardProduct/CheckoutcardProduct';

function CheckoutCard() {
    return (
        <div className='container_outer'>
            <div className='container inner_container'>
                <div className='cart_box'>
                    <div className='row'>
                        <div className='col'>
                            <div className='continue_shopping'>
                                <p> {"<--"} Continue Shopping</p>
                                <hr />
                            </div>
                            <CheckoutcardProduct />
                            <CheckoutcardProduct />
                            <CheckoutcardProduct />
                        </div>
                        <CheckoutcardBill />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutCard;