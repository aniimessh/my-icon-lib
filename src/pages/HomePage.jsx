import { useState } from "react";
import AboutSection from "../components/core/Homepage/AboutSection";
import IconFamilies from "../components/core/Homepage/IconFamilies";

const HomePage = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="bg-[#0B1120] w-full pt-14 relative">
        <div className="container flex flex-col items-center mx-auto text-white my-20">
          <p className="text-6xl text-center font-black ">
            Access a Premium Collection of <br /> Free Icons for Your Web
            Projects
          </p>
          <p className="text-center mt-5 text-lg">
            <span className="opacity-50 font-medium">
              Discover a curated selection of high-quality,{" "}
            </span>
            <span className="text-[#35B2E9] tracking-wide font-fira">
              free icons
            </span>{" "}
            <br />
            <span className="opacity-50 font-medium">
              sourced from across the web.{" "}
            </span>
            <span className="text-[#35B2E9] tracking-wide font-fira">
              {" "}
              Easily integrate
            </span>{" "}
            <span className="opacity-50 font-medium">
              {" "}
              them into your projects, all in one convenient place.{" "}
            </span>
          </p>
          <input
            type="text"
            className="bg-[#1E293B] mt-5 rounded-lg px-4 py-4 h-full w-[300px] font-medium outline-none"
            placeholder="Quick Search.."
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="bg-[#0F172A] text-white w-full">
        <IconFamilies search={search} />
        <AboutSection />
      </div>
    </>
  );
};

export default HomePage;
