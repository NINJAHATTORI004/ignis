// // Page1.jsx

// import Navbar from "../../Navbar";
// import Footer from "../../Footer";
// import BubbleComponent from "../../solutions/page/BubbleComponent";

// const Page1 = () => {
//   const Page1Data = {
//     discovery: {
//       name: "Rooftop Heaven: From Ground Level to New Heights",
//       title: "Client Overview & Challenges",
//       description: `
//         Rooftop Heaven is a premier rooftop dining experience located in the heart of the city, known for breathtaking views and a curated menu. However, they faced challenges in brand visibility and marketing effectiveness. Our journey began by identifying their limitations: low brand awareness, ineffective marketing strategies, and an underutilized digital presence.
//       `,
//     },
//     creation: {
//       name: "Solution Implementation: Transforming Visibility & Engagement",
//       title: "Building a New Identity & Presence",
//       description: `
//         We addressed Rooftop Heaven’s challenges through strategic solutions, including:
//         - Market research to refine the unique value proposition.
//         - A revamped, user-friendly website with improved SEO.
//         - Engaging social media campaigns, partnering with local influencers.
//         These initiatives helped rebuild the brand identity and customer engagement both online and offline.
//       `,
//     },
//     activation: {
//       name: "Results: A Brand’s Journey to Success",
//       title: "Measuring Success through Metrics",
//       description: `
//         The strategies implemented resulted in significant growth:
//         - A 40% increase in monthly customer visits.
//         - A 30% sales boost.
//         - Enhanced online presence, with social media followers and engagement growing steadily.
//         Rooftop Heaven’s brand was reinvigorated, leading to higher foot traffic, sales, and customer satisfaction.
//       `,
//     },
//   };

//   return (
//     <div>
//       <Navbar />
//       {/* Hero Section */}
//       <section className="flex flex-col justify-center items-center h-screen w-screen bg-hero-bg text-hero-text font-dela-gothic relative p-hero-padding box-border">
//         <div className="relative pt-hero-padding z-hero">
//           <BubbleComponent />
//         </div>
//         <h1 className="text-6xl font-bold text-center z-hero mt-8">
//           From Ground Level to New Heights
//         </h1>
//       </section>
//       <div className="bg-gray-300">
//         <h1 className="text-6xl text-black font-bold text-center z-hero py-8">
//           Rooftop Heaven Growth Journey
//         </h1>
//       </div>

//       {/* Page1 Section 1: Discovery */}
//       <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#CEA5AD]">
//         <div className="w-full lg:w-[70%] text-center lg:text-left">
//           <h2 className="text-[2.5rem] font-bold sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
//             {Page1Data.discovery.name}
//           </h2>
//           <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
//             {Page1Data.discovery.title}
//           </h3>
//           <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
//             {Page1Data.discovery.description}
//           </p>
//         </div>
//       </section>

//       {/* Page1 Section 2: Creation */}
//       <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#70AABC]">
//         <div className="w-full lg:w-[70%] text-center lg:text-left">
//           <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
//             {Page1Data.creation.name}
//           </h2>
//           <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
//             {Page1Data.creation.title}
//           </h3>
//           <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
//             {Page1Data.creation.description}
//           </p>
//         </div>
//       </section>

//       {/* Page1 Section 3: Activation */}
//       <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-black">
//         <div className="w-full lg:w-[70%] text-center lg:text-left">
//           <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
//             {Page1Data.activation.name}
//           </h2>
//           <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
//             {Page1Data.activation.title}
//           </h3>
//           <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
//             {Page1Data.activation.description}
//           </p>
//         </div>
//       </section>
//       <Footer next='ContentCreation'/>
//     </div>
//   );
// };

// export default Page1;
import React from 'react';
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4">
    <div className="container mx-auto">
      <span className="text-xl font-bold">Ignis Mentis</span>
    </div>
  </nav>
);

const Footer = ({ next }) => (
  <footer className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <span>&copy; 2024 Ignis Mentis</span>
      <Link href={`/${next}`}>
        <Button variant="outline">Next: {next}</Button>
      </Link>
    </div>
  </footer>
);

const BubbleComponent = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
  </div>
);

const Page1 = () => {
  const Page1Data = {
    discovery: {
      name: "Dropout Prediction Model",
      title: "Harnessing Advanced Machine Learning for Proactive Student Support",
      description: `
        The Dropout Prediction Model is a cornerstone of the Ignis Mentis platform, built to foresee potential student dropouts and provide timely, effective interventions. By analyzing a myriad of data points, this predictive model offers data-driven insights and equips educators, counselors, and mentors with actionable intelligence to support at-risk students.
      `,
    },
    creation: {
      name: "Technical Foundation",
      title: "Leveraging PyTorch and Comprehensive Data Inputs",
      description: `
        Powered by PyTorch: Our model leverages the power of the PyTorch deep learning framework, known for its flexibility, dynamic computation graphing, and extensive library support for developing state-of-the-art machine learning models. PyTorch enables rapid experimentation, making our predictive capabilities more adaptable and fine-tuned to evolving student behaviors and educational trends.

        Data Inputs and Features: The model processes a comprehensive range of data inputs, including:
        - Academic Records: Grades, course completion rates, exam scores, and other measures of academic performance.
        - Attendance and Participation: Logs of student attendance and engagement in classes, extracurricular activities, and online learning platforms.
        - Behavioral Data: Metrics capturing student engagement patterns, communication habits with peers and educators, and changes in interest or commitment levels.
        - Socioeconomic Factors: Demographic data, family background, economic status, and availability of support systems.
        - Mental Health and Well-being Metrics (where available): Self-reported well-being indicators, counseling session attendance, and responses to optional surveys or assessments.
      `,
    },
    activation: {
      name: "Model Architecture and Functionality",
      title: "Advanced Techniques and Continuous Improvement",
      description: `
        Data Preprocessing and Feature Engineering:
        - Data collected from various sources is first cleansed, normalized, and transformed into structured features.
        - Feature engineering techniques enhance model performance by creating more meaningful inputs.

        Supervised Learning Approach:
        - The model follows a supervised learning paradigm, using labeled data representing students with varying levels of dropout risk.
        - Training involves optimizing loss functions to accurately predict the probability of a student being at risk of dropping out.

        Advanced Techniques for Prediction:
        - Neural Networks: The model can employ deep neural network architectures to identify complex, non-linear relationships within the data.
        - Regularization: Techniques like L1/L2 regularization and dropout layers are applied to prevent overfitting.
        - Explainable AI (XAI): Our model integrates interpretability tools to provide explanations for its predictions.

        Continuous Model Improvement:
        - Real-Time Updates: The model is continuously updated with new data to ensure its predictions remain relevant and accurate.
        - Feedback Loops: The performance of interventions is monitored, and results feed back into the model for ongoing refinement.
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
          Dropout Prediction Model
        </h1>
      </section>
      <div className="bg-gray-300">
        <h1 className="text-6xl text-black font-bold text-center z-hero py-8">
          Harnessing Advanced Machine Learning for Proactive Student Support
        </h1>
      </div>

      {/* Page1 Section 1: Discovery */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#CEA5AD]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] font-bold sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {Page1Data.discovery.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {Page1Data.discovery.title}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {Page1Data.discovery.description}
          </p>
        </div>
      </section>

      {/* Page1 Section 2: Creation */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#70AABC]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {Page1Data.creation.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {Page1Data.creation.title}
          </h3>
          <div className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {Page1Data.creation.description.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph.trim()}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Page1 Section 3: Activation */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-black">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {Page1Data.activation.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {Page1Data.activation.title}
          </h3>
          <div className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {Page1Data.activation.description.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph.trim()}</p>
            ))}
          </div>
        </div>
      </section>
      <Footer next='ContentCreation'/>
    </div>
  );
};

export default Page1;