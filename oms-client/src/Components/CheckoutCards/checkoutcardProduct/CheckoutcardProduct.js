import React from 'react'
import './checkoutcardproduct.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { Input } from '@mui/material';

function CheckoutcardProduct() {
    return (
            <>  
                <div className='continue-shopping-info-inner'>
                    <p className='product-name'>
                        <strong>Himalaya Wellness Pure Herbs Ashvagandha Tablet</strong>
                        <small className='price'>$ 500</small>
                    </p>
                    <p className='product-description'>
                    packet of 60 tablets
                    <div className='quantity'>
                        <p className='btn'>+</p>
                        <input maxLength={2} />
                        <p className='btn'>-</p>
                        </div>
                    </p>
                    <p className='buttons'>
                    <small className='remove'> <DeleteIcon color='#d4d4d4' fontSize='34' /> Remove</small>
                    </p>
                </div>
                </>
    )
}

export default CheckoutcardProduct;