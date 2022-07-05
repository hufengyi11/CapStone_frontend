import React from "react";

const JoinUs = () => {
    return(
        <section className="join">
            <div className="deliveryapply">
                <img className="deliverypic" src={require("../Images/deliverydriver.png")} />
            </div>
            <div className="joinus">
                <div className="joinapply">
        <h1 className="jointitle">JOIN US</h1>
        <h2>Ride with us</h2>
        <p>Do you love to ride? Join the community today and start earning money</p>
        <button>APPLY NOW</button>
        </div>
        </div>
        </section>
    );
}

export default JoinUs