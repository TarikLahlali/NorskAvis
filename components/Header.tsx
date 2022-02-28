import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRef } from "react";
import UseOnClickOutside from "../hooks/useClickOutside";
import headerStyles from "../styles/Header.module.css";
import logo from "../public/logoNorskAvis.png";
import DropDown from "./DropDown";
import MobileDropDown from "./MobileDropDown";
import { data } from "./dataLinks.js";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const openClass = isClicked ? headerStyles.open : "";
  const flip = isClicked ? headerStyles.flip : "";
  const clickOutsidehandler = () => {
    setIsClicked(false);
  };
  const squareBoxRef = useRef<HTMLDivElement>(null);
  UseOnClickOutside(squareBoxRef, clickOutsidehandler);

  return (
    <div ref={squareBoxRef}>
      <div className="border-b border-b-gray">
        <header className="flex max-w-5xl items-center justify-between px-4 font-thin md:m-auto">
          <div className="flex h-14 sm:h-20 items-center space-x-5 ">
            <div className="cursor-pointer w-28 md:w-32  object-contain ">
              <Link href="/" passHref>
                <Image src={logo} alt="logo" />
              </Link>
            </div>
            <nav
              role="navigation"
              className=" transitionMargin hidden h-20  overflow-hidden   md:inline-block"
            >
              <ul
                className={`transitionMargin flex space-x-4  pt-2 ${
                  isClicked ? "-mt-11" : "mt-5"
                }`}
              >
                <li>
                  <Link href="/amagasinet">
                    <a className=" px-2 py-7 hover:underline">A-magasinet</a>
                  </Link>
                </li>
                <li>
                  <Link href="/oslo">
                    <a className="  px-2 py-7 hover:underline">Oslo</a>
                  </Link>
                </li>
                <li>
                  <Link href="/sport">
                    <a className="  px-2 py-7 hover:underline">Sport</a>
                  </Link>
                </li>
                <li>
                  <Link href="/meninger">
                    <a className="  px-2 py-7 hover:underline">Meninger</a>
                  </Link>
                </li>
              </ul>
              <form className="relative mt-8 flex w-96 items-center rounded-3xl bg-customGray px-2 py-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" mr-3 h-4 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  name="search"
                  placeholder="Søk"
                  autoComplete="off"
                  className="bg-customGray"
                />
              </form>
            </nav>
          </div>
          <div className="flex items-center justify-between space-x-5">
            <Link href="/signUp">
              <a className=" rounded-xl bg-customBlue text-sm px-4 md:text-base w-28 md:w-32 md:px-5 py-1 text-white">
                Bli abonnent
              </a>
            </Link>
            <div
              onClick={() => {
                setIsClicked(!isClicked);
              }}
              className={headerStyles.menu}
            >
              <div className={`${headerStyles.flipMenu} ${flip}`}>
                <span className={headerStyles.menuFront}>Meny</span>
                <span className={headerStyles.menuBack}>Lukk</span>
              </div>
              <div className={`${headerStyles.burgerMenu} ${openClass}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </header>
      </div>
      <DropDown isClicked={isClicked} />

      {isClicked &&
        data.map((link) => {
          const { id, url, title, links } = link;

          return (
            <MobileDropDown key={id} href={url} title={title} links={links} />
          );
        })}
    </div>
  );
};

export default Header;
