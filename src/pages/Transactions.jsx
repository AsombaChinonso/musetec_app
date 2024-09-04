import React, { useState } from "react";
import Sidebar from "../layouts/Sidebar";
import { staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";

function Transactions() {

  const maxPage = 5;
  const [page, setPage] = useState(maxPage);

  const handleLoadingMore = () => {
    setPage(page + maxPage);
  };

    return (
    <Sidebar>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className=" 2xl:max-w-[1280px] w-full  mx-auto flex flex-col justify-items-start items-start gap-3 "
        
      >
        <h2 className="  text-xl font-bold text-[#850A9C]">
                  Transactions
                </h2>
        <div 
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="10"
        data-aos-offset="100"
        className="  overflow-y-scroll scrollbar-hide w-full ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]?.slice(0, page)?.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex flex-row items-center justify-between bg-[#f1f1f1] hover:bg-[#F6E9FF] hover:text-[#850A9C] cursor-pointer border-b border-gray-200 py-2 px-3 rounded-md mb-[0.2rem] `}
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

        {/* Load more */}
        <div className="w-full flex flex-col justify-center items-center my-4 ">
            <button onClick={handleLoadingMore} className="flex flex-row justify-center items-center gap-3 py-3 px-8 rounded font-semibold bg-black transition duration-300 ease-in hover:bg-[#850A9C] border border-[#850A9C] text-white">
              Load More
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="animate-spin"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.2"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
      </motion.div>
    </Sidebar>
  );
}

export default Transactions;
