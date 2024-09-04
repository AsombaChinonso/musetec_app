import React from "react";
import Sidebar from "../layouts/Sidebar";
import Uploader from "../components/Uploader";

function Profile() {
  return (
    <Sidebar>
      <div className=" flex flex-col gap-6 sm:h-[350px] h-[550px] ">
        <div className=" flex justify-between items-center gap-2">
          <h2 className="text-xl font-bold text-[#850A9C]">Update Profile</h2>
        </div>

        {/* <Uploader /> */}

        <div className="text-sm w-full text-left">
          <label className="text-border font-semibold">Full Name</label>
          <input
            type="text"
            placeholder="john doe"
            required
            className="w-full text-sm mt-2 p-5 border border-border focus:border-[#e048ff] focus:outline-none focus:ring-[#860A9F]/5rounded text-white bg-main"
          />
        </div>
        <div className="text-sm w-full text-left">
          <label className="text-border font-semibold">Email</label>
          <input
            type="email"
            placeholder="johndoe@gmail.com"
            required
            className="w-full text-sm mt-2 p-5 border border-border focus:border-[#e048ff] focus:outline-none focus:ring-[#860A9F]/5rounded text-white bg-main"
          />
        </div>

        <div className=" flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4">
          <button className=" bg-black font-medium transition duration-300 ease-in hover:bg-[#59066A] border border-[#850A9C] text-white py-3 px-6 rounded w-full sm:w-auto">
            Delete Account
          </button>
          <button className="bg-[#850A9C] font-medium transition duration-300 ease-in hover:bg-[#550786] border border-[#850A9C] text-[#f6e9ff] py-3 px-6 rounded w-full sm:w-auto">
            Update Profile
          </button>
        </div>
      </div>
    </Sidebar>
  );
}

export default Profile;
