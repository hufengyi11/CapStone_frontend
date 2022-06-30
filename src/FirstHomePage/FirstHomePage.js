import React from "react";
import Footer from "../Footer/Footer";
import Categories from "./Categories";
import Description from "./Description";
import EnterAdress from "./EnterAddress";


function FirstHomePage() {
    return(
        <>
        <EnterAdress />
        <Description />
        <Categories />
        <Footer />
        </>
    );
}

export default FirstHomePage;