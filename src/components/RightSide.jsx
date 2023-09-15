import React from "react";

export default function RightSide() {
  return (
    <div className="">
      <div className="py-4 px-12 flex justify-end gap-4">
        <img
          className=" rounded-full w-[30px] h-[30px] "
          src="Images/notification.png"
          alt=""
        />
        <img
          className=" rounded-full w-[30px] h-[30px]"
          src="Images/comment.png"
          alt=""
        />
        <img
          className=" rounded-full w-[36px] h-[36px]"
          src="Images/nonamesontheway.jpg"
          alt=""
        />
      </div>
      <div className="flex justify-end px-8 text-[14px] mb-8">
        <button className="w-[160px] h-12 bg-yellow-200 hover:bg-yellow-100 rounded-lg  text-red-600 text-[16px] font-myHeader">
          My Amazing Trip
        </button>
      </div>
      <h3 className="py-8 px-4  text-white font-myFont text-[18px] font-bold mt-16">
        I like laying down on the send and looking at the moon.
      </h3>

      <h3 className="px-4 text-lg text-white"> people going to this trip</h3>
      <div className="py-2 px-4 flex justify-start gap-4">
        <img 
          className=" rounded-full w-[40px] h-[42px]  border-blue-400 border-2"
          src="Images/lachlan.jpg"
          alt=""
        />
        <img
          className=" rounded-full w-[40px] h-[42px] border-blue-400 border-2"
          src="Images/raamin.jpg"
          alt=""
        />
        <img
          className=" rounded-full w-[40px] h-[42px]  border-pink-400 border-4"
          src="Images/nonamesontheway.jpg"
          alt=""
        />
        <img
          className=" rounded-full w-[40px] h-[42px] pointer  border-blue-400 border-2"
          src="Images/christina.jpg "
          alt=""
        />
        <p className=" rounded-full w-[40px] h-[42px] bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 text-white text-center p-2 font-extrabold">12+</p>
      </div>
    </div>
  );
}
