import Image from "next/image";
import classes from "./heading.module.css";

const Heading = ({ bulgarian }) => {

  return (

    <section className={classes.hero}>
      <article className={`container ${classes.hero_section}`}>
      <div className={classes.hero__info}>
        { bulgarian ? 
          <h1 className={`${classes.hero__heading} ${classes.title}`}>Деница Кръстанова</h1>
        :
          <h1 className={`${classes.hero__heading} ${classes.henni}`}>Denitza Krastanova</h1>
        }
        { bulgarian ?
          <h3 className={`${classes.subTitle}`}>&quot;Няма нищо ново освен начинът на подреждане&quot; - Уил Дюрант</h3>
        :
          <h3 className={`${classes.typewritter}`}>&quot;Nothing is new except arrangement&quot; - Will Durant</h3>
        }
        
      </div>
      <Image className={classes.display} src="/site/deni.jpg" alt="artist" width={480} height={650} priority/>
      <Image className={classes.display_m} src="/site/deni.jpg" alt="artist" width={369} height={500} priority/>
      <Image className={classes.display_xsm} src="/site/deni.jpg" alt="artist" width={295} height={400} priority/>
      </article>
    </section>

  );
};

export default Heading;
