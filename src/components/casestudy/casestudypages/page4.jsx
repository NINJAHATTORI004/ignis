import Navbar from "../../Navbar";
import Footer from "../../Footer";
import BubbleComponent from "../../solutions/page/BubbleComponent";

const Page4 = () => {
  const Page4Data = {
    discovery: {
      name: "Emma's University Journey",
      title:  "Client Overview & Challenges",
      description: `
      Emma is a second-year student at a prestigious university, majoring in biology with aspirations to go to medical school. Although she excelled in high school, she now faces challenges balancing her coursework, work commitments, and personal life. This case study highlights key issues Emma encounters, including academic pressures, financial constraints, social and peer pressures, and mental health struggles.
    `,
    },
    creation: {
      name:"Coping Mechanisms and Support Systems",
      title: "Comprehensive Solutions for Growth",
      description:  `
      After a particularly challenging semester, Emma recognized her situation was unsustainable and reached out for help. She utilized university counseling services, learning coping strategies like setting realistic academic goals, time management, and mindfulness. Joining a peer support group also helped her feel less isolated. Emma adjusted her work hours and set boundaries, leading to better balance in her academic and personal life.
    `,
    },
    activation: {
      name: "Outcome: Personal Growth and Resilience",
      title: "Measuring Success through Metrics",
      description:  `
      With ongoing support, Emma successfully balanced her studies and personal life. Although pressures persisted, she grew more resilient and self-compassionate, recognizing that asking for help is a strength, not a weakness. Emma’s experience underscores the importance of mental health resources, financial aid, and peer support networks in empowering students to manage university-related stress effectively.
    `,
    },
  };

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center h-screen w-screen bg-hero-bg text-hero-text font-dela-gothic relative p-hero-padding box-border">
        <div className="relative pt-hero-padding z-hero">
          <BubbleComponent />
        </div>
        <h1 className="text-6xl font-bold text-center z-hero mt-8">
          From Limited Visibility to Legal Powerhouse
        </h1>
      </section>
      <div className="bg-gray-300">
        <h1 className="text-6xl text-black font-bold text-center z-hero py-8">
          Justispherex Legal Growth Journey
        </h1>
      </div>

      {/* Section 1: Discovery */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#CEA5AD]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] font-bold sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {Page4Data.discovery.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {Page4Data.discovery.title}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {Page4Data.discovery.description}
          </p>
        </div>
      </section>

      {/* Section 2: Creation */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#70AABC]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {Page4Data.creation.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {Page4Data.creation.title}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {Page4Data.creation.description}
          </p>
        </div>
      </section>

      {/* Section 3: Activation */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-black">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {Page4Data.activation.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {Page4Data.activation.title}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {Page4Data.activation.description}
          </p>
        </div>
      </section>
      <Footer next="ContentCreation" />
    </div>
  );
};

export default Page4;
