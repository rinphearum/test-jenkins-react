import React, { useState } from "react";
import FromInput from "./FromInput";

export default function MiddleSide({ data, setData }) {
  const [showForm, setShowForm] = useState(false);
  const [readMore, setReadMore] = useState([]);

  const changeStatus = (e) => {
    const a = data.map((item) => {
      if (item.id === e.id) {
        if (item.status === "beach") {
          return { ...item, status: "mountain" };
        } else if (item.status === "mountain") {
          return { ...item, status: "forest" };
        } else {
          return { ...item, status: "beach" };
        }
      }
      return item;
    });
    // console.log(a);
    setData(a);
  };

  return (
    <div>
      <div className="py-10 px-8 ">
        <div className="flex justify-between">
          <h1 class=" text-3xl text-gradient-to-r from-sky-400 to-blue-500 font-myHeader">
            Jenkin Auto Deploy by PoPo
          </h1>

          <button
            onClick={() => setShowForm(!showForm)}
            className="w-[130px] h-10  bg-gradient-to-r from-blue-500 to-blue-600 hover:bg-blue-600 text-white rounded-lg 
            font-myHeader text-sm"
          >
            Add New Deploy <span className="bold ">+</span>
          </button>
        </div>

        {showForm ? (
          <FromInput
            setShowForm={() => {
              setShowForm(false);
            }}
            data={data}
            setData={setData}
          />
        ) : null}
      </div>

      <div
        className="flex flex-wrap gap-4
      "
      >
        {data.map((item) => (
          <div class="bg-gradient-to-r from-gray-700 via-gray-900 to-black p-6  border border-gray-200 rounded-lg shadow h-auto max-w-[310px] text-white">
            <h5 class="mb-2 text-xl  tracking-tight  py-4 uppercase font-myHeader">
              {item.title === undefined ? "Null" : item.title}
            </h5>
            <p class="mb-3 text-[16px] font-normal line-clamp-3 font-myFont">
              {item.description}
            </p>

            <p class=" text-[16px]">People going</p>
            <h1 class="mb-3 text-[18px] font-bold line-clamp-3 p-2">
              {item.peopleGoing}
            </h1>

            {/* btn */}
            <div className="flex gap-4 text-xl">
              <button
                className={
                  item.status === "beach"
                    ? "bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 inline-flex items-center  font-medium text-center text-white  rounded-lg hover:bg-[#97DEFF] uppercase text-[14px] px-10 font-myHeader w-[200px]"
                    : item.status === "mountain"
                    ? "bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 inline-flex items-center    font-medium text-center text-white  rounded-lg hover:bg-[#0E8388] uppercase text-[14px] px-8 font-myHeader w-[200px]"
                    : "bg-gradient-to-r from-green-500 to-green-700 inline-flex items-center  py-2  font-medium text-center text-white  rounded-lg hover:bg-[#B3E5BE] uppercase text-[14px] px-10 font-myHeader w-[200px]"
                }
                onClick={() => changeStatus(item)}
              >
                {item.status}
              </button>

              {/* The button to open modal */}
              <label
                onClick={() => setReadMore(item)}
                htmlFor="my-modal"
                className="btn"
              >
                Read more
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg text-black uppercase pb-3">
                    {readMore.title}
                  </h3>
                  <p className="py-2 text-black">{readMore.description}</p>
                  <div className="modal-action">
                    <label htmlFor="my-modal" className="btn">
                      Close
                    </label>
                  </div>
                </div>
              </div>
              {/* 
              <button
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-330"
              > Read more
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
