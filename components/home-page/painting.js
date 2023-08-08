import { BsArrowRight } from "react-icons/bs";

import Image from "next/image";
import Link from "next/link";
import classes from "./painting.module.css";

const Painting = ({ src, name, enName, alt, technique, enTechnique, width, height, dimensions, title, enTitle, text, enText, bulgarian }) => {

  const splitted = text?.split()

  return (
    <section className={classes.painting__section}>
      <div className={`${classes.blur_load} ${classes.background_image}`}>
        <Image className={`${classes.image} ${classes.display}`} src={src} alt={alt} width={width} height={height} />
      </div>
      
      <div className={classes.centered}>
        <Image className={`${classes.image} ${classes.display_m}`} src={src} alt={alt} width={`${Math.floor(width / 1.3)}`} height={`${Math.floor(height / 1.3)}`} />
      </div>
      <article className={classes.painting__info}>
        <h3 className={classes.image_title}>{ bulgarian ? `${name}` : `${enName}`}</h3>
        <p className={classes.fragment}>{ bulgarian ? `Размери в сантиметри - ${dimensions}` : `Dimensions in sentimeters - ${dimensions}`}</p>
        <p className={classes.fragment}>{ bulgarian ? `Техника на рисуване - ${technique}` : `Drawing technique - ${enTechnique}`}</p>
        <h2 className={classes.title}>{ bulgarian ? `${title}` : `${enTitle}`}</h2>
        <p className={classes.fragment}>{ bulgarian ? `${text}` : `${enText}`}</p>
        <div className={classes.centered}>
        <Link className={`btn__primary ${classes.btn}`} href="/contact-me">
          { bulgarian ? 'Окачи я в своя дом' : 'Hang it in your home'}
          <BsArrowRight />
        </Link>
        </div>
      </article>
    </section>
  );
};

export default Painting;
