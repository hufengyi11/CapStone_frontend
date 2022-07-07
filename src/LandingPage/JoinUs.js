import React from "react";
import { Link, useNavigate } from "react-router-dom";

const JoinUs = () => {
    const navigate = useNavigate;
    return(
        <section className="join">
            <h1 className="community">Join Our Community</h1>
            <div className="deliveryapply">
                <img className="deliverypic" src={require("../Images/deliverydriver.png")} />
            </div>
            
            <div className="joinus">
                
                <div className="joinapply">
                    
        <h1 className="jointitle">JOIN US</h1>
        <h2>Ride with us</h2>
        <p>Do you love to ride? Join the community today and start earning money</p>
        <Link className="links" to="/joinus" ><button className="applybutton" onClick={() => {navigate('joinus', {replace:true})}}>APPLY NOW</button></Link>
        </div>
        </div>
        </section>
    );
}

export default JoinUs;