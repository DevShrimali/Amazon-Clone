import React from 'react'

function CheckoutProduct({ id, title, image, price, rating, RemoveFromBasket }) {
    return (
        <div className="checkoutProduct">
            <img src={image} alt=""/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={RemoveFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
