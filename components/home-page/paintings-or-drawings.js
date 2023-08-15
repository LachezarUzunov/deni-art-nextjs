import { useState } from "react";

import Link from "next/link";
import classes from "./paintings-or-drawings.module.css";

const PaintingsOrDrawings = ({ bulgarian }) => {
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
      className={`${classes.display_m} ${classes.card} ${hoveredLeft ? classes.hover__left : null} ${
        hoveredRight ? classes.hover__right : null
      }`}
    >
        <article
        onMouseEnter={mouseLeftEnterHandler}
        onMouseLeave={mouseLeftLeaveHandler}
        className={`${classes.left} ${classes.split}`}
      >
        { bulgarian ?
          <h1 className={`${classes.title} bgTitle`}>Картини</h1>
        :
          <h1 className={`${classes.title} henni`}>Paintings</h1>
        }

        { bulgarian ?
          <Link className={`${classes.btn} bgFont`} href="/paintings">
            Разгледай
          </Link>
        :
          <Link className={`${classes.btn} typewriter`} href="/paintings">
            Take a look
          </Link>
        }
        </article>
        <article
        onMouseEnter={mouseRightEnterHandler}
        onMouseLeave={mouseRightLeaveHandler}
        className={`${classes.right} ${classes.split}`}
      >
        { bulgarian ?
          <h1 className={`${classes.title} bgTitle`}>Рисунки</h1>
        :
          <h1 className={`${classes.title} henni`}>Drawings</h1>
        }

        { bulgarian ?
          <Link className={`${classes.btn} bgFont`} href="/drawings">
            Разгледай
          </Link>
        :
          <Link className={`${classes.btn} typewriter`} href="/paintings">
            Take a look
          </Link>
        }
        </article>
      </section>
  );
};

export default PaintingsOrDrawings;
