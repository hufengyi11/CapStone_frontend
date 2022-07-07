import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import './AboutUs.css'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Navigation from "../../Navigation/Navigation";

const AboutUs = () => {
    const navigate = useNavigate;
    return(
        <>
        <div>
            <Navigation />
        </div>
            <div className="about" >
                <div className="aboutus">
                    <h1 className="aboutustitle">About Us</h1>
                    <h2 className="abouttitle">We'll keep this quick!</h2>
                </div>

                <div>
                    <Accordion className="accordion">
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content">
                        <Typography>
                            What is GoMart?
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>         
                            GoMart will deliver all of your groceries right at your door! 
                            We have a variety of products on offer in different locations.
                            So when you order, your items will come directly to you.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div>
                    <Accordion className="accordion">
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content">
                        <Typography>
                            How much is GoMart?
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>         
                                Delivery fees range from £1.00 to £2.00 depending on your area.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div>
                    <Accordion className="accordion">
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content">
                        <Typography>
                            How late does GoMart deliver?
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>         
                                The stores will have different closing times so do check their
                                info out!
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div>
                    <Accordion className="accordion">
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content">
                        <Typography>
                            How can I stay in touch?
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>         
                                Check back soon because we are always adding new products! 
                                In the meantime, follow us on Facebook, Instagram, Twitter, LinkedIn and YouTube, become a member of the community
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}
export default AboutUs;