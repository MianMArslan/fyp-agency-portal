import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { red } from "@mui/material/colors";
import * as React from "react";
import "./notificationCard.css";
import tz from "moment-timezone";

export default function NotificationCard(props) {
  const { data } = props;
  console.log(data);
  return (
    <Card
      style={{
        width: "100%",
        marginBottom: "5px",
        cursor: "pointer",
        boxShadow: data.isRead ? "2px 2px green" : "2px 2px red",
      }}
      elevation={2}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title={data.message}
        subheader={tz(data.createdAt).format("MMM Do YY")}
      />
    </Card>
  );
}
