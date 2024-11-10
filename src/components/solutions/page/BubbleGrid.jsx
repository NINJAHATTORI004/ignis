import { Link } from "react-router-dom"; // Import Link for routing


const BubbleGrid = () => {
  // Create an array of objects containing names and their respective routes
  const bubbleData = [

    { name: "AI Chatbot Support" },
{ name: "Dropout Predictor" },
{ name: "Personalized Plans" },
{ name: "Privacy Focused" },
{ name: "Real-Time Alerts" },
{ name: "Mental Health Aid" },
{ name: "Academic Advice" },
{ name: "Scholarship Updates" },
{ name: "Mentor Connect" },
{ name: "Journey Tracker" },
{ name: "Data-Driven Insights" },
  ];



  return (
    <div className=" flex flex-wrap justify-center gap-6 lg:gap-10 p-5 sm:px-10 py-24 bg-blue-600">
      {bubbleData.map((bubble, index) => (
        <Link
          key={index}
          to={bubble.path} // Use the path for navigation
          className="flex justify-center items-center z-10" // Flex container to center the bubble
        >
          <div className="float bubble font-semibold text-center w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 flex justify-center items-center bg-blue-500 text-white text-xl rounded-full"
            style={{ animationDelay: `${index * 0.5}s` }}>
            {bubble.name}
          </div>
        </Link>
      ))}
      

    </div>
  );
};

export default BubbleGrid;
