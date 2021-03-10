import Link from "next/link";
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

        // this.handleScroll = this.handleScroll.bind(this);
    }


    // handleScroll = () => {

    //     if (window.scrollY > document.querySelector('header').clientHeight) {
    //         this.setState({ scrolled: true })
    //     } else {
    //         this.setState({ scrolled: false });
    //     }
    // }

    render() {
        const { page } = this.props;
        // window.onscroll = this.handleScroll;

        return (
            <nav className={ this.state.scrolled? "scrolled" : "" } /*onScroll={ this.handleScroll }*/>
                <div className="logo">
                    <span><Link href="/">Kiva Deerfield</Link></span>
                </div>

                <ul className="nav-link-wrapper">
                    <li className={page === "home"? "currPage" : ""}><Link href="/home"><a>Home</a></Link></li>
                    <li className={page === "about"? "currPage" : ""}><Link href="#"><a>About Us</a></Link></li>
                    <li className={page === "join"? "currPage" : ""}><Link href="#"><a>Join Us</a></Link></li>
                    <li className={page === "leadership"? "currPage" : ""}><Link href="/leadership"><a>Leadership</a></Link></li>
                    <li className={page === "loans"? "currPage" : ""}><Link href="#"><a>Outstanding Loans</a></Link></li>
                    <li className={page === "minutes"? "currPage" : ""}><Link href="#"><a>Meeting Minutes</a></Link></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;