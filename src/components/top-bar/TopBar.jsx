import React, { useContext } from 'react'
import './layout.css';
import { Link } from 'react-router-dom';
import CartContext from '../cart/context';

export default function TopBar() {
    const cartCtx = useContext(CartContext);
    const numItems = cartCtx.items.length;
    return (
        <div className="layout top-bar">
            <div className="wrapper">
                <div className="section">My Shop</div>
                <div>
                    <Link to="/">Products</Link>
                    <Link to="/view-cart">View Cart ({numItems})</Link>
                </div>
            </div>
        </div>
    )
}
