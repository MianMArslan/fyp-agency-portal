import React from 'react'
import img1 from '../../images/off the beaten track.png';
import "aos/dist/aos.css"
import { HeroContainer, 
    HeroBg,
    ImageBg,
    HeroContent,
    HeroH1,
    HeroP
} from './homeelements';


const Homepage = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <ImageBg  src={img1} type ='image/png' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Welcome to Agency Portal</HeroH1>
                <HeroP>We offer the services to create eidt and make the new adds for your company
                </HeroP>
            </HeroContent>
            
        </HeroContainer>
    )
}
export default Homepage;