import React from 'react'
import ProductCard from '../ProductCard/ProductCard';
import './ordercard.css';
import { useContext ,useState, useEffect} from 'react';
import {OrderHome, DefaultOrder} from "../../../App";

function OrderCard() {
    const [orderHome, setOrderHome] = useContext(OrderHome);
    const [defaultOrder, setDefaultOrder] = useContext(DefaultOrder);
    const [delivery, setDelivery] = useState("");

    const addDates = (d,days) => {
        var date = new Date(d);
        date.setDate(date.getDate() + days);
        return date.toDateString();
    }
    useEffect(() => {
        // if(orderHome.length > 0){
            setDelivery(addDates(defaultOrder.createdAt,7));
        // }
    },[defaultOrder])
    // console.log(defaultOrder);
    return (
        <div className='container_outer'>
            <div className="container inner_container_in">
                <div className='order'>
                    <div className='order-details'>
                        <h4>Order ID: {defaultOrder.id}</h4>
                        <p><small>Order date:</small> {new Date(defaultOrder.createdAt).toDateString()} | <strong>Estimated delivery: {delivery}</strong></p>
                    </div>
                    <hr />
                    <div className='products'>
                        {defaultOrder.products && defaultOrder.products.map((product) => {
                            return <ProductCard {...product} />
                        })}
                        {/* <ProductCard /> */}
                        {/* <ProductCard /> */}
                        {/* <ProductCard /> */}
                        {/* <ProductCard /> */}
                        {/* <ProductCard /> */}
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