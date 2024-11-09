/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState,useEffect } from "react";
import "../../styles/Bubbletopics.css";
import image from "../../assets/images/arrow.png";
import Modal from "./page/Modal";
import BubbleGrid from "./page/BubbleGrid";

// const names = [
//   "Design",
//   "Development",
//   "Marketing",
//   "Design",
//   "Development",
//   "Marketing",
//   "Design",
//   "Development",
//   "Marketing",
// ];

const SolutionsHome = () => {
  useEffect(() => {
            
    const svg = document.querySelector('svg.squiggle')
    const path = svg.querySelector('path');
  //   const about =document.querySelector('about')

    const scroll = () => {
      const distance = window.scrollY;
     
      const totalDistance = svg.clientHeight ;

      const percentage = distance / totalDistance; 
      // console.log(percentage)
      const pathLength = path.getTotalLength();

      path.style.strokeDasharray = `${pathLength}`;
      path.style.strokeDashoffset = `${pathLength * (1-percentage-0.1)}`;
    };
    window.addEventListener('scroll', scroll);
  },[]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-black text-white">
      <video 
      src={'https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/m6i07frirsfyan7oy9zx '} 
      loop
      autoPlay
      controls
      className="flex flex-col items-center justify-center min-h-screen w-full  ">
        {/* Title Section */}
        
      </video>

      <BubbleGrid />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <svg width="1386" height="2037" viewBox="0 0 1386 2037" fill="none" xmlns="http://www.w3.org/2000/svg " className='absolute top-0 left-0 w-full z-0 squiggle'>
      <path d="M982 -51C719.5 -185 -236.089 33.5155 78 731C184.5 967.5 427.764 996.907 562 967.5C808.5 913.5 1034.5 697 1210.5 791.5C1410.61 898.944 1293.5 1205 1041.5 1306.5C771 1428.5 365.5 1190 398.5 1323C431.011 1454.03 1262 1608.5 1193.5 1807C1157.54 1911.2 860 2003 571 1788.5C261.5 1527 54.0001 1923.5 248.5 2072" stroke="#dfff00" stroke-width="30" strokeLinecap="round"/>
      </svg>
    </div>
  );
};

export default SolutionsHome;
