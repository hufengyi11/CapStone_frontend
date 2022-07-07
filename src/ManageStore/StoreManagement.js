import React from "react";
import Layout from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import AddNewStore from "./AddNewStore";
import RemoveStore from "./RemoveStore";

const StoreManagement = () => {

  return (
    <>
      <Layout />
      <div className="storeContainer">
        <AddNewStore />
        <RemoveStore />
      </div>
      <div className="padding"></div>
      <Footer />
    </>
  );
};

export default StoreManagement;
