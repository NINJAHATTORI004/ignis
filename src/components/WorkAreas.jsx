import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";



const workAreas = [
  {
    title: "Fashion",
    video: 'https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/v1/fashion/vqjzvlajz2uymal2wrgf',
    link: "/fashion",
    background: "bg-gradient-to-r from-[#ffffff] to-[#FFC3A0]", // Peach to light orange
  },
  {
    title: "Interior",
    video: 'https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/v1/interior/zgrmtkrjaef0wjfxhd65',
    link: "/interior",
    background: "bg-gradient-to-r from-[#ffffff] to-[#B5FFFC]", // Light pink to light blue
  },
  {
    title: "Wedding",
    video: 'https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/v1/wedding/dl1yefmtysj5vhdk2cp9',
    link: "/wedding",
    background: "bg-gradient-to-r from-[#ffffff] to-[#E9E4F0]", // Light lavender to light gray
  },
  {
    title: "Automobiles",
    video: 'https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/v1/kuldepp%20new/dmyuxeybo8unkvzforit',
    link: "/automobiles",
    background: "bg-gradient-to-r from-[#ffffff] to-[#B9FBC0]", // Light blue to light green
  },
  {
    title: "Hospitality",
    video: 'https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/v1/hospitality/j9jpg2fwuossxnry2j52',
    link: "/hospitality",
    background: "bg-gradient-to-r from-[#ffffff] to-[#D5E1DF]", // Light pink to light green
  },
];

const WorkAreas = () => {
  return (
    <section className="py-12 px-4 md:px-6 bg-gradient-to-r from-[#010202] via-[#203a43] to-[#002535] relative">
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-blue-500/20 to-transparent rounded-full blur-3xl opacity-40 pointer-events-none"></div>

      <div className="my-24 text-center">
        <h2 className="text-7xl font-semibold text-white drop-shadow-lg">
          Everything on one Page,
        </h2>
        <h2 className="text-7xl font-semibold text-white mb-16 drop-shadow-lg">
          One Platform
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-4 md:px-0">
        {workAreas.map((area) => {
          const { ref, inView } = useInView({
            threshold: 0.1, // Trigger when 10% of the element is in view
            triggerOnce: true, // Only trigger once
          });

          return (
            <div
              key={area.title}
              ref={ref}
              className={`p-6 rounded-lg shadow-lg transform transition-all duration-700 ease-in-out hover:scale-110 hover:shadow-[0_0_15px_rgba(0,255,255,0.5),0_0_30px_rgba(0,0,255,0.3)] hover:bg-opacity-90 hover:rotate-3 hover:translate-y-[-10px] relative overflow-hidden group ${
                area.background
              } ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <Link to={area.link} className="block">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <video
                    src={area.video}
                    className="w-full h-64 object-cover rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3"
                    autoPlay
                    loop
                    muted
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                </div>

                <h3 className="text-2xl font-semibold text-center">
                  {area.title}
                </h3>
                <p className="text-gray-500 text-center mt-2">
                  PHOTOGRAPHY • TECHNOLOGY • SOCIAL MEDIA • <span>MORE</span>
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkAreas;
