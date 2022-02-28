import Link from "next/link";
import React from "react";
interface IProp {
  id: number;
  href: string;
  title: string;
  links: string[];
}
const SubMenuLinks: React.FC<IProp> = ({ id, href, title, links }) => {
  return (
    <li key={id} className=" flex w-full flex-wrap space-x-5  ">
      <div className="  text-xl font-medium hover:underline lg:w-24 ">
        {/* <Link href={href}> */}
        <a href={href}>{title}</a>
        {/* </Link> */}
      </div>
      <ul className="ml-4 hidden max-w-lg flex-wrap text-lg font-extralight lg:flex">
        {links.map((link, index) => (
          <li key={index} className=" cursor-pointer  px-2  hover:underline ">
            <Link href={"/"}>
              <a>{link}</a>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default SubMenuLinks;
