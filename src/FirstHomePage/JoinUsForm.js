import Navigation from "../Layout/Layout";
import { useState } from "react";
import emailjs from 'emailjs-com'
import Footer from "../Footer/Footer";

const JoinUsForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (name && email && mobile) {
            const serviceId = 'service_y7l234l';
            const templateId = 'template_s5rvmqg';
            const userId = 'SZcn2mHqjBK2Ky7Aq';
            const templateParams = {
                name,
                email,
                
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMobile('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    return(
    <>
    <div>
            <Navigation />
        </div>
    <form className="applyform">
        <h1>Apply For This Job Now!</h1>
        <p>No experience required. Part-time and full-time jobs available with flexibility, benefits and tips. Must be eligible to work in the city you're applying to.</p>
        <div>
        <label>Your Full Name</label>
            <input
                type="text"
                
                value={name} onChange={e => setName(e.target.value)} />

            <label>Email</label>
            <input
                type="email"
                
                value={email} onChange={e => setEmail(e.target.value)} />
            <label>Mobile Number</label>
            <input
                type="mobile"
                value={email} onChange={e => setMobile(e.target.value)}
                 />
            <label>Country</label>
            <select name="Country">
            <option value="select">Select a country</option>
                <option value="United Kingdom">United Kingdom</option>
            </select>
            <label>City</label>
            <select name="City">
            <option value="select">Select a city</option>
                <option value="London">London</option>
            </select>
            <div className="checkboxtext">
            <input type="checkbox" className="checkbox" required/>
                <p>We collect this data for the purposes of processing your application. 
                    By clicking this box, you acknowledge that you have read and understood the privacy policy and terms of service.<div>*</div></p>
            </div>

            <button id="but" onClick={submit}>
                Apply Now
            </button>

            </div>
    </form>
    <Footer />
    </>);
}

export default JoinUsForm;