import React from "react";
import image_404 from "../assets/404.svg";

function NotFound() {
  return (
    <div className=" flex flex-col justify-center items-center gap-8 w-full min-h-screen text-black bg-main lg:py-20 py-10 px-6">
      <img src={image_404} className=" w-full h-96 object-contain" />
      <h1 className=" lg:text-4xl font-bold">Page Not Found</h1>
      <p className=" font-medium text-border italic leading-6">
        The page you are looking for does not exist. You may have mistyped the
        URL
      </p>
      <a
        href="/dashboard"
        className=" bg-[#860A9F] transitions text-white flex flex-row justify-center items-center gap-4 font-medium py-3 hover:text-main px-6 rounded-md"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"></path>
        </svg>
        Back Home
      </a>
    </div>
  );
}

export default NotFound;
