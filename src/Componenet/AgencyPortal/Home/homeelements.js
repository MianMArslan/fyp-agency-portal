import styled from 'styled-components';

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    position: relavite;
    z-index: 1
`;

export const HeroBg = styled.div`
    position: absolute;
    margin-top: -65%;
    right: 0;
    bottom: 0;
    left: 22%;
    width: 70vw;
    height: 90vh;
    overflow: hidden;
`;
export const ImageBg = styled.img`
    width: 70vw;
    height: 90vh;
    opacity: 0.5
`

export const HeroContent = styled.div`
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    margin-top: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({lightText}) => (lightText ? '#fb9e00' : '#fb9e00')};
`;

export const HeroH1 = styled.h1`
    color: #fb9e00;
    font-size: 68px;
    text-align: center;

`;
export const HeroP = styled.p`
    color: black;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    justify-content: center;
    max-width: 600px;
`