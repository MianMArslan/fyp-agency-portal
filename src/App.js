import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarAgency from "./Componenet/AgencyPortal/Navbar/Navbar";
import Cards from "./Componenet/AgencyPortal/Orders/index";
import SidebarAgency from './Componenet/AgencyPortal/Sidebar/index';
import AddNewDeals from './Componenet/AgencyPortal/NewAddDeals';
import Homepage from './Componenet/AgencyPortal/homepage';
import {Home} from './Componenet/AgencyPortal/Home/index'
function App() {
  return (
    <Router >
       <NavbarAgency />
       <div classname = 'container'>
       <SidebarAgency />
       <Routes>
       <Route path= "/" element = {<Homepage />}></Route>
         <Route path= "/Order" element = {<Cards />}></Route>
         <Route path= "/AddNewDeals" element = {<AddNewDeals />}></Route>
         <Route path= "/Deals" element = {<Home />}></Route>
       </Routes>
       </div>
      
    </Router>
  );
}

export default App;
