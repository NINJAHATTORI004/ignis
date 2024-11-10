import Navbar from "../../Navbar";
import Footer from "../../Footer";
import BubbleComponent from "../../solutions/page/BubbleComponent";

const Page5 = () => {
  const Page5Data = {
    discovery: {
      name: "AI-Based Cognitive Assistance for Reducing Workplace Stress and Mental Fatigue",
      title:"Background",
      description:`
        A multinational corporation observed rising levels of cognitive fatigue and burnout among employees, particularly in high-stress roles like customer service and project management. The company partnered with a health tech firm to explore how AI could help reduce cognitive strain in the workplace.
      `,
    },
    creation: {
      name:"AI Solution: Wysa, the AI-Powered Mental Health Chatbot",
      title:"Solution Overview",
      description:`
        The organization introduced Wysa, an AI-powered mental health app designed to provide personalized support for individuals experiencing stress and fatigue. Wysa uses Cognitive Behavioral Therapy techniques, mindfulness practices, and stress-level assessment to aid employees in managing their stress and cognitive fatigue.
      `,
    },
    activation: {
      name:"Results: Enhanced Employee Well-being and Productivity",
      title:"Outcomes and Impact",
      description: `
        After three months, significant improvements were observed:
        - A 40% reduction in cognitive fatigue among regular users.
        - A 15% increase in productivity in high-stress roles.
        - Improved engagement, with 70% of users reporting a positive impact on their work environment and stress levels.
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
          Sustainable Living: HomesunNature's Success Story
        </h1>
      </section>
      <div className="bg-gray-300">
        <h1 className="text-6xl text-black font-bold text-center z-hero py-8">
          HomesunNature Growth Journey
        </h1>
      </div>

      {/* Page5 Section 1: Discovery */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#CEA5AD]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] font-bold sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {Page5Data.discovery.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {Page5Data.discovery.title}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {Page5Data.discovery.description}
          </p>
        </div>
      </section>

      {/* Page5 Section 2: Creation */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#70AABC]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {Page5Data.creation.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {Page5Data.creation.title}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {Page5Data.creation.description}
          </p>
        </div>
      </section>

      {/* Page5 Section 3: Activation */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-black">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {Page5Data.activation.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {Page5Data.activation.title}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {Page5Data.activation.description}
          </p>
        </div>
      </section>
      <Footer next='ContentCreation'/>
    </div>
  );
};

export default Page5;
