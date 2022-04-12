import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarAgency from "./Componenet/AgencyPortal/Navbar/Navbar";
import Cards from "./Componenet/AgencyPortal/Orders/index";
import SidebarAgency from "./Componenet/AgencyPortal/Sidebar/index";
import Homepage from "./Componenet/AgencyPortal/Home/homepage";
import ChangePassword from "./Componenet/AgencyPortal/ChangePassword/index";
import AddNewDeals from "./Componenet/AgencyPortal/NewAddDeals/index"
import Deals from "./Componenet/AgencyPortal/Deals/index"
import ManageDeals from "./Componenet/AgencyPortal/Managedeals/index";
// import EditDeals from "./Componenet/AgencyPortal/Edit/index"


function App() {
  return (
    <Router >
       <NavbarAgency />
       {/* <div className = "container"> */}
       <SidebarAgency /> 
        <Routes>
       <Route path= "/" element = {<Homepage />}></Route>
         <Route path= "/Order" element = {<Cards />}></Route>
         <Route path= "/AddNewDeals" element = {<AddNewDeals />}></Route>
         <Route path="/ManageDeals" element = {<ManageDeals />}></Route>
         <Route path= "/ChangePassword" element = {<ChangePassword />}></Route>
         <Route path= "/Deals" element = {<Deals />}></Route>
         {/* <Route path ="/EditDeals" element = {<EditDeals />}></Route> */}
       </Routes>  
       {/* </div> */}
    </Router>
  );
}

export default App;
