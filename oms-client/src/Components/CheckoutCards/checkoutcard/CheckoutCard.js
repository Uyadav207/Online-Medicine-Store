import React from "react"
import "./checkoutcard.css"
import CheckoutcardBill from "../checkoutcardbill/CheckoutcardBill"
import CheckoutcardProduct from "../checkoutcardProduct/CheckoutcardProduct"
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

function CheckoutCard() {
	return (
		<div className="container_outer">
			<div className="container inner_container">
				<div className="row">
				<div className='col mx-5 container_product'>
				<div className='continue_shopping'>
                    <p color='#4D4D4D' style={{ fontSize: "small" }}> <ArrowBackIcon color='#4D4D4D' /> Continue Shopping</p>
                    <hr />
                </div>
				<div className='continue-shopping-info'>
                    <strong color='#4D4D4D'> Shopping Cart </strong>
                    <p color='#4D4D4D'> You have 4 items in your cart </p>
                </div>
					<CheckoutcardProduct />
					<CheckoutcardProduct />
					<CheckoutcardProduct />
					<CheckoutcardProduct />
					</div>
					<CheckoutcardBill />
				</div>
			</div>
		</div>
	)
}

export default CheckoutCard
