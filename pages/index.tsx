import React from 'react';
import { GetStaticProps } from 'next';
import parse from 'html-react-parser';
import showdown from 'showdown';
import path from 'path';
import fs from 'fs';

import Layout from '../templates/Layout';
import getPublicFilePath from '../utils/getPublicFilePath';


type HomeProps = {
    about: string;
    coverPath: string;
    kivaLogoPath: string;
    groupPhotoPath: string;
};

const Home = ({ about, coverPath, kivaLogoPath, groupPhotoPath }: HomeProps) => {

    // const pageName = location.pathname.match(/[A-z]{1,}[^#?\/\.]/gi); // Pull page name from url path.

    return ( 
        <Layout>
            <div>
                <div className="hero">
                    {/* Stock image -- set the image at this path to the cover image for the home page! */}
                    <img className="cover-image" src={ coverPath } />
                    <img className="kiva-logo" src={ kivaLogoPath } />
                </div>
            </div>

            <div className="content">
                <div className="about-section">
                    <div className="text-container">
                        <p>
                            { parse(about) }
                        </p>
                    </div>
                    <div className="img-container">
                        <img src={ groupPhotoPath } />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
 
export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
    const url = path.join(process.cwd(), 'data', 'info', 'home.md');
    const data = fs.readFileSync(url, 'utf-8');

    let converter = new showdown.Converter();
    
    const html = converter.makeHtml(data);
    const coverPath = getPublicFilePath("/images/home-cover-photo");
    const kivaLogoPath = getPublicFilePath("images/kiva-logo");
    const groupPhotoPath = getPublicFilePath("images/home-about-photo");

    return {
        props: { 
            about: html,
            coverPath,
            kivaLogoPath,
            groupPhotoPath,
        }
    };
}