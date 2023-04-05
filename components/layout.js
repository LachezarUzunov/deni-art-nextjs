import { Fragment } from "react";
import MainNavigation from "./main-navigation";

import classes from "./layout.module.css";
import Footer from "./footer";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
