import React from 'react';

import Layout from '../templates/Layout';


const Home = () => {
    return ( 
        <Layout>
            <div style={{ height: "2566px", /*paddingTop: document.querySelector("header").clientHeight + 25*/ }}>
                <img src="/static/greco.jpg" style={{ width: "100%", maxHeight: "300px" }} />
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