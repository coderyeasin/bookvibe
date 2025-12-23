import React from "react";
import { NavLink } from "react-router";

const NavbarDesign = () => {
  const commonCls = "px-4 py-2 cursor-pointer text-[#131313] text-lg block";
  const activeCls =
    "px-4 py-2 cursor-pointer border-2 border-[#23BE0A] text-[#23BE0A] font-semibold text-lg rounded-md block";

  const getLinkClass = ({ isActive }) => (isActive ? activeCls : commonCls);

  const links = (
    <>
      <li>
        <NavLink to="/" className={getLinkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/listedBooks" className={getLinkClass}>
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink to="/pages" className={getLinkClass}>
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="w-full flex items-center justify-between m-0 p-0 min-h-[57px] my-[2.5rem] bg-white">
      <div className="flex-1 flex items-center min-w-0">
        <span className="text-[2rem] font-bold cursor-pointer whitespace-nowrap">
          Book Vibe
        </span>
      </div>

      <div className="flex-2 flex justify-center items-center min-w-0">
        <ul className="flex list-none m-0 p-0 gap-2 items-center">{links}</ul>
      </div>

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
