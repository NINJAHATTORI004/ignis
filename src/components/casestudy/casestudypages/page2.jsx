import Navbar from "../../Navbar";
import Footer from "../../Footer";
import BubbleComponent from "../../solutions/page/BubbleComponent";

const Page2 = () => {
  const Page2Data = {
    discovery: {
      name: "Understanding Mental Health Challenges",
      title: "Overview & Challenges",
      description: `
        Universities has seen a rise in mental health challenges among students, driven by academic pressure, financial burdens, and social expectations. Approximately 40% of students report high stress and anxiety, with 20% considering dropping out due to mental health struggles.
      `,
    },
    creation: {
      name: "Implementing Comprehensive Support",
      title: "Building a Holistic Mental Health Program",
      description: `
        To support student well-being, University implemented a mental health program including:
        - Expanded counseling services with licensed professionals.
        - A peer mentorship program fostering community support.
        - Workshops on financial literacy and time management.

      `,
    },
    activation: {

      title: "Measuring Success through Results",
      description: `
        The support program resulted in:
        - Improved mental health and reduced anxiety.
        - Enhanced academic performance and retention.
        - Increased sense of community and reduced isolation.

      `,
    },
  };

  return (
    <div>
      <Navbar />
      <section className="flex flex-col justify-center items-center h-screen w-screen bg-hero-bg text-hero-text font-dela-gothic relative p-hero-padding box-border">
        <div className="relative pt-hero-padding z-hero">
          <BubbleComponent />
        </div>
        <h1 className="text-6xl font-bold text-center z-hero mt-8">
          Mental Health Support at Penn State University
        </h1>
      </section>
      <div className="bg-gray-300">
        <h1 className="text-6xl text-black font-bold text-center z-hero py-8">
          Case Study: Decline of Mental Health Among College Students
        </h1>
      </div>

      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#CEA5AD]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] font-bold sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {Page2Data.discovery.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {Page2Data.discovery.title}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {Page2Data.discovery.description}
          </p>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#70AABC]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {Page2Data.creation.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {Page2Data.creation.title}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {Page2Data.creation.description}
          </p>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-black">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {Page2Data.activation.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {Page2Data.activation.title}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {Page2Data.activation.description}
          </p>
        </div>
      </section>
      <Footer next="ContentCreation" />
    </div>
  );
};

export default Page2;
