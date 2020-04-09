import React, { useContext } from 'react';

import products from '../../data/products';

import {CartContext} from '../cart/context'

export default function Store() {
    const Cartctx = useContext(CartContext);

    return (
        <div>
            {products.map(product => (
                <div>
                    <div>
                        <img 
                            src={`/images/${product.sku}.jpg`} 
                            alt={product.name}
                            width={100}
                        />
                    </div>
                    <div>{product.name}</div>
                    <div>
                        <button 
                            onClick={() => Cartctx.addToCart(product)}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
