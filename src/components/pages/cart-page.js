import React from 'react';
import CartTable from '../cart-table';
import { withRouter } from 'react-router'

const CartPage = () => {
    return (
        <div className="cart"> 
            <CartTable/>
        </div>
    )
}

export default withRouter(CartPage);