import React from 'react'
import ProductCard from '../../../Components/ProductCard/ProductCard'

function GridWrapper({ image, name, description, price, rating }) {
    return (
        <div className="col-3 pt-5">
            <ProductCard name={name} price={price} image={image} description={description} rating={rating} />
        </div>
    )
}

export default GridWrapper