import React from "react";
import "./Navbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import img1 from "../../images/off the beaten track.png";
import img2 from "../../images/img4.jpg";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Notification from "../../Notification/index";
import { IconButton } from "@mui/material";

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

export default function NavbarAgency() {
  const [notification, setNotification] = React.useState(false);
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navleft">
          <img
            src={img1}
            className="navbarAvater"
            alt="userprofilepicture"
          ></img>
        </div>
        <div className="navright">
          <div className="navbarIconContainer">
            <IconButton
              color="inherit"
              onClick={() => setNotification(!notification)}
            >
              <Badge
                badgeContent={100}
                style={{ color: "black", backgroundColor: "fb9e00" }}
                max={9}
              >
                <NotificationsNoneIcon style={{ color: "fb9e00" }} />
              </Badge>
            </IconButton>
          </div>
          <Stack direction="row" spacing={2}>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt="Remy Sharp" src={img2} />
            </StyledBadge>
          </Stack>
        </div>
      </div>
      {notification ? (
        <div
          style={{
            zIndex: 10,
            position: "fixed",
            top: "70px",
            right: "10px",
          }}
        >
          <Notification />
        </div>
      ) : null}
    </div>
  );
}
