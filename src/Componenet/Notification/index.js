import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Box,
  CircularProgress,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import NotificationCard from "./NotificationCard/index";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";

export default function Notifications() {
  const [progress, setProgress] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  React.useEffect(() => {
    setTimeout(() => {
      setProgress(true);
    }, 3000);
  }, []);
  return (
    <Card
      sx={{ width: 420, height: 360 }}
      style={{
        borderRadius: "10px",
      }}
      elevation={5}
    >
      <CardHeader
        action={
          <>
            <IconButton aria-label="settings" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={() => {}} style={{ padding: "10px" }}>
                <MarkEmailReadIcon
                  style={{ fontSize: "18px", color: "grey" }}
                />
                <Typography variant="body2" style={{ marginLeft: "5px" }}>
                  Read
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => {}} style={{ padding: "10px" }}>
                <MarkEmailUnreadIcon
                  style={{ fontSize: "18px", color: "grey" }}
                />
                <Typography variant="body2" style={{ marginLeft: "5px" }}>
                  Unread
                </Typography>
              </MenuItem>
            </Menu>
          </>
        }
        title="Notifications"
      />
      <CardContent style={{ overflowY: "scroll", height: "250px" }}>
        {progress ? (
          <>
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
          </>
        ) : (
          <Box
            style={{
              height: "100%",
              width: "100",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
