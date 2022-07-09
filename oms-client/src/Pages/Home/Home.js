import React from "react";
import "./home.css";
import medicines from './data';
import GridWrapper from "./GridWrapper/GridWrapper";

function Home() {
  return (
    <div className="home">
      <div claclassNamess="container">
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
