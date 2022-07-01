import React from "react";
import Footer from "../Footer/Footer";
import Categories from "./Categories";
import Description from "./Description";
import EnterAdress from "./EnterAddress";
import Layout from '../Layout/Layout';

function FirstHomePage() {
    return(
        <>
        <Layout />
        <EnterAdress />
        <Description />
        <Categories />
        <Footer />
        </>
    );
}

export default FirstHomePage;