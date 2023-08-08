import { Fragment } from "react";

import classes from "./layout.module.css";
import Footer from "./footer";
import MainNavigation from "./main-navigation";

const Layout = (props) => {
  
  return (
    <Fragment>
      <MainNavigation changeLangVersion/>
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
