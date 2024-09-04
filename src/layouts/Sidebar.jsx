import React from 'react'
import Navbar from './navbar/Navbar';
import { NavLink } from 'react-router-dom';
import { fadeAnimation } from '../utils/motion';
import logo from "../assets/logo.png"
import MobileFooter from '../components/MobileFooter';
import { BsFillGridFill } from 'react-icons/bs';
import { FaListAlt, FaUser } from 'react-icons/fa';
import { RiLockPasswordLine, RiMovie2Fill } from 'react-icons/ri';
import { HiViewGridAdd } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';

const Sidebar = ({children}) => {
  const SideLinks = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: BsFillGridFill,
    },
    {
      name: "Transactions",
      link: "/transactions",
      icon: FaListAlt,
    },
    {
      name: "Receipt",
      link: "/receipt",
      icon: RiMovie2Fill,
    },
    
    {
      name: "Create Invoice",
      link: "/create",
      icon: HiViewGridAdd,
    },
    {
      name: "User",
      link: "/user",
      icon: FaUser,
    },
    {
      name: "Settings",
      link: "/settings",
      icon: FiSettings,
    },
    {
      name: "Change Password",
      link: "/password",
      icon: RiLockPasswordLine,
    },
  ];

  const active = " bg-black text-[#C183CD] hover:text-white";
  const hover = " hover:bg-[#F6E9FF] hover:text-[#850A9C] text-white ";
  const inActive =
    " rounded font-medium text-sm transitions flex gap-3 items-center p-3";
  const Hover = ({ isActive }) =>
    isActive ? `${active} ${inActive}` : `${inActive} ${hover}`;

  return (
    <div className="bg-[#FAFAFA] text-black">
      <Navbar />
      <div className=" min-h-screen container mx-auto px-2">
        <div className=" xl:grid grid-cols-8 gap-10 items-start md:py-12 py-6">
          <div className="hidden lg:block col-span-2 sticky top-0 shadow-md bg-gradient-to-r from-[#3C3D3E] via-[#021001 ] to-[#030303] border border-gray-800 p-6 rounded-md xl:mb-0 mb-5">
          <img
          {...fadeAnimation}
          src={logo}
          alt=""
          srcset=""
          className="  flex w-12 h-12 bg-[#f6e9ff] rounded-md p-1 my-5"
        />
            {SideLinks.map((sidelink, index) => (
              <NavLink to={sidelink.link} key={index} className={Hover}>
                <sidelink.icon />
                <p>{sidelink.name}</p>
              </NavLink>
            ))}
          </div>

          <div 
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="10"
          data-aos-offset="100"
          className=" col-span-6 rounded-md bg-gray-200 text-black border border-[#F6E9FF] p-6 ">
            {children}
          </div>

          
        </div>
      </div>
      
      <MobileFooter />
    </div>
  );
}

export default Sidebar