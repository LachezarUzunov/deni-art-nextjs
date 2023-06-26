import { BsArrowRight } from "react-icons/bs";

import Image from "next/image";
import Link from "next/link";
import classes from "./painting.module.css";

const Painting = ({ src, alt, technique, width, height, dimensions, text }) => {

  console.log(text)
  const splitted = text?.split()
  console.log(splitted)


  return (
    <section className={classes.painting__section}>
      <Image className={classes.image} src={src} alt={alt} width={width} height={height} />
      <article className={classes.painting__info}>
        <h3 className={classes.image_title}>{alt}</h3>
        <p>Размери в сантиметри - {dimensions}</p>
        <p>Техника на рисуване - {technique}</p>
        <p>{text}</p>
        <Link className={`btn__primary ${classes.btn}`} href="/za-men">
          Окачи я в своя дом
          <BsArrowRight />
        </Link>
      </article>
    </section>
  );
};

export default Painting;
