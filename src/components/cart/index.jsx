import React from 'react'

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

export default function Cart({stripeToken}) {
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
                            <tr></tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
