import React from "react";
import Footer from "../Footer/Footer";
import Categories from "./Categories";
import Description from "./Description";
import Navigation from '../Navigation/Navigation';
import Reviews from "./Reviews";
import JoinUs from "./JoinUs";
import EnterAddress from './EnterAddress'

function LandingPage() {
    return(
        <>
        <Navigation  />
        <EnterAddress />
        <Description />
        <Categories />
        <JoinUs />
        <Reviews />
        <Footer />
        </>
    );
}

export default LandingPage;