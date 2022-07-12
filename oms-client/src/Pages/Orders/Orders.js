import React, { useContext } from 'react'
import OrderCard from '../../Components/OrderCards/OrderCard/OrderCard'
import Carousel from 'framer-motion-carousel';
import { OrderHome } from "../../App"
import OrdersEmpty from '../../Components/OrderCards/ordersEmpty/OrdersEmpty';

function Orders() {
  const [orderHome, setOrderHome] = useContext(OrderHome);

  return (
    <>
      {
        (!orderHome) ? <Carousel autoPlay={false}>
          {
            orderHome && orderHome.map((order, index) => {
              return <OrderCard key={index} {...order} />
            })
          }
        </Carousel> : <OrdersEmpty />
      }
    </>
  )
}

export default Orders