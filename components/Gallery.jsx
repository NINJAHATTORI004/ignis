import Navbar from "./Navbar";
import Footer from "./Footer";

import { Link } from "react-router-dom";

const Gallery = ({ Title, images,videos,banner }) => {
  return (
    <>
      <Navbar />
      <div className="w-full py-32 px-4 md:px-20 flex flex-col md:flex-row bg-black items-center">
        <div className="w-full md:w-1/2">
          {/* <video
            className="w-[40vw] h-[40vh] object-cover transform rotate-[-90deg]"
            autoPlay
            playsInline
            loop
            muted
            src={WedingBanner}
          ></video> */}
          {banner.map((video, index) => (
            <video
              key={index}
              src={video}
              className="w-[40vw] h-[40vh] object-cover transform "
              alt={`${Title} ${index + 1}`}
              autoPlay
              playsInline
              loop
              muted
            />
          ))}
        </div>
        <div className="flex items-center flex-col space-y-12 md:items-start md:ml-20">
          <h1 className="text-5xl lg:text-7xl mt-8 font-semibold text-white">
            {Title}
          </h1>
          <Link
            to="https://wa.me/9773989305"
            className="px-8 py-3 rounded-full bg-white text-black hover:text-white hover:bg-blue-700 font-bold transition-all duration-500"
          >
            Show More
          </Link>
        </div>
      </div>

      {/* Displaying the images for each category */}
      <div className="p-5 md:p-10 bg-black ">
        <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              className="rounded-2xl hover:scale-110 hover:shadow-xl hover:shadow-teal-600 transition-all duration-250 my-4"
              alt={`${Title} ${index + 1}`}
            />
          ))}
        </div>
        <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 py-10">
          {videos.map((video, index) => (
            <video
              key={index}
              src={video}
              className="rounded-lg w-full h-full object-cover hover:scale-110 hover:shadow-xl hover:shadow-teal-600 transition-all duration-250 my-4"
              alt={`${Title} ${index + 1}`}
              // controls
              muted
              loop
              autoPlay
            />
          ))}
        </div>
      </div>
      <Footer mode="dark" />
    </>
  );
};

export default Gallery;
