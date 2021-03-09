import { Link } from "gatsby";
import React, { useEffect } from "react";


type NavbarProps = {
    page: string
}

type NavbarState = {
    scrolled: boolean
}


class Navbar extends React.Component<NavbarProps, NavbarState> {
    constructor(props: NavbarProps) {
        super(props);

        this.state = {
            scrolled: false
        };

        this.handleScroll = this.handleScroll.bind(this);
    }


    handleScroll = () => {

        if (window.scrollY > document.querySelector('header').clientHeight) {
            this.setState({ scrolled: true })
        } else {
            this.setState({ scrolled: false });
        }
    }

    render() {
        const { page } = this.props;
        window.onscroll = this.handleScroll;

        return (
            <nav className={ this.state.scrolled? "scrolled" : "" } onScroll={ this.handleScroll }>
                <div className="logo">
                    <span><Link to="/">Kiva Deerfield</Link></span>
                </div>

                <ul className="nav-link-wrapper">
                    <li className={page === "home"? "currPage" : ""}><Link to="/home">Home</Link></li>
                    <li className={page === "about"? "currPage" : ""}><Link to="#">About Us</Link></li>
                    <li className={page === "join"? "currPage" : ""}><Link to="#">Join Us</Link></li>
                    <li className={page === "leadership"? "currPage" : ""}><Link to="/leadership">Leadership</Link></li>
                    <li className={page === "loans"? "currPage" : ""}><Link to="#">Outstanding Loans</Link></li>
                    <li className={page === "minutes"? "currPage" : ""}><Link to="#">Meeting Minutes</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;