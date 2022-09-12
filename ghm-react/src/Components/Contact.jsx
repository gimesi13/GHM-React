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
              <a
                href="https://www.google.com/maps/place/Guesthouse+Mitterbach/@47.8093901,15.2866635,17z/data=!3m1!4b1!4m8!3m7!1s0x4772042e7feef2bb:0x113db2ec0c0c4ba4!5m2!4m1!1i2!8m2!3d47.8094247!4d15.2889218"
                target="_blank"
                rel="noreferrer"
              >
                <button>Open Maps</button>
              </a>
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
