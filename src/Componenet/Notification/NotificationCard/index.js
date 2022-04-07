import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { red } from "@mui/material/colors";
import * as React from "react";
import "./notificationCard.css";

export default function NotificationCard() {
  return (
    <Card
      style={{ width: "100%", marginBottom: "5px", cursor: "pointer" }}
      elevation={2}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella Shrimp and Chorizo Paella Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
    </Card>
  );
}
