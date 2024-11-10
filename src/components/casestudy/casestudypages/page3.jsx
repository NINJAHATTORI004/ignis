import Navbar from "../../Navbar";
import Footer from "../../Footer";
import BubbleComponent from "../../solutions/page/BubbleComponent";

const Page3 = () => {
  const Page3Data = {
    discovery: {
      name: "Global Minds: Supporting Student Mental Health",
      title: "Overview & Challenges",
      description: `
        Global Minds, a renowned counseling organization, has focused on alleviating mental health challenges among students aged 16-24 for over two decades. In response to increasing academic pressure, social media influences, and future uncertainties, Global Minds has developed strategies to support students in overcoming issues such as anxiety, depression, and stress.
      `,
    },
    creation: {
      name: "Strategy Implementation: Building a Supportive Environment",
      title: "Creating a Comprehensive Mental Health Program",
      description: `
        Global Minds developed an expert-led mental health program featuring:
        - Personalized counseling sessions utilizing CBT, mindfulness, and resilience training.
        - Peer mentorship programs to foster community support.
        - Educational workshops on stress management, time management, and resilience.
        - A 24/7 mental health hotline and online resources for immediate support and self-care.
        - Awareness campaigns to reduce stigma around mental health.
        These interventions provided students with tools and resources to manage mental health effectively.
      `,
    },
    activation: {
      name: "Results: Significant Improvement in Well-being",
      title: "Measuring Success through Metrics",
      description: `
        The program led to measurable improvements in student well-being:
        - A 60% reduction in anxiety and a 45% reduction in depression symptoms.
        - A 30% increase in academic performance and engagement.
        - 75% of students reported a stronger sense of belonging and reduced isolation.
        - A 40% increase in students willing to seek mental health support, showing reduced stigma.
        Global Minds' approach highlights the positive impact of tailored mental health support.
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
          Global Minds: Supporting Student Mental Health
        </h1>
      </section>
      <div className="bg-gray-300">
        <h1 className="text-6xl text-black font-bold text-center z-hero py-8">
          Case Study: Enhancing Mental Health Support for Students
        </h1>
      </div>

      {/* Section 1: Discovery */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#CEA5AD]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] font-bold sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {Page3Data.discovery.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {Page3Data.discovery.title}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {Page3Data.discovery.description}
          </p>
        </div>
      </section>

      {/* Section 2: Creation */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#70AABC]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {Page3Data.creation.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {Page3Data.creation.title}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {Page3Data.creation.description}
          </p>
        </div>
      </section>

      {/* Section 3: Activation */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-black">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {Page3Data.activation.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {Page3Data.activation.title}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {Page3Data.activation.description}
          </p>
        </div>
      </section>
      <Footer next="ContentCreation" />
    </div>
  );
};

export default Page3;
