import { BsArrowRight } from "react-icons/bs";

import Image from "next/image";
import Link from "next/link";
import classes from "./painting.module.css";

const Painting = () => {
  return (
    <section className={classes.background}>
      <Image />
      <article>
        <h3>Размери в сантиметри</h3>
        <p>
          Мога да рисувам само това, което виждам. Моята работа винаги е добра,
          когато аз съм сам, и следвам своите собствени впечатления.
        </p>
        <h4>Клод Моне</h4>
        <Link className={`btn__primary ${classes.btn}`} href="/za-men">
          Окачи я в своя дом
          <BsArrowRight />
        </Link>
      </article>
    </section>
  );
};

export default Painting;
