import React from 'react';

import Layout from '../templates/Layout';
import HeroCard from '../components/HeroCard';


const Home = () => {

    // const pageName = location.pathname.match(/[A-z]{1,}[^#?\/\.]/gi); // Pull page name from url path.

    return ( 
        <Layout>
            <div style={{ height: "2566px", /*paddingTop: document.querySelector("header").clientHeight + 25*/ }}>
                {/* Stock image -- set the image at this path to the cover image for the home page! */}
                <img className="cover-image" src="/images/home-cover-photo.jpg" />
                <HeroCard />
            </div>
        </Layout>
    );
}
 
export default Home;