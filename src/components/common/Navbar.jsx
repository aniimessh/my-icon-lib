import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex w-full z-10 fixed bg-[#0B1120] text-white rounded-bl rounded-br  justify-center items-end border-b border-b-white border-opacity-20">
      <div className="w-full mx-10 flex justify-between pt-5">
        <Link to={"/"}>
          <p className="font-bold tracking-wider">icons.me</p>
        </Link>
        <div className="flex text-sm gap-8 font-semibold tracking-wide">
          <p>Contribute</p>
          <p>Github</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
