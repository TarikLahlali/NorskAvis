import React from "react";
import { data } from "./dataLinks.js";
import SubMenuLinks from "./SubMenuLinks";

const SubMenu = () => {
  return (
    <>
      {data.map((link) => {
        const { id, url, title, links } = link;

        return (
          <div
            className=" border-b border-gray py-4 first:mt-4 last:border-0"
            key={id}
          >
            <SubMenuLinks id={id} href={url} title={title} links={links} />
          </div>
        );
      })}
    </>
  );
};

export default SubMenu;
