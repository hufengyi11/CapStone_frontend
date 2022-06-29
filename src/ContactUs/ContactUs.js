import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import './ContactUs.css'


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (name && email && message) {
            const serviceId = 'service_y7l234l';
            const templateId = 'template_s5rvmqg';
            const userId = 'SZcn2mHqjBK2Ky7Aq';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    return (
        <div id="contact-form">
            <label>Your Full Name:</label>
            <input 
                type = "text" 
                placeholder = "Your Full Name" 
                value={name} onChange={e => setName(e.target.value)}
             />

             <label>Your Email Address</label>
            <input 
                type="email" 
                placeholder="Your email address" 
                value={email} onChange={e => setEmail(e.target.value)}
             />
             <label id='subject'>Subject</label>
            <textarea 
                placeholder = "Your message" 
                value={message} onChange = {e => setMessage(e.target.value)}>
            </textarea>
            
            <button id="but" onClick={submit}> 
                Send Message
            </button>

            <span 
                className ={emailSent ? 'visible' : null}>  
            </span>
        </div>
    );
};

export default Contact;