import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavMenu,
  NavLinks,
  NavItem,
  MobileIcon,
  NavBtnLink,
  NavBtn,
} from "./NavbarElement";
import Badge from "@mui/material/Badge";
import { IconButton } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import img2 from "../../images/img4.jpg";
import img1 from "../../images/off the beaten track.png";
import Search from "../searchbar/search";
import { GET } from "../../../services/httpClient";

const styles = {
  NavbarAvater: {
    width: "130px",
    height: "70px",
    borderradius: "0%",
    cursor: "pointer",
  },
};

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));


const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  const [rows, setRows] = useState("");
  const [count, setCount] = useState(0);
  const [notification, setNotification] = React.useState(false);
  const getNotification = async () => {
    let data = await GET("/agency/notification", { params: { isRead: false } });
    if (data) {
      setRows(data.rows);
      setCount(data.count);
    }
  };

  useEffect(() => {
    getNotification();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "Black" }}>
        <Nav scrollNav={scrollNav}>
          <img
            src={img1}
            style={styles.NavbarAvater}
            alt="logo of the website"
          />
          <NavbarContainer>
            <Search />
            <NavLinks to="/"></NavLinks>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                >
                  HOME
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                >
                  SERVICES
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="destination"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                >
                  DESTINATION
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="deals"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                >
                  DEALS
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                >
                  CONTACT
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                >
                  ABOUT
                </NavLinks>
              </NavItem>
              <IconButton
              color="inherit"
              onClick={() => setNotification(!notification)}
            >
              <Badge
                badgeContent={count}
                style={{ color: "black", backgroundColor: "fb9e00" }}
                max={100}
              >
                <NotificationsNoneIcon style={{ color: "fb9e00" }} />
              </Badge>
            </IconButton>
              <Stack direction="row" spacing={2}>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt="Remy Sharp" src={img2} />
            </StyledBadge>
          </Stack>
              <NavBtn>
                <NavBtnLink to="/Agency">Agency Portal</NavBtnLink>
              </NavBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
