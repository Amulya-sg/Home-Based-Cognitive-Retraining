import react from 'react';
import { Button } from "react-scroll/modules";
import emailjs from "emailjs-com";
import "./ContFormStyles.css";

function ContForm() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c4audtc",      
        "template_29cthc6",     
        e.target,
        "akydKagxIlGP0pVYl"          
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert('Response Submitted.')
          
        },
        (error) => {
          console.log(error.text);
          
        }
      );
  };

  return (
    <div className="from-container">
      <h1>Send a message to us!</h1>
      <form onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Name" rows="2" />
        <input type="email" name="email" placeholder="Email" rows="2" />
        <input type="text" name="subject" placeholder="Subject"  rows="2" />
        <textarea name="message" placeholder="Message" rows="4"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContForm;
