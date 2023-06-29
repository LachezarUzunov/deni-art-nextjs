import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import classes from "./main-navigation.module.css";

import Link from "next/link";
import { Fragment, useState } from "react";

const MainNavigation = () => {
  const [active, setActive] = useState("home");
  const [openMobile, setOpenMobile] = useState(true);
  const [bulgarian, setBulgarian] = useState(true);

  const onMenuClick = (e) => {
    setActive(e.target.name);
    setOpenMobile(true);
  };

  return (
    <Fragment>
    {bulgarian ? (
      <nav>
        {/* <button
          className={classes.lang_change_btn}
          onClick={() => setBulgarian(false)}
        >
          <img
            src={require("../../assets/britainflag.png")}
            className="bg__heading"
            alt="britain_flag"
          ></img>
        </button> */}
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
              href="/kartini"
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
              href="/risunki"
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
              href="/kontakti"
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
            {/* <img
              onClick={onMobileFlagClick}
              name="bulgarian"
              src={require("../../assets/britainflag.png")}
              className={classes.btn__flag}
              alt="britain_flag"
            ></img> */}
          </li>
        </ul>
      </nav>
    ) : (
      <nav>
        {/* <button
          className={classes.lang_change_btn}
          onClick={() => setBulgarian(true)}
        >
          <img
            src={require("../../assets/bgflag.png")}
            className="bg__heading"
            alt="bulgarian_flag"
          ></img>
        </button> */}
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
              className={`${active === "home" ? classes.active : ""}`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li onClick={onMenuClick}>
            <Link
              name="painting"
              className={`${active === "painting" ? classes.active : ""}`}
              href="/paintings"
            >
              Paintings
            </Link>
          </li>
          <li onClick={onMenuClick}>
            <Link
              name="drawing"
              className={`${active === "drawing" ? classes.active : ""}`}
              href="/drawings"
            >
              Drawings
            </Link>
          </li>
          <li onClick={onMenuClick}>
            <Link
              name="contact"
              className={`${active === "contact" ? classes.active : ""}`}
              href="/contact-me"
            >
              Contact Me
            </Link>
          </li>
          {/* <li>
            <img
              onClick={onMobileFlagClick}
              name="britain"
              src={require("../../assets/bgflag.png")}
              className={classes.btn__flag}
              alt="bulgarian_flag"
            ></img>
          </li> */}
        </ul>
      </nav>
    )}
  </Fragment>
  )

  // return (
  //   <nav className={`${classes.nav} ${classes.display_m}`}>
  //      {openMobile ? (
  //           <button
  //             onClick={() => setOpenMobile(false)}
  //             className={`${classes.mobile__btn}`}
  //           >
  //             <GiHamburgerMenu />
  //           </button>
  //         ) : (
  //           <button
  //             onClick={() => setOpenMobile(true)}
  //             className={`${classes.mobile__btn}`}
  //           >
  //             <CgClose />
  //           </button>
  //         )}

  //     <ul className={classes.nav__links}>
  //       <li>
  //         <Link className={classes.link} href="/">Начало</Link>
  //       </li>
  //       <li>
  //         <Link className={classes.link} href="/kartini">Картини</Link>
  //       </li>
  //       <li>
  //         <Link className={classes.link} href="/risunki">Рисунки</Link>
  //       </li>
  //       <li>
  //         <Link className={classes.link} href="/kontakti">Контакти</Link>
  //       </li>
  //     </ul>
  //     <ul className={classes.nav__socials}>
        // <li>
        //   <Link className={classes.link} href="https://www.facebook.com">
        //     <BsFacebook />
        //   </Link>
        // </li>
        // <li>
        //   <Link className={classes.link} href="/">
        //     <BsInstagram />
        //   </Link>
        // </li>
  //     </ul>
  //   </nav>
  // );
};

export default MainNavigation;
