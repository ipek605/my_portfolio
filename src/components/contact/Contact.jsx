import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "./contact.scss";

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false)

   const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_x900ldc",
        "template_gcj9yxc",
        formRef.current,
        "Ua143YZDl__pYN1O6"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/email-icon.png" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2> 
        <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
      </div>
    </div>
  );
}

export default Contact