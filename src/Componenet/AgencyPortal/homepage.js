import React from "react";
import img1 from "../images/off the beaten track.png";
const styles = {
    container: {
        backgroundImage: `url(${img1})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '70vw',
        height: '90vh',
        marginTop: "-65%",
        marginLeft: "20%",
        opacity: "0.5"
    }
};
const Homepage = () => {
    return (
        <>
               <img src={img1} alt = " " style = {styles.container}/>
            
          </>  
    )
}

export default Homepage;