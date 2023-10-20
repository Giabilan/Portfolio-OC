import { useRef, useState } from "react";
import "./style.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaExternalLinkAlt } from "react-icons/fa";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l6oxzip",
        "template_cwg5llq",
        formRef.current,
        "pMtJZA6NvcQCncd0R"
      )
      .then(
        () => {
          setSuccess(true);
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let’s work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>giabilan.r@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>
            Linkedin
            <a
              href="https://www.linkedin.com/in/giabilan-rajendran-abb062276/"
              target="_blank"
              rel="noreferrer"
              className="linkIcon"
            >
              <FaExternalLinkAlt />
            </a>
          </h2>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Télephone</h2>
          <span>+33 7 81 53 23 48</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
