const Front2 = () => {
  return (
    <div className="flex flex-col w-[90vw] mx-auto">
      {" "}
      {/* Center the container */}
      {/* First Section: 40vh */}
      <div className="flex flex-col md:flex-row h-[40vh]">
        <div className="p-4 md:p-8 w-full md:w-[30%] flex flex-col gap-4 bg-black text-white">
          {" "}
          {/* Use responsive width */}
          <h4 className="text-xl md:text-2xl text-white font-bold underline">
            WHO WE ARE
          </h4>{" "}
          {/* Responsive text size */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl leading-tight">
            We are a team of innovative marketers and tech enthusiasts.
          </h1>
        </div>
        <div className="p-4 md:p-8 w-full md:w-[70%] flex flex-col gap-4 bg-blue-700">
          {" "}
          {/* Use responsive width */}
          <h4 className="text-xl md:text-2xl text-white font-bold underline">
            CONCEPT
          </h4>{" "}
          {/* Responsive text size */}
          <p className="text-sm md:text-lg leading-relaxed text-white">
            At House of Marktech, we leverage advanced technologies and creative
            strategies to deliver all-in-one marketing solutions. With our
            expertise, we empower brands to achieve their goals and foster
            growth, serving a diverse portfolio of clients across various
            industries.
          </p>
        </div>
      </div>
      {/* Second Section: 60vh */}
      <div className="h-[60vh] w-full">
        <video
          src="https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/v1/About%20us/vlw3lkdmzist3gumfqlp"
          alt=""
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
};

export default Front2;
