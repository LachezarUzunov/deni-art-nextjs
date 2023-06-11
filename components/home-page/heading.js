import Image from "next/image";

import classes from "./heading.module.css";

const Heading = () => {
  return (
    <section className={classes.hero}>
      <article className={`container ${classes.hero_section}`}>
      <div className={classes.hero__info}>
        <h1 className={classes.hero__heading}>Деница Кръстанова</h1>
        <h3>Творец и изследовател на човешката душа</h3>
      </div>

      <Image src="/site/deni.jpg" alt="artist" width={480} height={650} />
      </article>
    </section>
  );
};

export default Heading;
