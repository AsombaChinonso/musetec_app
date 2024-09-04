import React from "react";
import Sidebar from "../layouts/Sidebar";
import { fadeIn, staggerContainer } from "../utils/motion";
import Card from "../components/Card";
import { motion } from "framer-motion";
import { QuickActionCardsData } from "../data/LandingPageData";

function Dashboard() {
  return (
    <Sidebar>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className=" 2xl:max-w-[1280px] w-full  mx-auto "
      >
        <div className=" flex lg:flex-row md:flex-col-reverse flex-col-reverse w-full">
          {/* Column 1 */}
          <div className="flex flex-col flex-[0.95] w-full justify-items-start items-start">
            <h2 className=" text-xl font-bold text-[#850A9C] mt-2 mb-3">
              Account Balance
            </h2>
            {/* Item 1 - Account Overview */}
            <motion.div
              variants={fadeIn("left", "tween", 0.2, 1)}
              className=" w-full"
            >
              {/* <h2 className=' font-bold text-xl mb-4'>Overview</h2> */}
              <div
                className="pt-2 pb-4 border-b border-gray-900 w-full space-y-4 
        sm:max-h-[400px] max-h-[175px] sm:h-[310px] overflow-x-scroll scrollbar-hide "
              >
                <Card type="Mastercard" />
                <Card type="PayPal" />
                <Card type="Visa" />
                {/* <Card type="Visa" /> */}
              </div>
            </motion.div>

            {/* Item 2 - Recent Transactions */}
            <div className=" flex flex-col w-full mt-8 mb-8">
              <div className=" flex flex-row items-center justify-between">
                <h2 className="  text-xl font-bold text-[#850A9C]">
                  Recent Transactions
                </h2>
                <p className=" text-sm text-gray-700 ">View all</p>
              </div>

              <div className=" sm:h-[200px] h-[300px] overflow-y-scroll scrollbar-hide w-full ">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                  return (
                    <div
                      key={index}
                      className=" flex flex-row items-center justify-between bg-[#f1f1f1] hover:bg-[#F6E9FF] hover:text-[#850A9C] cursor-pointer border-b border-gray-200 py-2 px-3 rounded-md mb-[0.2rem]"
                    >
                      <div className=" flex flex-row ">
                        <p
                          className={` bg-[#F8F8F8] text-[#1a1a1a] py-2 px-4 rounded-md mr-4 font-bold`}
                        >
                          {index + 1}
                        </p>

                        <div className=" flex-1 flex flex-col">
                          <h1 className="text-left items-start sm:font-semibold font-normal tracking-wide  flex-1 justify-start sm:text-sm text-[0.75rem]">
                            {" "}
                            Item sold{" "}
                          </h1>
                          <small className=" text-gray-500 sm:text-[12px] text-[10px] ">
                            3, September 2024
                          </small>
                        </div>
                      </div>
                      <div>
                        <h1
                          className={`w-[25%] flex font-semibold sm:text-xl text-[0.85rem] sm:px-6 px-2  `}
                        >
                          50,000
                        </h1>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className=" flex flex-col flex-1 justify-items-start items-start sm:mx-10 mx-2 overflow-hidden"
          >
            <div className=" flex flex-col w-full justify-items-start items-start">
              <h2 className="  text-xl  font-bold text-[#850A9C] mt-2 mb-3">
                Quick Actions
              </h2>
              <div className=" flex flex-nowrap sm:h-[155px] h-[160px] w-full mb-3 gap-3 ">
                {/* <QuickActionCards /> */}

                {
                  QuickActionCardsData.slice(0,3).map((item, index) => {
                    return (
                      <div key={index} className=" relative p-6 w-32 h-40 bg-[#F6E9FF] flex flex-col gap-2 justify-evenly justify-items-center items-center rounded-md cursor-pointer hovered">
                        <p className=" text-3xl hover:text-[#850A9C]">
                          <item.icon />
                        </p>
                        <p className=" font-normal text-xs">
                        {item.name}
                        </p>
                        <div className=" hoveres absolute bg-[#59066A] bg-opacity-70 top-0 left-0 right-0 bottom-0 rounded-md">
                        <p className=" font-normal text-xs text-[#ffffff] p-2">
                        {item.desc}
                        </p>
                        </div>
                        
                      </div>
                    )
                  })
                }
               
              </div>
            </div>


            <div className=" hidden sm:flex flex-col w-full justify-items-start items-start">
              <h2 className="  text-xl  font-bold text-[#850A9C] mt-2 mb-3">
                Debit(s) & Credit(s)
              </h2>
              <div className=" sm:h-[400px] h-[300px] overflow-y-scroll scrollbar-hide w-full ">
                {[1, 2, 3, 4, 5, 6].map((item, index) => {
                  return (
                    <div
                      key={index}
                      className=" flex flex-row items-center justify-between bg-[#f1f1f1] hover:bg-[#F6E9FF] hover:text-[#850A9C] cursor-pointer border-b border-gray-200 py-2 px-3 rounded-md mb-[0.2rem]"
                    >
                      <div className=" flex flex-row ">
                        <p
                          className={` bg-[#F8F8F8] text-[#1a1a1a] py-2 px-4 rounded-md mr-4 font-bold`}
                        >
                          {index + 1}
                        </p>

                        <div className=" flex-1 flex flex-col">
                          <h1 className="text-left items-start sm:font-semibold font-normal tracking-wide  flex-1 justify-start sm:text-sm text-[0.75rem]">
                            {" "}
                            Item sold{" "}
                          </h1>
                          <small className=" text-gray-500 sm:text-[12px] text-[10px] ">
                            3, September 2024
                          </small>
                        </div>
                      </div>
                      <div>
                        <h1
                          className={`w-[25%] flex font-semibold sm:text-xl text-[0.85rem] sm:px-6 px-2  `}
                        >
                          50,000
                        </h1>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            
          </motion.div>
        </div>
      </motion.div>
    </Sidebar>
  );
}

export default Dashboard;
