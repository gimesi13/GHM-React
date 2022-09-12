import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { SiMinutemailer } from "react-icons/si";

function Contact() {
  /* emailjs code*/
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_38hnc8o",
        "template_dtfs92g",
        form.current,
        "g4PHWosCI3QMWwFrf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="contact">
      <span className="hash" id="contact"></span>
      <div className="contact-container">
        <h1>CONTACT</h1>
        <div className="contact-info">
          <div className="contact-left">
            <p>
              Szecsei Dorottya
              <br></br>
              Tel.: +36307253984
            </p>
            <p>
              Gimesi Gergely
              <br></br>
              Tel.: +36304939729
            </p>
            <p>
              Location:
              <br></br>
              3224 Grabnersiedlung 2,
              <br></br>
              Mitterbach am Erlaufsee
              <br></br>
              <button>Open Maps</button>
            </p>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact-right">
            <h1>Contact Form:</h1>
            <div>
              <SiMinutemailer /> guesthousemitterbach@gmail.com
            </div>
            <div className="contact-right-name">
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="contact-right-email-phone">
              <input type="email" name="email" placeholder="Email" />
              <input type="tel" name="phone" placeholder="Phone No." />
            </div>
            <div className="contact-right-message">
              <textarea name="message" placeholder="Message" />
            </div>
            <div className="contact-right-send">
              <input
                className="contact-right-send-input"
                type="submit"
                value="Send"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
