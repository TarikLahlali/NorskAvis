/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import image from "../public/ski.jpeg";
const ArticleContainer = ({ title, image, label, timestamp }) => {
  return (
    <div className="flex-col sm:flex-row max-w-5xl w-full flex my-4 h-38 mx-auto space-x-4 border-b border-gray">
      <img src={image} alt="image" className=" sm:h-40 sm:w-60 "></img>
      <div className="flex flex-col justify-between py-6">
        <h1 className=" text-2xl sm:text-3xl lg:text-4xl md:text-4xl font-semibold">
          {title}
        </h1>
        <div className="flex items-center  mt-4 space-x-2 uppercase text-xs">
          <div className="flex space-x-2">
            <span className="flex relative h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className=" absolute inline-flex h-full w-full rounded-full bg-red-600"></span>
            </span>
            <span className="font-semibold">{label}</span>
          </div>
          <div className="flex space-x-2">
            <span className="font-thin">/</span>
            <span className="font-thin">Ett minutt siden</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleContainer;
