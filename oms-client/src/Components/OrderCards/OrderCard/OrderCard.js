import React from 'react'
import ProductCard from '../ProductCard/ProductCard';
import './ordercard.css';

function OrderCard() {
    return (
        <div className='container_outer'>
            <div className="container inner_container_in">
                <div className='order'>
                    <div className='order-details'>
                        <h4>Order ID: 334902461</h4>
                        <p><small>Order date:</small> Feb 16, 2022 | <strong>Estimated delivery: May 14, 2022</strong></p>
                    </div>
                    <hr />
                    <div className='products'>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                    <hr />
                    <div className='address'>
                        <div className='row'>
                            <div className='col payment'>
                                <p className='p-t'>Payment Mode</p>
                                <p className='p-m-o'>Cash On delivery</p>
                            </div>
                            <div className='col delivery-adress'>
                                <p className='p-t'>Delivery</p>
                                <small>Address</small>
                                <p className='d-a'>Niger A-215, Omaxe Riviera, rudrapur, Uttarakhand</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderCard