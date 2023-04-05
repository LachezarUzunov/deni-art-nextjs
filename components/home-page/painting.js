import { BsArrowRight } from "react-icons/bs";

import Image from "next/image";
import Link from "next/link";
import classes from "./painting.module.css";

const Painting = ({ src, alt, technique, width, height, dimensions }) => {
  return (
    <section className={classes.painting__section}>
      <Image src={src} alt={alt} width={width} height={height} />
      <article className={classes.painting__info}>
        <h3>Заглавие - {alt}</h3>
        <p>Размери в сантиметри - {dimensions}</p>
        <p>Техника на рисуване - {technique}</p>
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
