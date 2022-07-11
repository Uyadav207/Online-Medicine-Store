import React,{useContext} from 'react'
import OrderCard from '../../Components/OrderCards/OrderCard/OrderCard'
import Carousel from 'framer-motion-carousel';
import {OrderHome} from "../../App"

function Orders() {
  const [orderHome, setOrderHome] = useContext(OrderHome);

  return (
    <Carousel autoPlay={false}>
      {
        orderHome && orderHome.map((order,index)=>{
          return <OrderCard key={index} {...order} />
        })
      }
      
      {/* <OrderCard /> */}
      
    </Carousel>
  )
}

export default Orders