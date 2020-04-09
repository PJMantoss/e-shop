import React, { useContext } from 'react';

import products from '../../data/products';

import {CartContext} from '../cart/context'

import './store.css'

export default function Store() {
    const Cartctx = useContext(CartContext);

    return (
        <div className="main-store">
            {products.map(product => (
                <div className="store-div">
                    <div className="image">
                        <img 
                            src={`/images/${product.sku}.jpg`} 
                            alt={product.name}
                            width={100}
                        />
                    </div>
                    <div className="product-name">{product.name}</div>
                    <div className="btn-div">
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
