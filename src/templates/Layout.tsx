import { PageProps } from 'gatsby';
import React from 'react';
import "../styles/styles.scss";

const Layout = (props: PageProps) => {
    return (
        <main>
            { props.children }
        </main>
    );
}

export default Layout;
