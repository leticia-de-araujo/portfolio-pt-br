import { Divider } from "@mui/material";
import { Bounce, Fade } from "react-reveal";
import { StyledDiv } from "./style";
import github from "../../../imgs/social/github.png";
import linkedin from "../../../imgs/social/linkedin.png";
import ContactForm from "../../assets/ContactForm";

const Contact = () => {
  return (
    <StyledDiv className="contact">
        <div className="contact-innerDiv">
          <div className="contact-title">
            <Fade left duration={1200}>
              <h2>Contato</h2>
            </Fade>
            <Fade right duration={1200}>
              <Divider className="divider" />
            </Fade>
          </div>
          <ContactForm />
          <Bounce cascade>
            <div className="links">
              <a
                href="https://github.com/leticia-de-araujo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="Github Logo" width="40px" />
              </a>
              <a
                href="https://www.linkedin.com/in/leticia-de-araujo-nunes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="Linkedin Logo" width="40px" />
              </a>
            </div>
          </Bounce>
        </div>
    </StyledDiv>
  );
};

export default Contact;
