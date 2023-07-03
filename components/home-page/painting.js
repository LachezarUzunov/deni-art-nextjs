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
      <div className={`${classes.blur_load} ${classes.background_image}`}>
        <Image className={`${classes.image} ${classes.display}`} src={src} alt={alt} width={width} height={height} />
      </div>
      
      <div className={classes.centered}>
        <Image className={`${classes.image} ${classes.display_m}`} src={src} alt={alt} width={`${Math.floor(width / 1.3)}`} height={`${Math.floor(height / 1.3)}`} />
      </div>
      <article className={classes.painting__info}>
        <h3 className={classes.image_title}>{alt}</h3>
        <p className={classes.fragment}>Размери в сантиметри - {dimensions}</p>
        <p className={classes.fragment}>Техника на рисуване - {technique}</p>
        <p className={classes.fragment}>{text}</p>
        <div className={classes.centered}>
        <Link className={`btn__primary ${classes.btn}`} href="/kartini">
          Окачи я в своя дом
          <BsArrowRight />
        </Link>
        </div>
      </article>
    </section>
  );
};

export default Painting;
