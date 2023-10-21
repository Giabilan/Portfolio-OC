import { useRef, useState } from "react";
import "./style.scss";
import emailjs from "@emailjs/browser";
import { FaExternalLinkAlt } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import Button from "../Button";
import Title from "../title";

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <Title content="Contact" />
      <div className="contact">
        {success && (
          <>
            <div className="modalContainer">
              <div className="modal">
                <div
                  onClick={() => {
                    setSuccess(false);
                  }}
                  className="closeIcon"
                >
                  <AiFillCloseCircle />
                </div>
                <div className="text">
                  Votre message à été envoyé avec succès
                </div>
              </div>
            </div>
          </>
        )}
        {error && (
          <>
            <div className="modalContainer">
              <div className="modal">
                <button
                  onClick={() => {
                    setSuccess(false);
                  }}
                  className="closeIcon"
                >
                  <AiFillCloseCircle />
                </button>
                <div className="text">
                  Une erreur à été produite <br></br> Veuillez réessayez plus
                  tard
                </div>
              </div>
            </div>
          </>
        )}
        <div className="textContainer">
          <div className="item">
            <h2>Mail</h2>
            <span>giabilan.r@gmail.com</span>
          </div>
          <div className="item">
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
          </div>
          <div className="item">
            <h2>Télephone</h2>
            <span>+33 7 81 53 23 48</span>
          </div>
        </div>
        <div className="formContainer">
          <form ref={formRef} onSubmit={sendEmail}>
            <input
              type="text"
              required
              placeholder="Nom"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              required
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              rows={8}
              required
              placeholder="Message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button content="Envoyer" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
