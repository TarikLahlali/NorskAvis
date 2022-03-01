/* eslint-disable @next/next/no-img-element */
import React from "react";
import Dot from "./Dot";

interface ISectionArticleProps {
  title: string;
  // time: Date;
  time: number;
  label?: string;
  image: string;
  main?: boolean;
}

const SectionArticle: React.FC<ISectionArticleProps> = ({
  title,
  time,
  label,
  image,
  main,
}) => {
  return (
    <div>
      <div
        className={`flex-1 flex  overflow-hidden py-2 
            ${main ? "flex-col " : ""}`}
      >
        <div className=" flex flex-col justify-between ">
          <h1 className={`font-serif ${main ? "text-4xl mb-6" : "text-xl"}`}>
            {title}
          </h1>
          <h1 className="font-thin text-sm">
            <span>{time} minutter siden</span>
            {label && <Dot />}
            <span>{label}</span>
          </h1>
        </div>
        <img
          src={image}
          alt="russisk Kolonne"
          className={` ${main ? "w-full pt-4  " : " pl-4 w-1/2"}`}
        />
      </div>
    </div>
  );
};

export default SectionArticle;
