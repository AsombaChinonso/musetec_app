import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BiHome, BiLogOut } from "react-icons/bi";
import { FaListAlt, FaUser } from "react-icons/fa";
import useAlert from "../utils/useAlert";
import Alert from "../components/Alert";

function MobileFooter() {
  const active = "bg-white text-black";
  const inActive =
    " flex flex-col justify-center items-center transition duration-300 ease-in text-2xl hover:bg-[#850A9C] hover:text-white text-[#850A9C] rounded-md px-4 py-3 ";
  const Hover = ({ isActive }) =>
    isActive ? `${active} ${inActive}` : inActive;


    // alert actions || notifications
    const { alert, showAlert, hideAlert } = useAlert();
    const navigate = useNavigate();
  
    const handleClick = () => {
      showAlert({
        show: true,
        text: "Logout Successfully,",
        type: "success",
      });
      setTimeout(() => {
        hideAlert(false);
        navigate("/");
      }, [1000]);
    };
  return (
    <>
      <div className=" flex justify-between items-center h-full bg-black rounded cursor-pointer overflow-y-scroll flex-grow -full">
        {/* Drawer */}
      </div>
      {alert.show && <Alert {...alert} />}
      <footer className="lg:hidden fixed bottom-0 w-full px-1 bg-white py-2">
        <div className="from-[#3C3D3E] via-[#021001 ] to-[#030303] rounded-md flex justify-between items-center w-full px-1">
          <NavLink to={`/dashboard`} className={Hover}>
            <BiHome />
          </NavLink>
          <NavLink to={`/transactions`} className={Hover}>
            <FaListAlt />
          </NavLink>
          <NavLink to={`/user`} className={Hover}>
            <FaUser />
          </NavLink>
          <button onClick={()=>handleClick()} className={Hover}>
          <BiLogOut />
          </button>
        </div>
      </footer>
    </>
  );
}

export default MobileFooter;
