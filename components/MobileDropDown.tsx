import React, { useState } from "react";
import styles from "../styles/MobileDropDown.module.css";

const MobileDropDown = ({ key, title, href, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden mt-4 mx-1">
      <div
        className={`flex p-4 items-center justify-between  ${
          isOpen ? " bg-customGray " : ""
        }  `}
      >
        <span className="cursor-pointer ">{title}</span>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 cursor-pointer ${isOpen ? "" : "rotate-180"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </div>
      </div>
      {isOpen && (
        <div className=" h-12 px-2 py-4 flex space-x-4 cursor-pointer flex-wrap ">
          {links.map((link, index) => (
            <h1
              className=" hover:underline text-sm font-extralight"
              key={index}
            >
              {link}
            </h1>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileDropDown;
