import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logoNorskAvis.png";
import navStyles from "../styles/Nav.module.css";
import DropDown from "./DropDown";
import { FaSearch } from "react-icons/fa";
const Nav = () => {
  const [open, setOpen] = useState(false);
  const openClass = open ? navStyles.open : "";
  const flip = open ? navStyles.flip : "";
  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.innerContainer}>
        <div className={navStyles.left}>
          <div className={navStyles.logo}>
            <Link href="/" passHref>
              <Image src={logo} alt="logo" />
            </Link>
          </div>
          <div className={navStyles.center}>
            <div
              className={
                open
                  ? navStyles.links + " " + navStyles.active
                  : navStyles.links
              }
            >
              <div className={navStyles.link}>
                <Link href="/about">A-magasinet</Link>
              </div>
              <div className={navStyles.link}>
                <Link href="/about">Oslo</Link>
              </div>
              <div className={navStyles.link}>
                <Link href="/about">Sport</Link>
              </div>
              <div className={navStyles.link}>
                <Link href="/about">Meninger</Link>
              </div>
            </div>
            <form className={navStyles.search}>
              <FaSearch className={navStyles.icon} />
              <input
                type="text"
                name="search"
                placeholder="Søk"
                autoComplete="off"
                className={navStyles.input}
              />
            </form>
          </div>
        </div>
        <div className={navStyles.right}>
          <div className={navStyles.subscribeButton}>
            <Link href="/about">Bli abonnent</Link>
          </div>
          <div
            onClick={() => {
              setOpen(!open);
            }}
            className={navStyles.menu}
          >
            <div className={`${navStyles.flipMenu} ${flip}`}>
              <span className={navStyles.menuFront}>Meny</span>
              <span className={navStyles.menuBack}>Lukk</span>
            </div>
            <div className={`${navStyles.burgerMenu} ${openClass}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <DropDown open={open} />
    </nav>
  );
};

export default Nav;
