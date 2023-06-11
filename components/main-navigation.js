import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import classes from "./main-navigation.module.css";

import Link from "next/link";

const MainNavigation = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__links}>
        <li>
          <Link className={classes.link} href="/">Начало</Link>
        </li>
        <li>
          <Link className={classes.link} href="/za-men">За мен</Link>
        </li>
        <li>
          <Link className={classes.link} href="/kartini">Картини</Link>
        </li>
        <li>
          <Link className={classes.link} href="/risunki">Рисунки</Link>
        </li>
        <li>
          <Link className={classes.link} href="/kontakti">Контакти</Link>
        </li>
      </ul>
      <ul className={classes.nav__socials}>
        <li>
          <a className={classes.link} href="/">
            <BsFacebook />
          </a>
        </li>
        <li>
          <a className={classes.link} href="/">
            <BsInstagram />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
