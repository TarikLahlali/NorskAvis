import React from "react";
import SubMenu from "./SubMenu";
import dropDownStyles from "../styles/DropDown.module.css";

const DropDown: React.FC<{ isClicked: boolean }> = ({ isClicked }) => {
  return (
    <div
      className={
        isClicked
          ? dropDownStyles.container + " " + dropDownStyles.active
          : dropDownStyles.container
      }
    >
      <div className="m-auto flex h-full max-w-5xl px-4">
        <div className="mr-8 w-2/3">
          <SubMenu />
        </div>
        <div className="hidden  w-1/3 bg-customGray lg:flex">
          <ul className="mx-auto">
            <button className="bg-white my-10 w-60 h-12 font-extralight">
              <a href="/signIn">Logg inn</a>
            </button>
            <ul>
              <li>
                <a href="/signUp">Bli abonnent</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Min side</a>
              </li>
              <li>
                <a href="">A-kortet</a>
              </li>
              <li>
                <a href="">Mine leste artikler</a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropDown;