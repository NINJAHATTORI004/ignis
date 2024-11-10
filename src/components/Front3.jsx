import Founders from "./Founders";

const Front3 = () => {
  return (
    <div className="flex flex-col w-[90vw] mx-auto">
      <div className="flex h-[40vh] flex-col md:flex-row justify-center items-center bg-blue-700">
        <h2 className="text-center text-white text-6xl md:text-8xl font-bold mb-6 md:mb-10 tracking-wide">
          Snippets
        </h2>
      </div>

      <div className="h-[60vh] w-full">
        <Founders />
      </div>
    </div>
  );
};

export default Front3;


