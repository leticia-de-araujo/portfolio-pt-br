import { Divider } from "@mui/material";
import { Bounce, Fade } from "react-reveal";
import ContactForm from "../../ContactForm";
import { StyledDiv } from "./style";
import github from "../../imgs/social/github.png";
import linkedin from "../../imgs/social/linkedin.png";

const Contact = () => {
  return (
    <StyledDiv>
      <Fade bottom duration={1000}>
        <div className="contact">
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
                href="https://www.linkedin.com/in/let%C3%ADcia-de-ara%C3%BAjo-nunes-88bb731bb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="Linkedin Logo" width="40px" />
              </a>
            </div>
          </Bounce>
        </div>
      </Fade>
    </StyledDiv>
  );
};

export default Contact;
