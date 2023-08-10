import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

import classes from "./footer.module.css";
import Link from "next/link";
import { useContext } from "react";
import LanguageContext from "@/store/language";

const Footer = () => {
  const languageCtx = useContext(LanguageContext);

  const bulgarian = languageCtx.version;

  return (
    <section className={classes.bg}>
      <article className="container">
        <div className={classes.nav}>
          <ul className={classes.nav__links}>
            <li>
              { bulgarian ?
                <Link className={classes.lis} href="/">
                  НАЧАЛО
                </Link> 
              :
                <Link className={`${classes.lis} typewriter`} href="/">
                  HOME
                </Link>
              }
            </li>
            <li>
              { bulgarian ?
                <Link className={classes.lis} href="/paintings">
                  КАРТИНИ
                </Link> 
              :
                <Link className={`${classes.lis} typewriter`} href="/paintings">
                  PAINTINGS
                </Link>
              }
            </li>
            <li>
              { bulgarian ?
                <Link className={classes.lis} href="/drawings">
                  РИСУНКИ
                </Link> 
              :
                <Link className={`${classes.lis} typewriter`} href="/drawings">
                  DRAWINGS
                </Link>
              }
            </li>
            <li>
              { bulgarian ?
                <Link className={classes.lis} href="/contact-me">
                  КОНТАКТИ
                </Link> 
              :
                <Link className={`${classes.lis} typewriter`} href="/contact-me">
                  CONTACTS
                </Link>
              }
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
