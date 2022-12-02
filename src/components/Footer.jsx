import React from "react";
import "../styles/footer.css";

import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png";
import twitter from "../assets/icons/twitter.png";
import correo from "../assets/icons/correo3.png";

const Footer = () => {
  return (
    <footer className="footer">
        <ul className="ul">
          <li>
          <a href="https://github.com/angelcdb"><img src={github} alt="imagen" /></a>
          </li>
          <li>
          <a href="https://www.linkedin.com/in/angel-contreras-front-end-developer-748094218/"><img src={linkedin} alt="imagen" /></a>
          </li>
          <li>
          <a href="https://twitter.com/angeellc"><img src={twitter} alt="imagen" /></a>
          </li>
          <li>
          <a href="https://accounts.google.com/ServiceLogin/signinchooser?service=mail&passive=1209600&osid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&ifkv=ARgdvAu6sf6kqQLz5HELMhCh6icv7W8oMl1KVjqy0mS6lBfyf46syw1j7ROqCJnf6H5FffZz4DlO&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
          <img src={correo} alt="imagen" /></a>
          </li>
        </ul>

        <p className="pp">Copyright | Angel Contreras ©</p>
    </footer>
  );
};

export { Footer };