import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

import classes from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <section className={classes.bg}>
      <article className="container">
        <div className={classes.nav}>
          <ul className={classes.nav__links}>
            <li>
              <Link className={classes.lis} href="/">
                НАЧАЛО
              </Link>
            </li>
            <li>
              <Link className={classes.lis} href="/za-men">
                ЗА МЕН
              </Link>
            </li>
            <li>
              <Link className={classes.lis} href="/kartini">
                КАРТИНИ
              </Link>
            </li>
            <li>
              <Link className={classes.lis} href="/risunki">
                РИСУНКИ
              </Link>
            </li>
            <li>
              <Link className={classes.lis} href="/kontakti">
                КОНТАКТИ
              </Link>
            </li>
          </ul>
          <ul className={classes.nav__links}>
            <li>
              <a className={classes.lis}>
                <BsFacebook />
              </a>
            </li>
            <li>
              <a className={classes.lis}>
                <BsInstagram />
              </a>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Footer;
