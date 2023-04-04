import Image from "next/image";

import classes from "./heading.module.css";

const Heading = () => {
  return (
    <section className={classes.hero}>
      <article className={classes.hero__info}>
        <h1 className={classes.hero__heading}>Деница Кръстанова</h1>
        <h3>Творец и изследовател на човешката душа</h3>
      </article>

      <Image src="/site/deni.jpg" alt="artist" width={480} height={650} />
    </section>
  );
};

export default Heading;
