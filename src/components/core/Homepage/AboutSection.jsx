const AboutSection = () => {

  return (
    <div className="w-full">
      <div className="container py-20 mx-auto">
        <p className="text-center font-black text-5xl">
          “Icons library” for Design Engineers.
        </p>
        <p className="text-center mt-7 font-semibold">
          Explore a handpicked collection of top-tier, free icons from around
          the web, <br /> ready for seamless integration into your projects—all in one
          easy-to-access hub.
        </p>
        {/* <div className="flex justify-center mt-10 gap-4">
          <div className="relative">
            <FaReact
              className="text-3xl opacity-50 hover:opacity-100 duration-300 transition-all cursor-pointer"
              onMouseEnter={() => handleMouseEnter("react")}
            />
            {showPopover === "react" && (
              <div className="absolute -top-6 -left-10 bg-[#1E293B] tracking-wide px-2 rounded-full duration-300 transition-all ease-in-out w-max">
                React v20.01
              </div>
            )}
          </div>
          <div className="relative">
            <RiNextjsLine
              className="text-3xl opacity-50 hover:opacity-100 duration-300 transition-all cursor-pointer"
              onMouseEnter={() => handleMouseEnter("nextjs")}
            />
            {showPopover === "nextjs" && (
              <div className="absolute -top-6 -left-10 bg-[#1E293B] tracking-wide px-2 rounded-full duration-300 transition-all ease-in-out w-max">
                Nextjs v20.01
              </div>
            )}
          </div>
          <div className="relative">
            <RiTailwindCssFill
              className="text-3xl opacity-50 hover:opacity-100 duration-300 transition-all cursor-pointer"
              onMouseEnter={() => handleMouseEnter("tailwind")}
            />
            {showPopover === "tailwind" && (
              <div className="absolute -top-6 -left-10 bg-[#1E293B] tracking-wide px-2 rounded-full duration-300 transition-all ease-in-out w-max">
                Taiwind v3.4.10
              </div>
            )}
          </div>
          <div className="relative">
            <SiTypescript
              className="text-3xl opacity-50 hover:opacity-100 duration-300 transition-all cursor-pointer"
              onMouseEnter={() => handleMouseEnter("typescript")}
            />
            {showPopover === "typescript" && (
              <div className="absolute -top-6 -left-10 bg-[#1E293B] tracking-wide px-2 rounded-full duration-300 transition-all ease-in-out w-max">
                Comming soon
              </div>
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutSection;
