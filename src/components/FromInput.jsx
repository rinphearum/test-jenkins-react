import React, { useState } from "react";

export default function FromInput({ setShowForm, data, setData }) {
  // console.log(data);
  const [newInput, setNewInput] = useState([]);
  const handleChange = (e) => {
    setNewInput({ ...newInput, [e.target.name]: e.target.value });

    // console.log(e.target.value)
  };

  const formSubmit = (e) => {
    setShowForm();
    e.preventDefault();
    setData([...data, { id: data.length + 1, ...newInput }]);
    setNewInput([]);
  };

  // const handleChange =
  return (
    <div>
      <div class="flex justify-center items-center fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full backdrop-blur-[2px] bg-black/10 font-myFont">
        <div class="relative w-full h-full max-w-2xl md:h-auto">
          <div class="relative bg-white rounded-lg shadow">
            <div class="flex items-start justify-between p-4 rounded-t">
              <button
                onClick={setShowForm}
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-hide="defaultModal"
              >
                <p className=" rounded-full w-8 h-9 bg-red-600 text-center py-2 text-white ">
                  X
                </p>
              </button>
            </div>

            {/* --------------------------Form---------------- */}
            <form >
              <div class="mb-4 px-8">
                <label class="block text-gray-700 text-md font-bold mb-2">
                  Title
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Siemreap AngkorWat"
                  name="title"
                  onChange={handleChange}
                />
              </div>
              <div class="mb-4 px-8">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                  Description
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Khmer Empire with AngkorWat temple"
                  name="description"
                  onChange={handleChange}
                />
              </div>
              <div class="mb-4 px-8">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                  People going
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="5700+"
                  name="peopleGoing"
                  onChange={handleChange}
                />
              </div>

              <div class="mb-4 px-8">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                  Type of adventure
                </label>

                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  name="status"
                  onChange={handleChange}
                >
                  <option selected>Select your favorite vibe</option>
                  <option value="beach">Beach</option>
                  <option value="forest">Forest</option>
                  <option value="mountain">Mountain</option>
                </select>
              </div>

              <div class="flex items-center p-6 space-x-2 border-trounded-b ">
                <button
                onClick={formSubmit}
                  type="submit"
                  class="text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center font-myFont"
                >
                  Submit
                </button>
              </div>
            </form>

            {/* btn submit */}
          </div>
        </div>
      </div>
    </div>
  );
}
