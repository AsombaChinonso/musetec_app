import React, { useState } from "react";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { fadeAnimation, fadeIn, staggerContainer } from "../utils/motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { LandingPageData } from "../data/LandingPageData";
import useAlert from "../utils/useAlert";
import Alert from "../components/Alert";

function LandingPage() {
  // sign up and login component switching
  const [activeTab, setActiveTab] = useState("login");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // alert actions || notifications
  const { alert, showAlert, hideAlert } = useAlert();

  return (
    <div className="flex sm:flex-row flex-col  bg-[#FAFAFA]  h-screen gap-4">
      {/* Left section - with image */}
      <Swiper
        direction="vertical"
        spaceBetween={0}
        slidePerView={1}
        loop={true}
        speed={1000}
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className=" hidden sm:flex flex-1 bg-[#FAFAFA] relative"
      >
        <div className="w-full bg-cover bg-center backgroundImg1  rounded-md sm:m-6 m-2 bg-[#000] relative ">
          <div className=" absolute top-0 left-0 opacity-50 bg-[#000] w-full h-full  rounded-md" />
          <img
            src={logo}
            alt=""
            srcset=""
            className=" absolute right-8 top-8 w-16 h-16 bg-white rounded-md p-1"
          />
          <div className=" absolute top-[30%]  text-center items-center justify-center w-full">
            <h1 className=" mx-auto w-[30rem] sm:text-3xl text-xl text-white font-semibold">
              Funds Collections & reimbursements on the go.
            </h1>
            <p className="mx-auto w-[30rem] text-white text-sm font-normal p-8">
              Secure payment gateway to collect payments from customers
              anywhere, anytime.
            </p>

            <div className="bg-gradient-to-r from-[#A245B5] via-[#8A0BAC ] to-[#59066A] opacity-100 w-full p-12 mt-36 ">
              <p className="mx-auto w-[30rem] text-white text-sm font-normal leading-6 ">
                "Good job to pie team, our business just got smarter."
              </p>
              <small className="text-gray-200 text-sm font-semibold pt-3">
                Divine U{" "}
              </small>{" "}
              <br />
              <small className="text-gray-200 text-[14px] pt-3"> </small>
            </div>
          </div>
        </div>
      </Swiper>

      {/* Right section - Login & Sign-up section*/}
      <div className="flex flex-col flex-[0.95] bg-[#FAFAFA] items-center justify-center  ">
        <img
          {...fadeAnimation}
          src={logo}
          alt=""
          srcset=""
          className="  flex w-16 h-16 bg-[#f6e9ff] rounded-md p-1"
        />
        <div className="mx-auto sm:w-[28rem] w-80 sm:p-10 p-6 rounded-md flex flex-col  items-center justify-center">
          {activeTab === "signup" && <SignupPage active={setActiveTab} />}
          {activeTab === "login" && <LoginPage active={setActiveTab} />}
        </div>
      </div>
    </div>
  );
}

const LoginPage = ({ active }) => {
  const [clicked, setClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // alert actions || notifications
  const { alert, showAlert, hideAlert } = useAlert();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setClicked(true);
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      if (response.status === 200) {
        // Redirect to dashboard upon successful login
        showAlert({
          show: true,
          text: "Login Successfully,",
          type: "success",
        });
        setTimeout(() => {
          hideAlert(false);
        }, [1000]);
        window.location.href = "/dashboard";
      }
    } catch (error) {
      if (error.response) {
        // Handle error response from server
        // alert(error.response.data.message);
        showAlert({
          show: true,
          text: error.response.data.message,
          type: "danger",
        });

        setClicked(true);
        setTimeout(() => {
          hideAlert(false);
        }, [1000]);
        setClicked(false);
      } else {
        // Handle any other errors
        console.error("Login error:", error);
        // alert("An error occurred. Please try again.");
        showAlert({
          show: true,
          text: "An error occurred. Please try again.",
          type: "danger",
        });

        setClicked(true);
        setTimeout(() => {
          hideAlert(false);
        }, [1000]);
        setClicked(false);
      }
    }
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=" text-center sm:w-80 w-full  "
    >
      <>
        {alert.show && <Alert {...alert} />}
        <motion.div variants={fadeIn("up", "tween", 0.2, 0.5)}>
          <h2 className="text-2xl font-bold  ">Welcome back</h2>
          <small className="text-gray-500 text-sm font-normal pt-1">
            Let's log you in
          </small>

          <form
            action=""
            className=" flex flex-col w-full mt-6"
            onSubmit={handleSubmit}
          >
            {/* Email */}
            <div className=" relative z-0 transition-all focus-within:z-10 mb-6">
              <input
                type="email"
                name=""
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                placeholder="Email "
                className=" rounded-md peer block w-full border border-neutral-300 bg-transparent px-2 pb-2 pt-2 text-[12px] text-neutral-950 ring-4 ring-transparent transition focus:border-[#e048ff] focus:outline-none focus:ring-[#860A9F]/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
              />
            </div>

            <div className=" relative z-0 transition-all focus-within:z-10 mt-0">
              <input
                type="password"
                name=""
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete=" "
                placeholder="Password "
                className=" rounded-md peer block w-full border border-neutral-300 bg-transparent px-2 pb-2 pt-2 text-[12px] text-neutral-950 ring-4 ring-transparent transition focus:border-[#e048ff] focus:outline-none focus:ring-[#860A9F]/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
              />
            </div>

            <div className="my-6 items-center justify-center flex  w-full border-dashed border rounded lg border-gray-200 bg-[#550786] hover:bg-[#860A9F] py-3 text-[#ffffff] hover:text-[#ffffff] duration-300 ease-in-out cursor-pointer">
              <button
                // onClick={() => handleClick()}
                disabled={clicked}
                type="submit"
                className="w-full text-[12px] "
              >
                {clicked ? `loading...` : `Sign in`}
              </button>
            </div>
          </form>

          <div className=" flex items-center justify-center gap-3 mt-2 ">
            <p className="text-center text-[12px]">
              New user?{" "}
              <span
                onClick={() => {
                  active("signup");
                }}
                className=" underline font-semibold cursor-pointer"
              >
                Create a new account
              </span>{" "}
            </p>
          </div>
        </motion.div>
      </>

      <div className=" flex flex-row items-center justify-between gap-3 mt-20 ">
        <p className="text-center sm:text-[11px] text-[10px] underline font-normal cursor-pointer text-gray-500"> 
        Privacy & Service
        </p>
        <p className="text-center sm:text-[11px] text-[10px] underline font-normal cursor-pointer text-gray-500"> 
        Terms & Conditions
        </p>
        <p className="text-center sm:text-[11px] text-[10px] underline font-normal cursor-pointer text-gray-500"> 
          Support
        </p>
      </div>
    </motion.div>
  );
};

const SignupPage = ({ active }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // alert actions || notifications
  const { alert, showAlert, hideAlert } = useAlert();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    showAlert({
      show: true,
      text: "Your account has been created!, you can now login in",
      type: "success",
    });
    setTimeout(() => {
      hideAlert(false);
      active("login");
    }, [1000]);
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=" text-center sm:w-90 w-full "
    >
      {alert.show && <Alert {...alert} />}
      <motion.div variants={fadeIn("up", "tween", 0.2, 0.5)}>
        <h2 className="text-2xl font-bold  ">Welcome! Begin your Journey.</h2>
        {/* <small className="text-gray-500 text-sm font-normal pt-1">
            Let's log you in
          </small> */}

        <form
          action=""
          className=" flex flex-col w-full mt-6"
          onSubmit={handleClick}
        >
          {/* Email */}
          <div className=" relative z-0 transition-all focus-within:z-10 mb-4">
            <input
              type="email"
              name=""
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              placeholder="Email "
              className=" rounded-md peer block w-full border border-neutral-300 bg-transparent px-2 pb-2 pt-2 text-[12px] text-neutral-950 ring-4 ring-transparent transition focus:border-[#e048ff] focus:outline-none focus:ring-[#860A9F]/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
            />
          </div>

          <div className=" relative z-0 transition-all focus-within:z-10 mt-0 mb-4">
            <input
              type="password"
              name=""
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete=" "
              placeholder="Password "
              className=" rounded-md peer block w-full border border-neutral-300 bg-transparent px-2 pb-2 pt-2 text-[12px] text-neutral-950 ring-4 ring-transparent transition focus:border-[#e048ff] focus:outline-none focus:ring-[#860A9F]/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
            />
          </div>

          <div className=" relative z-0 transition-all focus-within:z-10 mt-0 ">
            <input
              type="password"
              name=""
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete=" "
              placeholder="Confirm Password "
              className=" rounded-md peer block w-full border border-neutral-300 bg-transparent px-2 pb-2 pt-2 text-[12px] text-neutral-950 ring-4 ring-transparent transition focus:border-[#e048ff] focus:outline-none focus:ring-[#860A9F]/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
            />
          </div>

          <div className="my-6 items-center justify-center flex  w-full border-dashed border rounded lg border-gray-200 bg-[#550786] hover:bg-[#860A9F] py-3 text-[#ffffff] hover:text-[#ffffff] duration-300 ease-in-out cursor-pointer">
            <button
              type="submit"
              className="w-full text-[12px]"
              // onClick={() => handleClick()}
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className=" flex items-center justify-center gap-3 mt-2 ">
          <p className="text-center text-[12px]">
            Already have an account?{" "}
            <span
              onClick={() => {
                active("login");
              }}
              className=" underline font-semibold cursor-pointer"
            >
              Sign in
            </span>{" "}
          </p>
        </div>

        {/* for vendor */}
        <div className=" flex items-center justify-center gap-3 mt-4 ">
          <p className="text-center text-[12px]">
            Are you a vendor?{" "}
            <span
              onClick={() => {
                active("login");
              }}
              className=" underline font-semibold cursor-pointer"
            >
              Start here
            </span>{" "}
          </p>
        </div>


        <div className=" flex flex-row items-center justify-between gap-3 mt-20 ">
        <p className="text-center sm:text-[11px] text-[10px] underline font-normal cursor-pointer text-gray-500"> 
        Privacy & Service
        </p>
        <p className="text-center sm:text-[11px] text-[10px] underline font-normal cursor-pointer text-gray-500"> 
        Terms & Conditions
        </p>
        <p className="text-center sm:text-[11px] text-[10px] underline font-normal cursor-pointer text-gray-500"> 
          Support
        </p>
      </div>
      </motion.div>
    </motion.div>
  );
};



export default LandingPage;
