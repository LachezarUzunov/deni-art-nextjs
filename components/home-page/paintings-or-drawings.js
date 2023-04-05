import { useState } from "react";

import Link from "next/link";
import classes from "./paintings-or-drawings.module.css";

const PaintingsOrDrawings = () => {
  const [hoveredLeft, setIsHoveredLeft] = useState(true);
  const [hoveredRight, setIsHoveredRight] = useState(false);
  const mouseLeftEnterHandler = () => {
    setIsHoveredLeft(true);
  };

  const mouseLeftLeaveHandler = () => {
    setIsHoveredLeft(true);
  };

  const mouseRightEnterHandler = () => {
    setIsHoveredRight(true);
  };

  const mouseRightLeaveHandler = () => {
    setIsHoveredRight(false);
  };

  return (
    <section
      className={`${classes.card} ${hoveredLeft ? classes.hover__left : null} ${
        hoveredRight ? classes.hover__right : null
      }`}
    >
      <article
        onMouseEnter={mouseLeftEnterHandler}
        onMouseLeave={mouseLeftLeaveHandler}
        className={`${classes.left} ${classes.split}`}
      >
        <h1 className={classes.title}>КАРТИНИ</h1>
        <Link className={classes.btn} href="/картини">
          Разгледай
        </Link>
      </article>
      <article
        onMouseEnter={mouseRightEnterHandler}
        onMouseLeave={mouseRightLeaveHandler}
        className={`${classes.right} ${classes.split}`}
      >
        <h1 className={classes.title}>РИСУНКИ</h1>
        <Link className={classes.btn} href="/рисунки">
          Разгледай
        </Link>
      </article>
    </section>
  );
};

export default PaintingsOrDrawings;
