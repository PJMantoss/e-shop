import React, { useState, useEffect, useContext } from 'react';

import {CartContext} from './context'

import './cart.css';

const formatPrice = price => {
    return `$${(price * 0.01).toFixed(2)}`
}

const totalPrice = items => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0.0)
}

export default function Cart({stripeToken}) {
    const [stripe, setStripe] = useState(null);
    const ctx = useContext(CartContext);

    useEffect(() => {
        if(window.Stripe) setStripe(window.Stripe(stripeToken))
    }, [stripeToken]);
    
    const checkout = () => {
        stripe.redirectToCheckout({
            items: ctx.items.map(item => ({
                quantity: item.quantity,
                sku: item.sku
            })),
            successUrl: 'https://your-website.com/success',
            cancelUrl: 'https://your-website.com/canceled'
        })
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        ctx.items.map(item => (
                            <tr className="details">
                                <td>{item.name}</td>
                                <td>
                                    <img 
                                        src={`./images/${item.sku}.jpg`} 
                                        alt={item.name}
                                        width={100}
                                    />
                                </td>
                                <td>{item.quantity}</td>
                                <td>{formatPrice(item.price * item.quantity)}</td>
                            </tr>
                        ))
                    }
                    <tr>
                        <td style={{textAlign: "right"}} colspan={3}>Total:</td>
                        <td>{formatPrice(totalPrice(ctx.items))}</td>
                    </tr>

                    <tr>
                        <td style={{textAlign: "right"}} colspan={4}>
                            <button onClick={checkout}>Checkout Now with Stripe</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
