import React, {useState} from "react";
import SideBar from "../MainFrontend/SideBar";
import Navbar from "../MainFrontend/Navbar";
import Hero from "../MainFrontend/Hero";
import Destination from "../MainFrontend/Destinations";
import Deals from "../MainFrontend/Deals";
import Aboutpage from "../MainFrontend/AboutPage"
import Footer from "../MainFrontend/footer/footer";
import { homeObjtwo } from "../MainFrontend/Deals";
import { homeObjthree } from "../MainFrontend/Destinations";
import { homeObjfour } from "../MainFrontend/footer/footer";
import { homeObjSix } from "../MainFrontend/Hero";
import { homeObjOne} from "../MainFrontend/AboutPage";

const Home = () => {
    
    const [isOpen , setIsOpen] = useState(false);
    const toggle = () => {
    setIsOpen(!isOpen)
    }


    return (
        <>

        <SideBar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}  />
        <Hero {...homeObjSix}/>
        <Destination {...homeObjthree}/>
        <Deals {...homeObjtwo}/>
        <Aboutpage {...homeObjOne} />
        <Footer {...homeObjfour}/>  
        </>
    )
    }
export default Home;