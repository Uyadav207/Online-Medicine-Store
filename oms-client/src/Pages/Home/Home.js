import React from "react";
import "./home.css";
import medicines from './data';
import GridWrapper from "./GridWrapper/GridWrapper";
import Banner from "./Crousel/Banner";


function Home() {
  return (
    <div className="home">
      <Banner />
      <div claclassNamess="container justify-content-md-center">
        <div className="row">
          {medicines.map(medicine => 
              <GridWrapper
                image={medicine.image}
                name={medicine.name}
                description={medicine.description}
                rating={medicine.rating}
                price={medicine.price}
              />
          )}
        </div>
      </div>

    </div>
  );
}

export default Home;
