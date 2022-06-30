import React from "react";
import Footer from "../Footer/Footer";
import './Faqs.css'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";

const Faqs= () =>{
    
    return(
        <>
            <h1 className="names">GoMart FAQs</h1>
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
                            Groceries delivered to your doorstep within minutes
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
                        How much does GoMart cost?
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
                        What is the minimum payment
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>         
                            Our minimum order value can range from £3 to £5 depending on the store.
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
                        Can I pay by cash?
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>         
                            Due to COVID-19, we currently do not accept cash payments in order to offer
                            contactless delivery.
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
                        Where can I write a review?
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>         
                        If you would like to let us know how we're doing, follow the link on the bottom
                        of the page under 'Support'.
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
                        My order was cancelled but I still see a charge on my account. What happens?
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>         
                            Orders usually take 3 to 5 business days to clear the account, so expect a full 
                            refund by that time.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

            <Footer />        
        </>
    );
} 

export default Faqs;