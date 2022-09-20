import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { SiMinutemailer } from "react-icons/si";

function Contact({ t }) {
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
        <h1>{t("CONTACT")}</h1>
        <div className="contact-info">
          <div className="contact-left">
            <p>
              <span>Szecsei Dorottya</span>
              <br></br>
              Tel.: +36307253984
            </p>
            <p>
              <span>Gimesi Gergely</span>
              <br></br>
              Tel.: +36304939729
            </p>
            <p>
              <span>{t("contact_location")}</span>
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
                <button>{t("open_maps")}</button>
              </a>
            </p>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact-right">
            <h1>{t("get_in_touch")}</h1>
            <div className="email-address">
              <SiMinutemailer /> guesthousemitterbach@gmail.com
            </div>
            <div className="contact-right-name">
              <input type="text" name="name" placeholder={t("name")} />
            </div>
            <div className="contact-right-email-phone">
              <input type="email" name="email" placeholder={t("email")} />
              <input type="tel" name="phone" placeholder={t("phone")} />
            </div>
            <div className="contact-right-message">
              <textarea name="message" placeholder={t("message")} />
            </div>
            <div className="contact-right-send">
              <input
                className="contact-right-send-input"
                type="submit"
                value={t("send")}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
