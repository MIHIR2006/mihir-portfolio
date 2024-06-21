import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import SocialLinks from '../SocialLinks';
import './Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Create a FormData object from the form reference
    const formData = new FormData(formRef.current);

    // Logging form data before sending
    const from_name = formData.get('from_name');
    const from_email = formData.get('from_email');
    const message = formData.get('message');

    console.log('Form data to be sent:', { from_name, from_email, message });

    emailjs
      .sendForm('service_m1j39hp', 'template_8e6abss', formRef.current, 'bHXYlL0mFg7br60Ft')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          toast.success('Message sent successfully!');
          document.getElementById("contact-form").reset();

        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Failed to send message.');
        }
      );
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="heading-wrapper">
          <div className="heading">
            <p className="title">
              Want to <br />
              contact me?
            </p>
            <p className="separator" />
            <p className="subtitle">
              Please, use the form below or send an email to {''}
              <span className="mail">mihirgoswami2006@gmail.com</span>
              :
            </p>
          </div>
          <SocialLinks />
        </div>
        <ToastContainer style={{marginTop:'60px'}}/>
        <form ref={formRef} id="contact-form" onSubmit={sendEmail}>
          <input placeholder="Name" name="from_name" type="text" required />
          <input placeholder="Email" name="from_email" type="email" required />
          <textarea placeholder="Message" name="message" required />
          <input className="button" id="submit" value="Submit" type="submit" />
        </form>
        
      </div>
    </section>
  );
};

export default Contact;
