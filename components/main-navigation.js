import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import classes from "./main-navigation.module.css";

import Link from "next/link";

const MainNavigation = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__links}>
        <li>
          <Link href="/">НАЧАЛО</Link>
        </li>
        <li>
          <Link href="/za-men">ЗА МЕН</Link>
        </li>
        <li>
          <Link href="/galeria">ГАЛЕРИЯ</Link>
        </li>
        <li>
          <Link href="/kontakti">КОНТАКТИ</Link>
        </li>
      </ul>
      <ul className={classes.nav__socials}>
        <li>
          <a href="/">
            <BsFacebook />
          </a>
        </li>
        <li>
          <a href="/">
            <BsInstagram />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
