import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

import classes from "./footer.module.css";
import Link from "next/link";
import { useContext } from "react";
import LanguageContext from "@/store/language";

const Footer = () => {
  const languageCtx = useContext(LanguageContext);

  const langVersion = languageCtx.version;

  return (
    <section className={classes.bg}>
      <article className="container">
        <div className={classes.nav}>
          <ul className={classes.nav__links}>
            <li>
              <Link className={classes.lis} href="/">
                {langVersion ? 'НАЧАЛО' : 'HOME'}
              </Link>
            </li>
            <li>
              <Link className={classes.lis} href="/paintings">
                { langVersion ? 'КАРТИНИ' : 'PAINTINGS'}
              </Link>
            </li>
            <li>
              <Link className={classes.lis} href="/drawings">
                { langVersion ? 'РИСУНКИ' : 'DRAWINGS'}
              </Link>
            </li>
            <li>
              <Link className={classes.lis} href="/contact-me">
                { langVersion ? 'КОНТАКТИ' : 'CONTACTS'}
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
