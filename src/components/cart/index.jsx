import React, { useState, useEffect } from 'react'

const items = [
    {
        sku: "sku_H3m1A1FYmkFTn6", 
        quantity: 1, 
        price: 179800, 
        name: "Sony Alpha A6600 Mirrorless Camera with 18-135mm Zoom Lens"
    },
    {
        sku: "sku_H3lsYoG0g7UpYi", 
        quantity: 1, 
        price: 249900, 
        name: "Canon EOS 5D Mark IV Full Frame Digital SLR Camera Body by Canon"
    },
    {
        sku: "sku_H3ln5Gk53xzAXH", 
        quantity: 1, 
        price: 119900, 
        name: "Blackmagic Design Production Camera 4K with EF Mount"
    }
];

const formatPrice = price => {
    return `$${(price * 0.01).toFixed(2)}`
}

const totalPrice = items => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0.0)
}

export default function Cart({stripeToken}) {
    const [stripe, setStripe] = useState(null);

    useEffect(() => {
        if(window.Stripe) setStripe(window.Stripe(stripeToken))
    }, [stripeToken]);
    
    const checkout = () => {
        stripe.redirectToCheckout({
            items: items.map(item => ({
                quantity: item.quantity,
                sku: item.sku
            }))
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
                        items.map(item => (
                            <tr>
                                <td>{item.name}</td>
                                <td>
                                    <img 
                                        src={`/images/${item.sku}.jpg`} 
                                        alt={item.name}
                                        width={100}
                                    />
                                </td>
                                <td>{item.quantity}</td>
                                <td>{formatPrice(item.price)}</td>
                            </tr>
                        ))
                    }
                    <tr>
                        <td style={{textAlign: "right"}} colspan={3}>Total:</td>
                        <td>{formatPrice(totalPrice(items))}</td>
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
