import React, { Suspense } from 'react'
const ProductCard = React.lazy(() => import('../../../Components/ProductCard/ProductCard'));

function GridWrapper({ image, name, description, price, rating }) {
    return (
        <div className="col-3 px-5 py-3" styles={{ marginTop: "10" }}>
            <Suspense fallback={<div>Loading ... </div>}>
                <ProductCard name={name} price={price} image={image} description={description} rating={rating} />
            </Suspense>
        </div>
    )
}

export default GridWrapper