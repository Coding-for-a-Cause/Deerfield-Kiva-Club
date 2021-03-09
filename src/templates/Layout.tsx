import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import "../styles/styles.scss";


type LayoutProps = {
    children?: React.ReactNode;
    page?: string;
}

const Layout = ({ children, page }: LayoutProps) => {
    if (!page && location.pathname != "/") {
        page = location.pathname.match(/[A-z]{1,}[^#?\/\.]/gi)[0]; // Pull page name from url path.
    }

    return (
        <>
            <Header page={ page || "" } />
            <main>
                { children }
            </main>
            <Footer />
        </>
    );
}

export default Layout;
