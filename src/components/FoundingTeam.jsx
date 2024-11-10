import abhilashaProfileImage from "../assets/images/profile/Abhilasha Profile.png";
import anshProfileImage from "../assets/images/profile/Ansh Profile.png";
import akashProfileImage from "../assets/images/profile/Akash legal CounselProfile.png";
import anikethProfileImage from "../assets/images/profile/Anikhetpng.png";
const FoundingTeam = () => {
  const founders = [
    {
      name: "Ansh mittal",
      image: akashProfileImage,
    },
    //--------------------------------------------
    {
      name: "Akshat Sharma",
      image: abhilashaProfileImage,
    },
    {
      name: "Naina Varshney",
      image: anshProfileImage,
    },
    {
      name: "Abhinav Kumar Prajapati",
      image: anikethProfileImage,
    },

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
