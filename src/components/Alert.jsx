import React, { useEffect, useState } from 'react'

const Alert = ({ type, text}) => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);
  return (
    <div className={` top-0 fixed  z-50 left-0 right-0 flex justify-center items-center`}>
      <div className={` p-2 ${type === "danger" ? "bg-red-800" : "bg-[#000000]"} mt-4 items-center text-white leading-none w-full flex lg:inline-flex `}>
        <p className={` flex rounded-full ${type === "danger" ? "bg-red-500" : "bg-[#69A46C]"} uppercase px-2 py-1 text-xs font-semibold mr-3`}>
            {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className='mr-2 text-left'>{text}</p>
      </div>
    </div>
  )
}

export default Alert
