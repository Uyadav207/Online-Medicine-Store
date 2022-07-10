import React from "react";
import "./home.css";
import medicines from './data';
import GridWrapper from "./GridWrapper/GridWrapper";
import Banner from "./Crousel/Banner";
import { useContext,useEffect } from "react";
import{ProductHome} from '../../App';
import { BASE_URL } from "../../Config/BaseUrl";
import {Cart} from '../../App';

function Home() {

  const [productHome, setProductHome] = useContext(ProductHome);
  const [cart, setCart] = useContext(Cart);
  const getCart = async () => {
      const response = await fetch(
        `${BASE_URL}/addtocart/getCartsByUserId/${
          JSON.parse(localStorage.getItem("userDetails")).id
        }`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );
      const data = await response.json();
      // console.log(data);
      var temp = [];
      if (data.length > 0) {
        data.map((item) => {
          let product = productHome.filter(
            (medicine) => medicine.id === item.productId
          )[0];
          product = { ...product, quantity: item.qty };
          temp = [...temp, product];
        });
      }
      setCart(temp);
      // console.log(productHome);
    };
  useEffect(()=>{
    getCart();
  },[productHome])

  return (
    <div className="home">
      <Banner />
      <div claclassNamess="container justify-content-md-center">
        <div className="row">
          {productHome.map(medicine => 
              <GridWrapper
                image={medicine.image}
                name={medicine.productName}
                description={medicine.productDesc}
                rating={medicine.productRating}
                price={medicine.price}
                id={medicine.id}
              />
          )}
        </div>
      </div>

    </div>
  );
}

export default Home;
