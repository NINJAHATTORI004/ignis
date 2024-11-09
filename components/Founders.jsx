import sidProfileImage from "../assets/images/profile/DSC05545.jpg";
import kritiProfileImage from "../assets/images/profile/DSC05548.jpg";

const Founders = () => {
  return (
    <div className="bg-black text-white p-2 md:p-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl  flex flex-col md:flex-row justify-between">
        {/* First Founder - Sidharth */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2 text-center md:text-center">
          {/* Image */}
          <div className="w-40 h-40 md:w-60 md:h-60 mx-auto ">
            <img
              src={sidProfileImage}
              alt="Sid"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text */}
          <div className="mt-4 w-full flex flex-col items-center">
            <p className="text-3xl font-bold">Sidharth Ganguly</p>
            <p className="text-sm md:text-base font-light italic">
              Co-founder, House of Marktech, 
            </p>
            <div className="text-xs">envisions a future where businesses
            thrive through innovation and sustainability.</div>
            <p className="text-gray-300 mt-2 max-w-lg text-sm">
              "Dedicated to solving real-world challenges, he drives creative
              solutions that not only elevate brands but also positively impact
              society."
            </p>
          </div>
        </div>

        {/* Second Founder - Kriti */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2 text-center md:text-center">
          {/* Image */}
          <div className="w-40 h-40 md:w-60 md:h-60 mx-auto">
            <img
              src={kritiProfileImage}
              alt="Kriti"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text */}
          <div className="mt-4 flex flex-col items-center">
            <p className="text-3xl font-bold">Kriti Khandelwal</p>
            <p className="text-sm md:text-base font-light italic">
              Co-founder, House of Marktech, 
            </p>
            <div className="text-xs">
            is passionate about empowering
              talented individuals, especially skilled young women facing
              financial challenges.
            </div>
            <p className="text-gray-300 mt-2 max-w-lg text-xs">
              "Over the next 5 years, she aims to promote creativity and growth
              by offering opportunities, while ensuring that every step forward
              is aligned with environmental sustainability."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
