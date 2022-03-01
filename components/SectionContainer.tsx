/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import SectionArticle from "./SectionArticle";
import Dot from "./Dot";
const SectionContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-darkBlue px-3 max-w-[1024px] text-white ">
      <div className=" mt-4 ">
        <div className="flex justify-between py-2 cursor-pointer ">
          <h1 className="font-bold font-serif">Krigen i Ukraina</h1>
          <div className="flex space-x-2">
            <span className="font-thin text-sm">Les mer om saken her</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
        <div className="sm:flex font-thin sm:space-x-9 pt-2 border-b-1 border-gray pb-4 ">
          <div className="flex-1 pb-2 ">
            <h1>
              <Dot big={true} />
              Russlands massive militære angrep på Ukraina fortsetter på sjette
              døgnet.
              {!isOpen && (
                <span className="sm:hidden">
                  <span>...</span>
                  <span
                    className="text-blue-400 font-medium cursor-pointer"
                    onClick={() => setIsOpen(true)}
                  >
                    Se mer
                  </span>
                </span>
              )}
            </h1>
          </div>
          <div className=" hidden sm:flex flex-1 pb-2">
            <h1>
              <Dot big={true} />
              Satellittbilder viser angivelig en 64 kilometer lang russisk
              militærkolonne på vei mot Ukrainas hovedstad.
            </h1>
          </div>
          <div className="hidden sm:flex flex-1 pb-2">
            <h1>
              <Dot big={true} />
              FNs høykommissær for flyktninger, sier en halv million har flyktet
              fra Ukraina.
            </h1>
          </div>
          {isOpen && (
            <div>
              <div className=" flex-1 pb-2">
                <h1>
                  <Dot big={true} />
                  Satellittbilder viser angivelig en 64 kilometer lang russisk
                  militærkolonne på vei mot Ukrainas hovedstad.
                </h1>
              </div>
              <div className="flex-1 pb-2">
                <h1>
                  <Dot big={true} />
                  FNs høykommissær for flyktninger, sier en halv million har
                  flyktet fra Ukraina.
                </h1>
              </div>
            </div>
          )}
        </div>

        {/*---------------------*/}

        <div className="sm:flex my-4">
          <div className="flex-1  sm:border-r-1 border-gray  sm:pr-4">
            <SectionArticle
              title=" Zelenskyj i følelsesladd tale til EU: - For noen er det deres
                  siste dag"
              time={20}
              label="Abonnent"
              image="/euTale.jpeg"
              main={true}
            />
          </div>
          <hr />
          <div className="flex-1 sm:ml-4 divide-y divide-gray ">
            <SectionArticle
              title=" Zelenskyj i følelsesladd tale til EU: - For noen er det deres
                  siste dag"
              time={20}
              label="Abonnent"
              image="/euTale.jpeg"
            />
            <SectionArticle
              title="Forsker: - Ingen statsleder i Europa har snakket slik siden
                  Hitler"
              time={43}
              image="/putin.jpeg"
            />
            <SectionArticle
              title=" Kraftige angrep mot Ukrainas nest største by"
              time={50}
              label="Abonnent"
              image="/angrip.jpeg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionContainer;
