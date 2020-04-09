import React, {Fragment} from 'react'
import './layout.css';
import TopBar from '../top-bar/TopBar';
import Footer from './Footer';

export default function Layout({children, title}) {
    document.getElementsByTagName("title")[0].innerHTML = title;

    return (
        <Fragment>
            <TopBar />
            <div className="wrapper">
                <h1>{title}</h1>
                {children}
            </div>
            <Footer />
        </Fragment>
    )
}
