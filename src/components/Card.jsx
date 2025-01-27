import React, { useEffect } from 'react'
// import apiCalls from '../redux1/apiCalls/apiCalls';


function Card({type}){

  const totalBalance = 1434110;
  const totalExpenses = 455890;
  const totalIncome = 1890000;



  return (
    <div className={`${type==="Mastercard"? "bg-gradient-to-r from-[#A245B5] via-[#8A0BAC ] to-[#860A9F]" : type==="PayPal" ? "bg-gradient-to-r from-[#3C3D3E] via-[#021001 ] to-[#030303]" : "bg-gradient-to-r from-[#59066A] via-[#8A0BAC ] to-[#59066A]"} w-full rounded-md py-2 px-3 gap-2 cursor-pointer `}>
      <div className=' flex flex-col justify-items-start items-start'>
          <h1 className={`${type==="Mastercard" ? "text-gray-100" : type==="PayPal" ? "text-[#F6E9FF]" : "text-gray-100"}`}>{type==="Mastercard"? "Total Income" : type==="PayPal" ? "Total Expense" : "Available Balance"}</h1>
          <div className=' flex  flex-row items-center justify-start'>
          <p className={`${type==="Mastercard" ? "text-gray-100" : type==="PayPal" ? "text-[#F6E9FF]" : "text-gray-100"} font-bold sm:text-4xl text-3xl line-through decoration-double`}>N</p>
          <h1 className={` sm:text-4xl text-3xl my-3 font-semibold ${type==="Mastercard" ? "text-gray-100" : type==="PayPal" ? "text-[#F6E9FF]" : "text-gray-100"}`}>
            {type==="Mastercard" ? <>{totalIncome?.toLocaleString()}</>: type==="PayPal" ? <>{totalExpenses?.toLocaleString()}</> : <>{totalBalance?.toLocaleString()}</>}</h1>
          </div>
      </div>
        <h1  className={`items-end justify-end flex w-full lg:h-[90px] sm:h-[100px] ${type==="Mastercard" ? "text-gray-100" : type==="PayPal" ? "text-[#F6E9FF]" : "text-[#ffffff]"}`}>
            01/2023  
        </h1>
        <div className="flex justify-between">
        {type === "Visa" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            className=" fill-gray-100"
          >
            <path
              d="M32.5,9.5c-3.177,0-6.108,1.039-8.5,2.778C21.608,10.539,18.677,9.5,15.5,9.5C7.505,9.5,1,16.005,1,24s6.505,14.5,14.5,14.5	c3.177,0,6.108-1.039,8.5-2.778c2.392,1.739,5.323,2.778,8.5,2.778C40.495,38.5,47,31.995,47,24S40.495,9.5,32.5,9.5z M24,31.719	c-1.857-2.043-3-4.747-3-7.719s1.143-5.676,3-7.719c1.857,2.043,3,4.747,3,7.719S25.857,29.676,24,31.719z M32.5,35.5	c-2.291,0-4.422-0.681-6.217-1.84C28.586,31.092,30,27.712,30,24s-1.414-7.092-3.717-9.66c1.795-1.159,3.926-1.84,6.217-1.84
                                  C38.841,12.5,44,17.659,44,24S38.841,35.5,32.5,35.5z"
            ></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 32 32"
            className=" fill-gray-900"
          >
            <path
              d="M 5 6 C 3.355469 6 2 7.355469 2 9 L 2 23 C 2 24.644531 3.355469 26 5 26 L 27 26 C 28.644531 26 30 24.644531 30 23 L 30 9 C 30 7.355469 28.644531 6 27 6 Z M 5 8 L 27 8 C 27.566406 8 28 8.433594 28 9 L 28 23 C 28 23.566406 27.566406 24 27 24 L 5 24 C 4.433594 24 4 23.566406 4 23 L 4 9 C 4 8.433594 4.433594 8 5 8 Z M 19.40625 12.375 C 17.480469 12.375 16.46875 13.324219 16.46875 14.53125 C 16.46875 16.710938 19.03125 16.410156 19.03125 17.53125 C 19.03125 17.722656 18.871094 18.15625 17.8125 18.15625 C 16.753906 18.15625 16.0625 17.78125 16.0625 17.78125 L 15.75 19.21875 C 15.75 19.21875 16.40625 19.625 17.71875 19.625 C 19.03125 19.625 20.875 18.617188 20.875 17.15625 C 20.875 15.398438 18.3125 15.28125 18.3125 14.5 C 18.3125 14.101563 18.652344 13.78125 19.5625 13.78125 C 20.15625 13.78125 20.8125 14.25 20.8125 14.25 L 21.125 12.71875 C 21.125 12.71875 20.253906 12.375 19.40625 12.375 Z M 11.1875 12.5 L 9.5 17.4375 C 9.5 17.4375 9.414063 17.011719 9.375 16.75 C 8.421875 14.609375 6.875 13.8125 6.875 13.8125 L 8.34375 19.40625 L 10.34375 19.40625 L 13.15625 12.5 Z M 13.875 12.5 L 12.78125 19.40625 L 14.625 19.40625 L 15.71875 12.5 Z M 23.8125 12.5 L 20.8125 19.40625 L 22.625 19.40625 L 23 18.4375 L 25.3125 18.4375 L 25.5 19.40625 L 27.15625 19.40625 L 25.75 12.5 Z M 4.84375 12.53125 C 4.84375 12.53125 8.441406 13.632813 9.28125 16.34375 L 8.65625 13.21875 C 8.65625 13.21875 8.382813
                              12.53125 7.65625 12.53125 Z M 24.5 14.5 L 25.03125 17.09375 L 23.53125 17.09375 Z"
            ></path>
          </svg>
        )}
        <h1
          className={`items-end justify-end flex w-full self-center ${
            type==="Mastercard" ? "text-gray-100" : "text-[#F6E9FF]"
          } `}
        >
          {" "}
          .... 4060
        </h1>
      </div>
        
    </div>
  )
}

export default Card