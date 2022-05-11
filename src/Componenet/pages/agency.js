import React from 'react'
import NavbarAgency from "../AgencyPortal/Navbar/Navbar";
import Cards from "../AgencyPortal/Orders/index";
import Homepage from "../AgencyPortal/Home/homepage";
import AddNewDeals from "../AgencyPortal/NewAddDeals/index";
import Deals from "../AgencyPortal/Deals/index";
import ManageDeals from "../AgencyPortal/Managedeals/index";
import AppLayout from "../AgencyPortal/Sidebar/layout";
import ChangePassword from "../AgencyPortal/ChangePassword/index"
const Agency = () => {
  return (
      <>
    <AppLayout>
    {/* <NavbarAgency> */}
    <Homepage />
    <Cards />
    <AddNewDeals />
    <ManageDeals />
    <ChangePassword />
    <Deals />
    {/* </NavbarAgency> */}
    </AppLayout>
    </>
  )
}

export default Agency