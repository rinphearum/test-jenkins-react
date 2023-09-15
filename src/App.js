import "./App.css";
import "flowbite";
import LeftSide from "./components/LeftSide";
import MiddleSide from "./components/MiddleSide";
import RightSide from "./components/RightSide";
import { useState } from "react";
import FromInput from "./components/FromInput";
function App() {

  const [data,setData] = useState([
    {
      id: 1,
      title: "koh kong krav",
      description:
        "Koh Kong Krav Beach is in the 5th place out of 13 beaches in the Koh Kong region The beach is located in a natural place, among the mountains. It is partially covered 	   by trees which give natural shade. It is a spacious coastline with crystal turquoise water and white fine sand, so you don't need special shoes.",
      status: "beach",
      peopleGoing: "1537",
    },
    {
      id: 2,
      title: "phnom sampov",
      description:
        " This legendary 100 metres high mountain, topped by Wat Sampeou, contains 3 natural caves, lined with Buddhist shrines and statues: Pkasla, Lakhaon and Aksopheak.",
      status: "mountain",
      peopleGoing: "81000",
    },
    {
      id: 3,
      title: "kirirom",
      description:
        "Kirirom National Park, a high altitude plateau, is known for its unique high elevation pine forest, which forms the headwaters for numerous streams feeding Kampongpeu Town.",
      status: "forest",
      peopleGoing: "2500",
    },

  ])


  return (
    <div className="grid grid-cols-12">
     
      <div >
        <LeftSide />
      </div>
      <div className="col-span-8 ">
        <MiddleSide data={data} setData={setData}/>
      </div>
      <div className="col-span-3 min-h-screen bg-[url('../public/Images/right-img.jpg')] bg-auto bg-no-repeat bg-center ">
        <RightSide />
      </div>
    </div>
  );
}

export default App;
