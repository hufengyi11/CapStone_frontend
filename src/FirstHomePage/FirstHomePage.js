import React from "react";
import Footer from "../Footer/Footer";
import Categories from "./Categories";
import Description from "./Description";
import EnterAdress from "./EnterAddress";
import Layout from '../Layout/Layout';
import Reviews from "./Reviews";
import JoinUs from "./JoinUs";

function FirstHomePage() {
    return(
        <>
        <Layout />
        <EnterAdress />
        <Description />
        <Categories />
        <JoinUs />
        <Reviews />
        <Footer />
        </>
    );
}

export default FirstHomePage;