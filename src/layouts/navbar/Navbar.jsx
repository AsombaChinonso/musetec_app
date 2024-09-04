import React from "react";
import { TypingText } from "../../utils/CustomTexts";
import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";
import ae from "../../assets/ae.jpg";
import { search_icon, notif_icon } from "../../utils/svgs";
import { Link } from "react-router-dom";
import useAlert from "../../utils/useAlert";
import Alert from "../../components/Alert";
import { useNavigate } from "react-router-dom";
search_icon;

const Navbar = () => {
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
    <motion.header
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="bg-[#F1F1F1] shadow"
    >
      {alert.show && <Alert {...alert} />}
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Toggle Sidebar Button */}
          <div className="flex flex-row gap-3 items-center justify-start">
            <img
              className="w-8 h-8 rounded-full object-center object-cover"
              src={ae}
              alt="goshen_logo"
            />
            {/* <div className='w-8 h-8 rounded-full bg-[#1a1a1a] p-2 text-[#B9D637] text-center items-center font-bold'>T</div> */}
            <div className=" flex flex-col justify-items-start items-start">
              <TypingText
                title={"| Welcome, Emmanuel "}
                textStyles={`text-center sm:text-sm text-base`}
              />
            </div>
          </div>

          {/* Other Navbar elements */}
          <div className=" flex flex-row gap-8 items-center justify-center">
            {/* <p>🌙</p>
                                    <h1>✋</h1> */}
            {/* <div className=' hidden sm:flex'>{totalIncome()}</div> */}
            <div className=" hidden sm:flex">{search_icon}</div>
            <div className=" hidden sm:flex">{notif_icon}</div>

            <button
              onClick={() => handleClick()}
              className=" hover:bg-[#550786] bg-[#860A9F] sm:px-4 sm:py-2 px-2 py-1 text-sm rounded-md text-[#ffffff] duration-200 ease-in cursor-pointer hidden sm:flex"
            >
              Log out
            </button>
          </div>
          {/* ... */}
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
