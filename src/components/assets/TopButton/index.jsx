import { useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Link } from "react-scroll";
import { StyledButton } from "./style";

const TopButton = () => {
  const [topButtonVisible, setTopButtonVisible] = useState(false);

  const scrollFunction = () => {
    if (
      document.body.scrollTop > window.innerHeight + 63 ||
      document.documentElement.scrollTop > window.innerHeight + 63
    ) {
      setTopButtonVisible(true);
    } else {
      setTopButtonVisible(false);
    }
  };

  window.onscroll = function () {
    scrollFunction();
  };

  window.onload = function () {
    scrollFunction();
  };
  return (
    <Link
      activeClass="active"
      to="home"
      spy={true}
      smooth={true}
      duration={500}
    >
      <StyledButton
        className={topButtonVisible ? "on" : "off"}
        title="Go to top"
      >
        <i aria-hidden="true">
          <ArrowUpwardIcon />
        </i>
      </StyledButton>
    </Link>
  );
};

export default TopButton;
