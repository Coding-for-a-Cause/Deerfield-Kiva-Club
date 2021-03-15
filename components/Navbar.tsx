import Link from "next/link";
import React, { useEffect } from "react";


type NavbarProps = {
    page: string;
}

type NavbarState = {
    scrolled: boolean;
    open: boolean;
}


class Navbar extends React.Component<NavbarProps, NavbarState> {
    constructor(props: NavbarProps) {
        super(props);

        this.state = {
            scrolled: false,
            open: false
        };
        
        // this.handleScroll = this.handleScroll.bind(this);
    }


    handleScroll = () => {

        if (window.scrollY > document.querySelector('header').clientHeight) {
            this.setState({ scrolled: true })
        } else {
            this.setState({ scrolled: false });
        }
    }

    toggleNav = () => {
        this.setState({ open: !this.state.open });
    }

    render() {
        const { page } = this.props;
        

        return (
            <>
                <span className="nav-toggle" onClick={ this.toggleNav }>&#8801;</span>
                <nav className={ `${this.state.scrolled? "scrolled" : ""} ${this.state.open? "open" : ""}` } /*onScroll={ this.handleScroll }*/>
                    {/* <span className="nav-close">&times;</span> */}
                    <div className="logo">
                        <span><Link href="/">Kiva Deerfield</Link></span>
                    </div>

                    <ul className="nav-link-wrapper">
                        <li className={ page === ""? "currPage" : "" }><Link href="/"><a>Home</a></Link></li>
                        {/* <li className={ page === "about"? "currPage" : "" }><Link href="#"><a>About Us</a></Link></li> */}
                        <li className={ page === "join"? "currPage" : "" }><Link href="/join-us"><a>Join Us</a></Link></li>
                        <li className={ page === "leadership"? "currPage" : "" }><Link href="/leadership"><a>Leadership</a></Link></li>
                        <li className={ page === "loans"? "currPage" : "" }><Link href="loans"><a>Outstanding Loans</a></Link></li>
                        <li className={ page === "minutes"? "currPage" : "" }><Link href="#"><a>Meeting Minutes</a></Link></li>
                    </ul>
                </nav>
            </>
        );
    }

    componentDidMount() {
        window.onscroll = this.handleScroll;
    }
}

export default Navbar;