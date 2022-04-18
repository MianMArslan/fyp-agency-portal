import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.css';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HomeIcon from '@mui/icons-material/Home';
import AddCardIcon from '@mui/icons-material/AddCard';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LockResetIcon from '@mui/icons-material/LockReset';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { FactCheck } from '@mui/icons-material';

const sidebarNavItems = [
    {
        display: 'Home',
        icon: <HomeIcon />,
        to: '/',
        section: ''
    },
    {
        display: 'Orders',
        icon: <AddShoppingCartIcon />,
        to: "/Order",
        section: 'Order'
    },
    {
        display: 'Deals',
        icon: <LocalOfferIcon />,
        to: '/Deals',
        section: 'Deals'
    },
    {
        display: 'Manage Deals',
        icon: <TrendingUpIcon />,
        to: '/ManageDeals',
        section: 'ManageDeals'
    },
    {
        display: 'Add New Deals',
        icon: <AddCardIcon />,
        to: '/AddNewDeals',
        section: 'AddNewDeals'
    },
    {
        display: 'Change Password',
        icon: <LockResetIcon />,
        to: '/ChangePassword',
        section: 'ChangePassword'
    },
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar'>
        <div className="sidebar__logo">
            Dashboard
        </div>
        <div ref={sidebarRef} className="sidebar__menu">
            <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>;
};

export default Sidebar;
