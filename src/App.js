import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarAgency from "./Componenet/AgencyPortal/Navbar/Navbar";
import Cards from "./Componenet/AgencyPortal/Orders/index";
import Homepage from "./Componenet/AgencyPortal/Home/homepage";
import ChangePassword from "./Componenet/AgencyPortal/ChangePassword/index";
import AddNewDeals from "./Componenet/AgencyPortal/NewAddDeals/index";
import Deals from "./Componenet/AgencyPortal/Deals/index";
import ManageDeals from "./Componenet/AgencyPortal/Managedeals/index";
import AppLayout from "./Componenet/AgencyPortal/Sidebar/layout";

function App() {
  return (
    <Router>
      <NavbarAgency />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/Order" element={<Cards />} />
          <Route path="/AddNewDeals" element={<AddNewDeals />} />
          <Route path="/ManageDeals" element={<ManageDeals />} />
          <Route path="/ChangePassword" element={<ChangePassword />} />
          <Route path="/Deals" element={<Deals />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
