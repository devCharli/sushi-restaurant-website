import "./css/contact.css";
import emailjs from "emailjs-com";
import SuccessPage from "./emailer/success";
import { useState } from "react";
import Form from "./contactForm";
import ErrorPage from "./emailer/error";
import { ReactComponent as Loading } from "./emailer/loading.svg";

const Contact = () => {
  const [success, setSuccess] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsPending(true);
    emailjs
      .sendForm(
        "service_lsl6wgr",
        "template_n8dmz9n",
        e.target,
        "user_PTWCioE7eHFRlWCqOGfEY"
      )
      .then((res) => {
        console.log("success!");
        // console.log(res);
        setIsPending(false);
        setSuccess(true);
      })
      .catch((err) => {
        console.log("oh no error");
        // console.log(err);
        setIsPending(false);
        setSuccess(false);
      });
  };

  return (
    <section className="contact" id="contact">
      <h2>contact</h2>
      {isPending && (
        <div className="loading">
          <Loading className="loader" />
          <Loading className="loader" />
          <Loading className="loader" />
        </div>
      )}
      {success === null ? (
        <Form sendEmail={sendEmail} />
      ) : success ? (
        <SuccessPage />
      ) : (
        <ErrorPage />
      )}
    </section>
  );
};

export default Contact;
