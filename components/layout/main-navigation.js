import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import classes from "./main-navigation.module.css";

import Link from "next/link";
import { Fragment, useState, useContext } from "react";
import Image from "next/image";
import LanguageContext from "@/store/language";

const MainNavigation = ({ bulgarianVersion }) => {
  const languageCtx = useContext(LanguageContext);

  const [active, setActive] = useState("home");
  const [openMobile, setOpenMobile] = useState(true);
  const [bulgarian, setBulgarian] = useState(true);

  const onMenuClick = (e) => {
    setActive(e.target.name);
    setOpenMobile(true);
  };

  const onMobileFlagClick = (e) => {
    if (e.target.name === "bulgarian") {
      languageCtx.changeLang(true)
      setBulgarian(false);
    } else {
      languageCtx.changeLang(false)
      setBulgarian(true);
    }

    setOpenMobile(true);
  };

  return (
    <Fragment>
    {bulgarian ? (
      <nav>
        {openMobile ? (
          <button
            onClick={() => setOpenMobile(false)}
            className={`${classes.mobile__btn}`}
          >
            <GiHamburgerMenu />
          </button>
        ) : (
          <button
            onClick={() => setOpenMobile(true)}
            className={`${classes.mobile__btn}`}
          >
            <CgClose />
          </button>
        )}

        <ul
          className={`${classes.nav} ${
            openMobile ? classes.closed : classes.open
          }`}
          id="home"
        >
          <li onClick={onMenuClick}>
            <Link
              name="home"
              className={`${classes.link} ${
                active === "home" ? classes.active : ""
              }`}
              href="/"
            >
              Начало
            </Link>
          </li>
          <li onClick={onMenuClick}>
            <Link
              name="painting"
              className={`${classes.link} ${
                active === "painting" ? classes.active : ""
              }`}
              href="/paintings"
            >
              Картини
            </Link>
          </li>
          <li onClick={onMenuClick}>
            <Link
              name="drawing"
              className={`${classes.link} ${
                active === "drawing" ? classes.active : ""
              }`}
              href="/drawings"
            >
              Рисунки
            </Link>
          </li>
          <li onClick={onMenuClick}>
            <Link
              name="contact"
              className={`${classes.link } ${
                active === "contact" ? classes.active : ""
              }`}
              href="/contact-me"
            >
              Контакти
            </Link>
          </li>
          <li>
          <Link className={classes.link} href="https://www.facebook.com">
            <BsFacebook />
          </Link>
        </li>
        <li>
          <Link className={classes.link} href="/">
            <BsInstagram />
          </Link>
        </li>
          <li>
            <Image
              onClick={onMobileFlagClick}
              name="bulgarian"
              src="/site/uk.png"
              width={32}
              height={32}
              className={classes.btn__flag}
              alt="britain_flag"
            ></Image>
          </li>
        </ul>
      </nav>
    ) : (
      <nav>
        {openMobile ? (
          <button
            onClick={() => setOpenMobile(false)}
            className={`${classes.mobile__btn}`}
          >
            <GiHamburgerMenu />
          </button>
        ) : (
          <button
            onClick={() => setOpenMobile(true)}
            className={`${classes.mobile__btn}`}
          >
            <CgClose />
          </button>
        )}

        <ul
          className={`${classes.nav} ${
            openMobile ? classes.closed : classes.open
          }`}
          id="home"
        >
          <li onClick={onMenuClick}>
            <Link
              name="home"
              className={`${classes.link} ${
                active === "home" ? classes.active : ""
              } typewriter`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li onClick={onMenuClick}>
            <Link
              name="painting"
              className={`${classes.link} ${
                active === "painting" ? classes.active : ""
              } typewriter`}
              href="/paintings"
            >
              Paintings
            </Link>
          </li>
          <li onClick={onMenuClick}>
            <Link
              name="drawing"
              className={`${classes.link} ${
                active === "drawing" ? classes.active : ""
              } typewriter`}
              href="/drawings"
            >
              Drawings
            </Link>
          </li>
          <li onClick={onMenuClick}>
            <Link
              name="contact"
              className={`${classes.link} ${
                active === "contact" ? classes.active : ""
              } typewriter`}
              href="/contact-me"
            >
              Contact Me
            </Link>
          </li>
          <li>
          <Link className={classes.link} href="https://www.facebook.com">
            <BsFacebook />
          </Link>
        </li>
        <li>
          <Link className={classes.link} href="/">
            <BsInstagram />
          </Link>
        </li>
          <li>
            <Image
              onClick={onMobileFlagClick}
              name="britain"
              src="/site/bg.png"
              width={32}
              height={32}
              className={classes.btn__flag}
              alt="bulgarian_flag"
            ></Image>
          </li>
        </ul>
      </nav>
    )}
  </Fragment>
  )
};

export default MainNavigation;
