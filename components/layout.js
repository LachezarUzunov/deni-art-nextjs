import { Fragment } from "react";
import MainNavigation from "./main-navigation";

import classes from "./layout.module.css";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
