import React, { useContext } from 'react';

import products from '../../data/products';

import Cart from '../cart';

import {CardContext} from '../cart/context'

export default function Store() {
    const Cardctx = useContext(CardContext);

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
                            onClick={() => Cardctx.addToCart(product)}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
            <Cart stripeToken="pk_test_YO4hCduILG2Vkvaecq4Th13V007ILyXZUw"/>
        </div>
    )
}
