import { Box, Drawer, IconButton, Toolbar, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Link } from "react-scroll";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../../errors/ErrorFallback";
import { StyledAppBar, StyledBox } from "./style";

const NavBar = () => {
  const drawerWidth = 240;

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <StyledBox onClick={handleDrawerToggle}>
      <IconButton
        color="primary"
        onClick={handleDrawerToggle}
        sx={{ alignSelf: "flex-end" }}
      >
        <CloseIcon />
      </IconButton>
      <ul className="ul-mobile">
        <li>
          <Link to="home" spy={true} smooth={true} duration={500}>
            <Button
              variant="text"
              sx={{ fontSize: "1rem" }}
              onClick={handleDrawerToggle}
            >
              Home
            </Button>
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} duration={500}>
            <Button
              variant="text"
              sx={{ fontSize: "1rem" }}
              onClick={handleDrawerToggle}
            >
              Sobre
            </Button>
          </Link>
        </li>
        <li>
          <Link to="projects" spy={true} smooth={true} duration={500}>
            <Button
              variant="text"
              sx={{ fontSize: "1rem" }}
              onClick={handleDrawerToggle}
            >
              Projetos
            </Button>
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            <Button
              variant="text"
              sx={{ fontSize: "1rem" }}
              onClick={handleDrawerToggle}
            >
              Contato
            </Button>
          </Link>
        </li>
      </ul>
    </StyledBox>
  );

  const container = window.document.body;

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <StyledAppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: "none", sm: "block" }, width: "100%" }}>
            <ul className="ul-desktop">
              <li>
                <Link to="home" spy={true} smooth={true} duration={500}>
                  <Button
                    variant="text"
                    color="secondary"
                    sx={{ fontSize: "1rem" }}
                  >
                    Home
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="about" spy={true} smooth={true} duration={500}>
                  <Button
                    variant="text"
                    color="secondary"
                    sx={{ fontSize: "1rem" }}
                  >
                    Sobre
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="projects" spy={true} smooth={true} duration={500}>
                  <Button
                    variant="text"
                    color="secondary"
                    sx={{ fontSize: "1rem" }}
                  >
                    Projetos
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="contact" spy={true} smooth={true} duration={500}>
                  <Button
                    variant="text"
                    color="secondary"
                    sx={{ fontSize: "1rem" }}
                  >
                    Contato
                  </Button>
                </Link>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </StyledAppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              height: "35vh",
              borderRadius: "0 0 1rem 0",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </ErrorBoundary>
  );
};

export default NavBar;
