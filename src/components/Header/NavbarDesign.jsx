import React from "react";
import { Link } from "react-router";

const NavbarDesign = () => {
  const commonCls = "px-4 py-2 cursor-pointer text-[#131313] text-lg";
  const links = (
    <>
      <Link to="/">
        <li className="px-4 py-2 cursor-pointer border-2 border-[#23BE0A] text-[#23BE0A] font-semibold text-lg rounded-md">
          Home
        </li>
      </Link>
      <Link to="/about">
        <li className={commonCls}>About</li>
      </Link>
      <Link to="/readList">
        <li className={commonCls}>Listed Books</li>
      </Link>
      <li className={commonCls}>Pages to Read</li>
    </>
  );
  return (
    <nav className="w-full flex items-center justify-between m-0 p-0 min-h-[57px] my-[2.5rem] bg-white">
      {/* Left: Brand/Name */}
      <div className="flex-1 flex items-center min-w-0">
        <span className="text-[2rem] font-bold cursor-pointer whitespace-nowrap">
          Book Vibe
        </span>
      </div>
      {/* Center: Menu */}
      <div className="flex-2 flex justify-center items-center min-w-0">
        <ul className="flex list-none m-0 p-0 gap-2">{links}</ul>
      </div>
      {/* Right: Buttons */}
      <div className="flex-1 flex justify-end items-center gap-4 min-w-0">
        <a className="bg-[#23BE0A] text-white rounded-md px-5 py-2 font-medium cursor-pointer no-underline">
          Sign in
        </a>
        <a className="bg-[#59C6D2] text-white rounded-md px-5 py-2 font-medium cursor-pointer no-underline">
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default NavbarDesign;
