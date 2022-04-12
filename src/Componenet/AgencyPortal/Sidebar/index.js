import React from 'react';
import {Link} from "react-router-dom"
import  "../Sidebar/sidebar.css";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HomeIcon from '@mui/icons-material/Home';
import AddCardIcon from '@mui/icons-material/AddCard';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LockResetIcon from '@mui/icons-material/LockReset';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { FactCheck } from '@mui/icons-material';

const SidebarAgency = () => {
  return (
  <>
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <HomeIcon className="sidebarIcon" />
              Home
            </li>
            </Link>
            <Link to="/Order" className="link">
            <li className="sidebarListItem ">
              <AddShoppingCartIcon className="sidebarIcon" />
              Orders
            </li>
            </Link>
            <li className="sidebarListItem">
              <FactCheck className="sidebarIcon" />
              Manage Orders
            </li>
            <Link to="/deals" className='link'>
            <li className="sidebarListItem ">
              <LocalOfferIcon className="sidebarIcon" />
              Deals
            </li>
            </Link>
            <Link to="/ManageDeals" className='link'>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              Manage Deals
            </li>
            </Link>
            <Link to="/AddNewDeals" className='link'>
            <li className="sidebarListItem">
              <AddCardIcon className="sidebarIcon" />
              Add new Deals
            </li>
            </Link>
            <Link to="/ChangePassword" className='link'>
            <li className="sidebarListItem">
              <LockResetIcon className="sidebarIcon" />
              Change Password
            </li>
            </Link>
          </ul>
        </div>
        </div>
        </div>
  </>
    )
};

export default SidebarAgency;