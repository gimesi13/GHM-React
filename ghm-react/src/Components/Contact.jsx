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
        "service_a0zsakn",
        "template_l8p28wx",
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
          <div className="image">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
              vitae.
            </p>
          </div>

          <div className="contact-form">
            <div className="form">
              <form ref={form} onSubmit={sendEmail} className="contact-right">
                <h1>Get In Touch</h1>
                <div>
                  <SiMinutemailer /> gergely.gimesi@gmail.com
                </div>
                <div className="contact-right-name">
                  <input type="text" name="fistname" placeholder="First Name" />
                  <input type="text" name="lastname" placeholder="Last Name" />
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
        </div>
      </div>
    </section>
  );
}

export default Contact;
