import { Card, CardContent, CardHeader } from "@mui/material";
import React from "react";
import CountUp from "react-countup";

const HomeCard = (props) => {
  const { name, count } = props;

  return (
    <>
      <Card
        style={{
          width: "300px",
          borderRadius: "16px",
        }}
      >
        <CardHeader title={name} />
        <CardContent>
          <p style={{ fontSize: "25px" }}>
            {/* {!cardCount ? 0 : cardCount} */}
            <CountUp end={count} duration={1} />
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default HomeCard;
