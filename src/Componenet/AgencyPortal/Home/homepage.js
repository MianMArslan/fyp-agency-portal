import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import img1 from "../../images/off the beaten track.png";
import "aos/dist/aos.css";
import {
  HeroContainer,
  HeroBg,
  ImageBg,
  HeroContent,
  HeroH1,
} from "./homeelements";
import HomeCard from "./card";
import RingLoader from "react-spinners/RingLoader";
import { Container } from "@mui/material";
import { GET } from "../../../services/httpClient";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Homepage = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const [countActive, setCountActive] = useState("");
  const [orderCount, setOrderCount] = useState([]);
  let [color, setColor] = useState("#fb9e00");

  useEffect(() => {
    setTimeout(async () => {
      await getActiveCount();
      await getOrderCount();
    }, 5000);
  }, []);

  async function getActiveCount() {
    let res = await GET("/agency/count");
    if (res) setCountActive(res);
  }
  async function getOrderCount() {
    let res = await GET("/agency/orderCount");
    if (res) setOrderCount(res);
  }
  return (
    <HeroContainer>
      <HeroBg>
        <ImageBg style={{ opacity: "0.25" }} src={img1} type="image/png" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome to Agency Portal</HeroH1>
        <Container>
          {countActive && (
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <HomeCard name={"Active Ads"} count={countActive[0].active} />
              <HomeCard name={"InActive Ads"} count={countActive[1].inActive} />
            </Box>
          )}
          {!countActive && (
            <RingLoader
              color={color}
              css={override}
              loading={!countActive ? true : false}
            />
          )}
        </Container>
        <Container style={{ marginTop: "30px" }}>
          {countActive && (
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <HomeCard name={"Total Booking"} count={orderCount[1]} />
              <HomeCard name={"Pending Booking"} count={orderCount[0]} />
            </Box>
          )}
          {!countActive && (
            <RingLoader
              color={color}
              css={override}
              loading={!countActive ? true : false}
            />
          )}
        </Container>
      </HeroContent>
    </HeroContainer>
  );
};
export default Homepage;
