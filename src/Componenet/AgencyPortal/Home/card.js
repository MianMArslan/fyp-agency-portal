import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

const HomeCard = (props) => {
  const { name, count } = props;
  const [cardName, setCardName] = useState(name);
  const [cardCount, setCardCount] = useState(count);
  return (
    <>
      <Card
        style={{
          width: "300px",
          borderRadius: "16px",
        }}
      >
        <CardHeader title={cardName} />
        <CardContent>
          <p style={{ fontSize: "25px" }}>
            {/* {!cardCount ? 0 : cardCount} */}
            <CountUp end={cardCount} duration={1} />
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default HomeCard;
