import React from 'react';

import Layout from '../templates/Layout';


const Home = () => {
    // const pageName = location.pathname.match(/[A-z]{1,}[^#?\/\.]/gi); // Pull page name from url path.

    return ( 
        <Layout>
            <div style={{ height: "2566px", /*paddingTop: document.querySelector("header").clientHeight + 25*/ }}>
                <img src="/static/greco.jpg" style={{ width: "100%", maxHeight: "300px" }} /> {/* temp (placeholder) image */}
                { /* 
                    TODO:
                      * Cover image (carousel?)
                      * Brief information / introductions
                      * what "we" do?
                */}
            </div>
        </Layout>
    );
}
 
export default Home;