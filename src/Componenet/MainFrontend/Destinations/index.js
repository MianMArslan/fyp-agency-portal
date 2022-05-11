import React from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import "./destination.css";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
export const homeObjthree = {
    id:'destination'
}
const Destination = ({id}) => {
 const slides = [
     {image: img1, title: "Hunza", description: "Explore the Hunza in two days"},
     {image: img2, title: "Murree", description: "Explore the Murree in two days"},
     {image: img3, title: "Naran", description: "Explore the Naran in two days"},
     {image: img1, title: "Gilgit", description: "Explore the Gilgit in two days"},
     {image: img2, title: "hunza", description: "Explore the hunza in two days"},
     {image: img3, title: "Murree", description: "Explore the Murree in two days"},
     {image: img1, title: "Naran", description: "Explore the Naran in two days"},
     {image: img2, title: "Gilgit", description: "Explore the Gilgit in two days"},
     {image: img3, title: "hunza", description: "Explore the hunza in two days"},

 ];

 const slideleft = ()=>{
     var slider = document.getElementById("slider");
     slider.scrollLeft = slider.scrollLeft - 750; 

 }

 const slideright = ()=>{
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 650; 

}
  return (
           <> 
    <div className = 'main-container'>
    <div id = 'main-slider-container'>
    <h1 className = 'DealsH1'>Destination</h1>
    <h2 className = 'DealsH2'>OFF THE BEATEN TRACK</h2>
        <KeyboardArrowLeftIcon size = {40} className = 'slider-icon left' onClick={slideleft} />
        <div id = "slider">
           {
               slides.map((slide,index) =>{
                return(
                    <div className = 'slider-card' key = {index}>
                        <div className = 'slider-card-image' style={{backgroundImage:`url(${slide.image})`,backgroundSize:'cover'}}>
                        </div>
                        <p className='slider-card-title'>{slide.title}</p>
                        <p className='slider-card-description'>{slide.description}</p>
                    </div>
                )
               })
           }
        </div>
        <ChevronRightIcon size = {40}  className = 'slider-icon right' onClick={slideright} />
        </div>

    </div>
    </>  
  )
}

export default Destination