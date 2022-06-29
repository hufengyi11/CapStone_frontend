import React from "react";
import Navigation from "../Layout/Layout";
import Categories from "./Categories";
import Description from "./Description";
import EnterAdress from "./EnterAddress";

function FirstHomePage() {
    return(
        <>
        <EnterAdress />
        <Description />
        <Categories />
        </>
    );
}

export default FirstHomePage;