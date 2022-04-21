import React from 'react'
import img1 from '../../images/off the beaten track.png';
import "aos/dist/aos.css"
import { HeroContainer, 
    HeroBg,
    ImageBg,
    HeroContent,
    HeroH1,
} from './homeelements';
import HomeCard from './card';
import { Container, Grid } from '@mui/material';
import { AddsData } from '../mock-data';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Homepage = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return (
        <HeroContainer>
            <HeroBg>
                <ImageBg  src={img1} type ='image/png' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Welcome to Agency Portal</HeroH1>
                <Container>
                    <Grid container spacing={4} columns={16} >
                    {AddsData.map(carddetail => (
                        <Grid item xs={8} key = {carddetail.id} >
                            {/* <Item> */}
                        <HomeCard carddetail = {carddetail} />
                        {/* </Item> */}
                        </Grid>
                        ))}
                    </Grid>
                </Container>
            </HeroContent>
        </HeroContainer>
    )
}
export default Homepage;

