import { BsArrowRight } from "react-icons/bs";

import Image from "next/image";
import Link from "next/link";
import classes from "./painting.module.css";

const Painting = ({ src, name, enName, alt, technique, enTechnique, width, height, dimensions, title, enTitle, text, enText, bulgarian }) => {

  return (
    <section className={classes.painting__section}>
      <div className={`${classes.blur_load} ${classes.background_image}`}>
        <Image className={`${classes.image} ${classes.display}`} src={src} alt={alt} width={width} height={height} />
      </div>
      
      <div className={classes.centered}>
        <Image className={`${classes.image} ${classes.display_m}`} src={src} alt={alt} width={`${Math.floor(width / 1.3)}`} height={`${Math.floor(height / 1.3)}`} />
      </div>
      <article className={classes.painting__info}>
        { bulgarian ?
          <h3 className={`${classes.image_title} bgTitle`}>{name}</h3>
        :
          <h3 className={`${classes.image_title} henni`}>{enName}</h3>
        }
        { bulgarian ?
          <p className={`${classes.fragment} bgFont`}>Размери в сантиметри - {dimensions}</p>
        :
          <p className={`${classes.fragment} typewriter`}>Dimensions in sentimeters - {dimensions}</p>
        }
        { bulgarian ?
          <p className={`${classes.fragment} bgFont`}>Техника на рисуване - {technique}</p>
        :
          <p className={`${classes.fragment} typewriter`}>Drawing technique - {enTechnique}</p>
        }
        { bulgarian ?
          <h2 className={`${classes.title} bgTitle`}>{title}</h2>
        :
          <h2 className={`${classes.title} henni`}>{enTitle}</h2>
        }
        { bulgarian ?
          <p className={`${classes.fragment} bgFont`}>{text}</p>
        :
          <p className={`${classes.fragment} typewriter`}>{enText}</p>
        }
        
        <div className={classes.centered}>
        { bulgarian ?
          <Link className={`btn__primary ${classes.btn} bgFont`} href="/contact-me">
            Окачи я в своя дом
            <BsArrowRight />
          </Link>
        :
          <Link className={`btn__primary ${classes.btn} typewriter`} href="/contact-me">
            Hang it in your home
            <BsArrowRight />
          </Link>
        }
        
        </div>
      </article>
    </section>
  );
};

export default Painting;
