// import harshitProfileImage from "../assets/images/profile/Harshit.png";
// import shrutikaProfileImage from "../assets/images/profile/ShrutikaProfile-4.png";
// import raunakProfileImage from "../assets/images/profile/Raunak Profile.png";

// import arnavProfileImage from "../assets/images/profile/ArnavProfile.png";
import abhilashaProfileImage from "../assets/images/profile/Abhilasha Profile.png";
// import sukantaProfileImage from "../assets/images/profile/Sakunta Profile.png";

// import ViploveProfileImage from "../assets/images/profile/ViplovProfile.png";
// import tahaProfileImage from "../assets/images/profile/Taha Profile.png";
// import arbabProfileImage from "../assets/images/profile/Arbab LegalProfile-2.png";

import anshProfileImage from "../assets/images/profile/Ansh Profile.png";
// import priyankaProfileImage from "../assets/images/profile/Priyanka Profile.png";
// import luvProfileImage from "../assets/images/profile/Luv Profile.png";

import akashProfileImage from "../assets/images/profile/Akash legal CounselProfile.png";
// import mansiProfileImage from "../assets/images/profile/MansiProfile.png";
import anikethProfileImage from "../assets/images/profile/Anikhetpng.png";

// import sidProfileImage from "../assets/images/profile/Sid Profile-2.png";
// import kritiProfileImage from "../assets/images/profile/KritiProfile-3.png";

const FoundingTeam = () => {
  const founders = [
    //--------------------------------------------
    {
      name: "Akshat Sharma",
      // role: "Senior Developer Engineer, House Of Marktech",
      image: abhilashaProfileImage,
    },
    {
      name: "Naina Varshney",
      // role: "Senior Developer Engineer, House Of Marktech",
      image: anshProfileImage,
    },
    {
      name: "Abhinav Kumar Prajapati",
      // role: "Senior Developer Engineer, House Of Marktech",
      image: anikethProfileImage,
    },
    //-----------------------------------------------------
    // {
    //   name: "Arnav Sharma",
    //   role: "Creative Director, House Of Marktech",
    //   image: arnavProfileImage,
    // },
    // {
    //   name: "Abhilasha Negi",
    //   role: "Senior Marketing Executive, House Of Marktech",
    //   image: abhilashaProfileImage,
    // },
    {
      name: "Sukanta Bhunia",
      role: "Senior Data Analyst, House Of Marktech",
      image: sukantaProfileImage,
    },
    //--------------------------------------------------
    {
      name: "Viplove chaudhary",
      role: "Senior Cinematographer, House Of Marktech",
      image: ViploveProfileImage,
    },
    {
      name: "Taha Manauwar",
      role: "Social Media Strategist, House Of Marktech",
      image: tahaProfileImage,
    },
    {
      name: "Arbab Khan",
      role: "Legal Counsel, House Of Marktech",
      image: arbabProfileImage,
    },

    //------------------------------------------------------------
    {
      name: "Ansh mittal",
      // role: "Full-stack Developer, House Of Marktech",
      image: akashProfileImage,
    },
    {
      name: "Priyanka Chouhan",
      role: "Human Resource Manager, House Of Marktech",
      image: priyankaProfileImage,
    },
    {
      name: "Luv Sharma",
      role: "Jr. Developer, House Of Marktech",
      image: luvProfileImage,
    },

    //------------------------------------------------------------------
    // {
    //   name: "Akash Singh",
    //   role: "Advisor Counsel, House Of Marktech",
    //   image: akashProfileImage,
    // },
    {
      name: "Mansi Negi",
      role: "Marketing Executive, House Of Marktech",
      image: mansiProfileImage,
    },
    // {
    //   name: "Mogadampally Aniketh",
    //   role: "Campaign Strategist, House Of Marktech",
    //   image: anikethProfileImage,
    // },
  ];

  return (
    <div className="p-10 text-center h-full w-[100vw] bg-gray-50">
      <div className="flex items-center justify-center mb-8">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/winkl-1095.appspot.com/o/gcc-website%2Fimages%2Fcrown.svg?alt=media&token=886249b1-5fb1-4355-bec0-ff77dd1ef358"
          alt="Growify India"
          className="w-32 h-32 object-cover"
        />
      </div>

      <div className="mb-16">
        <h2 className="text-5xl font-bold text-black">Our Founding Team</h2>
        <p className="text-gray-600 mt-4 text-lg">
          Good things happen when industry leaders join hands to launch India's
          Largest Creator Ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
        {/* Map over founder data */}
        {founders.map((founder, index) => (
          <div key={index} className="text-center p-4">
            <img
              src={founder.image}
              alt={founder.name}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <h3 className="mt-4 text-2xl font-bold text-gray-900">
              {founder.name}
            </h3>
            <p className="text-gray-700 text-lg mt-2">{founder.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoundingTeam;
