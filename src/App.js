import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarAgency from "./Componenet/AgencyPortal/Navbar/Navbar";
import Cards from "./Componenet/AgencyPortal/Orders/index";
import NewDeals from "./Componenet/AgencyPortal/Adddeals/adddeals";
import SidebarAgency from './Componenet/AgencyPortal/Sidebar/index';
import { UploadingFile } from './Componenet/AgencyPortal/img';
import Homepage from './Componenet/AgencyPortal/homepage';
import Deals from './Componenet/AgencyPortal/Deals';
function App() {
  return (
    <Router >
       <NavbarAgency />
       <div classname = 'container'>
       <SidebarAgency />
       <Routes>
       <Route path= "/" element = {<Homepage />}></Route>
         <Route path= "/Order" element = {<Cards />}></Route>
         <Route path= "/AddDeals" element = {<NewDeals />}></Route>
         <Route path= "/Deals" element = {<Deals />}></Route>
       </Routes>
       </div>
      {/* <UploadingFile /> */}
      
    </Router>
  );
}

export default App;
