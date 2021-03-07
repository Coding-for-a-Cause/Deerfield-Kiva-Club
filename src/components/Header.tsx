import React from 'react';
import { Link } from 'gatsby';

import Navbar from './Navbar';

type HeaderProps = {
    page?: string;
}


const Header = (props: HeaderProps) => (
    <header>
        <Navbar page={ props.page || "" } />
    </header>
);

export default Header;