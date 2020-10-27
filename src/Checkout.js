import React from 'react'
import { useStateValue } from './StateProvider';
import "./Checkout.css";

function Checkout() {
     
    const [{ basket } ] = useStateValue();

    return <div className="checkout">
            <img className="checkout__ad" 
            src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-nonprime-banner3.png" 
            alt=""/>
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Amazon Cart is empty.</h2>
                    <p>Your shopping cart is waiting. Give it purpose – fill it with groceries, clothing, household supplies, electronics and more.
                    Continue shopping on the Amazon.in homepage, learn about today's deals, or visit your Wish List.</p>
                </div>
            ) : (
                <div>
                    <h2>Your Amazon Cart.</h2>
                </div>
            )}
    </div>;
    
}

export default Checkout;
