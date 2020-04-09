import React from 'react';
import Layout from '../../components/layout/Layout';
import Cart from '../../components/cart/index';

export default function ViewCartPage() {
    return (
        <Layout title="Items in my Cart">
            <Cart stripeToken="pk_test_YO4hCduILG2Vkvaecq4Th13V007ILyXZUw" />
        </Layout>
    )
}
