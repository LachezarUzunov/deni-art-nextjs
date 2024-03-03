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
                <Link className={`${classes.lis} bgFont`} href="/">
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
                <Link className={`${classes.lis} bgFont`} href="/paintings">
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
                <Link className={`${classes.lis} bgFont`} href="/drawings">
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
                <Link className={`${classes.lis} bgFont`} href="/contact-me">
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
              <Link className={classes.lis} href="https://www.facebook.com/people/DeniGreg-Art/61553292177686/">
                <BsFacebook />
              </Link>
            </li>
            <li>
              <Link className={classes.lis} href="https://www.instagram.com/denigregart/">
                <BsInstagram />
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Footer;
