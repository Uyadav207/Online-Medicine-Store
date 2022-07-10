import React from "react";
import "./home.css";
import medicines from './data';
import GridWrapper from "./GridWrapper/GridWrapper";
import Banner from "./Crousel/Banner";
import { useContext } from "react";
import{ProductHome} from '../../App';


function Home() {

  const [productHome, setProductHome] = useContext(ProductHome);


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
              />
          )}
        </div>
      </div>

    </div>
  );
}

export default Home;
