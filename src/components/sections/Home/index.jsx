import { HomeMainDiv } from "./style";
import { Fade, Bounce } from "react-reveal";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import github from "../../../imgs/social/github.png";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import Particles from "react-tsparticles";
import particlesOptions from "../../../particles.json";
import { loadFull } from "tsparticles";
import { IconButton } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

const Home = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <HomeMainDiv name="home">
      <Fade bottom duration={1000}>
        {/* <a href="https://portfolio-leticia.vercel.app/" className="language">
          <IconButton>
            EN <LanguageIcon sx={{ fontSize: "0.9rem" }} />
          </IconButton>
        </a> */}
      </Fade>
      <Particles options={particlesOptions} init={particlesInit} />
      <div className="homeInnerDiv">
        <Fade bottom duration={1000}>
          <h1>
            Olá, eu sou a <span className="name">Letícia Araújo.</span>
            <span className="wave-emoji" role="img" aria-label="waving hand">
              👋
            </span>
          </h1>
          <h2>
            <Typewriter
              options={{
                strings: [
                  "Desenvolvedora Full-Stack",
                  "Desenvolvedora Back-End",
                  "Apaixonada por criar experiências por meio da tecnologia",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 15,
                delay: 100,
              }}
            />
          </h2>
          <Bounce cascade>
            <div className="links">
              <a
                href="https://github.com/leticia-de-araujo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="GitHub Logo" />
              </a>
            </div>
          </Bounce>
          <div className="scroll-down">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              <ArrowDropDownCircleIcon
                fontSize="large"
                style={{ pointerEvents: "fill", cursor: "pointer" }}
              />
            </Link>
          </div>
        </Fade>
      </div>
    </HomeMainDiv>
  );
};

export default Home;
