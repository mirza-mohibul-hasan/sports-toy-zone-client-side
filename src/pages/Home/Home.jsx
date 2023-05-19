// import React from 'react';

import Gallery from "../Gallery/Gallery";
import SubCategory from "../SubCategory/SubCategory";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <SubCategory></SubCategory>
            <h1 className="text-center text-8xl">Extra 1</h1>
            <h1 className="text-center text-8xl">Extra 2</h1>
        </div>
    );
};

export default Home;