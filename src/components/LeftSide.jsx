import React from "react";

export default function LeftSide() {
  return (
    <div>
      <aside
        className="fixed top-0 left-0 z-40  h-screen "
        aria-label="Sidebar"
      >
        <div className="h-full px-6 py-6 overflow-y-auto bg-gray-100 w-full rounded-md shadow-md">
          <ul class="space-y-2">
            <li>
              <a
                href="#a"
                className="flex items-center p-2 text-base  text-gray-900 rounded-lg
                 hover:bg-gray-300 w-10 ">
                <img  src="Images/category_icon.png" alt="" />
              </a>
            </li>
  {/* -------------------------------------------------------------------------------- */}
            <li>
              <a
                href="#a"
                className="flex items-center p-2 text-base  text-gray-900 rounded-lg
                 hover:bg-gray-300 w-10 mt-8">
                <img  src="Images/cube.png" alt="" />
              </a>
            </li>
            <li className="relative overflow-hidden">
              <a
                href="#a"
                className="flex items-center p-2 text-base  text-gray-900 rounded-lg
                 hover:bg-gray-300 w-10">
                <img  src="Images/list.png" alt="" />
              </a>
              <p className="bg-red-600 w-2 h-2 rounded-full absolute top-2 right-4"></p>
            </li>
            <li className="relative overflow-hidden">
              <a
                href="#a"
                className="flex items-center p-2 text-base  text-gray-900 rounded-lg
                 hover:bg-gray-300 w-10 ">
                <img  src="Images/messenger.png" alt="" />
              </a>
              <p className="bg-red-600 w-2 h-2 rounded-full absolute top-2 right-4"></p>
            </li>
            <li>
              <a
                href="#a"
                className="flex items-center p-2 text-base  text-gray-900 rounded-lg
                 hover:bg-gray-300 w-10 ">
                <img src="Images/list.png" alt="" />
              </a>
            </li>

            {/* --------------------------------------------------- */}

            <li>
              <a
                href="#a"
                className="flex items-center p-2 text-base  text-gray-900 rounded-lg
                 hover:bg-gray-300 w-10 mt-8">
                <img  src="Images/success.png" alt="" />
              </a>
            </li>
            <li>
              <a
                href="#a"
                className="flex items-center p-2 text-base  text-gray-900 rounded-lg
                 hover:bg-gray-300 w-10 ">
                <img  src="Images/security.png" alt=""/>
              </a>
            </li>
            <li>
              <a
                href="#a"
                className="flex items-center p-2 text-base  text-gray-900 rounded-lg
                 hover:bg-gray-300 w-10 ">
                <img  src="Images/users.png" alt="" />
              </a>
            </li>

          {/* -------------------------------------------------------------- */}

          <li>
              <a
                href="#a"
                className="flex items-center p-2 text-base  text-gray-900
                 hover:bg-gray-300 w-12 mt-8 ">
                <img className=" rounded-full w-[25px] h-[26px]" src="Images/lachlan.jpg" alt="" />
              </a>
            </li>
            <li>
              <a
                href="#a"
                className="flex items-center p-2 text-base  text-gray-900
                 hover:bg-gray-300 w-12">
                <img className=" rounded-full w-[25px] h-[26px]" src="Images/raamin.jpg" alt="" />
              </a>
            </li>
            <li>
              <a
                href="#a"
                className="flex items-center p-2 text-base  text-gray-900
                 hover:bg-gray-300 w-12">
                <img className=" rounded-full w-[25px] h-[26px]" src="Images/nonamesontheway.jpg" alt="" />
              </a>
            </li>
            <li>
              <a
                href="#a"
                className="flex items-center p-2 text-base  text-gray-900
                 hover:bg-gray-300 w-10">
                <img  src="Images/plus.png" alt="" />
              </a>
            </li>
           
          </ul>
        </div>
      </aside>
    </div>
  );
}
