import sidProfileImage from "../assets/images/profile/DSC05548.jpg";
import kritiProfileImage from "../assets/images/profile/DSC05548.jpg";

const Founders = () => {
  return (
    <div className="bg-black text-white p-2 md:p-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl  flex flex-col md:flex-row justify-between">
        {/* First Founder - Sidharth */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2 text-center md:text-center">
          {/* Image */}
          <div className="w-90 h-60 md:w-110 md:h-80 mx-auto">
            <img
              src={sidProfileImage}
              alt="Sid"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text */}
          <div className="mt-4 w-full flex flex-col items-center">
      
          </div>
        </div>

        {/* Second Founder - Kriti */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2 text-center md:text-center">
          {/* Image */}
          <div className="w-90 h-60 md:w-110 md:h-80 mx-auto">
            <img
              src={kritiProfileImage}
              alt="Kriti"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text */}
          <div className="mt-4 flex flex-col items-center">
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
