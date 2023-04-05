import { BsArrowRight } from "react-icons/bs";

import Image from "next/image";
import Link from "next/link";
import classes from "./on-focus.module.css";

const OnFocus = () => {
  return (
    <section className={classes.background}>
      <section className={`container ${classes.focus__section}`}>
        <Image
          src="/paintings/Басмая.jpg"
          alt="Басмая"
          width={600 / (60 / 40)}
          height={600}
        />
        <article className={classes.onfocus__info}>
          <h2>На фокус</h2>
          <h3>Басмая</h3>
          <p>Размери в сантиметри - 60 на 40</p>
          <p>
            Кратък текст, импресия. Кратък текст, импресия. Кратък текст,
            импресия. Кратък текст, импресия. Кратък текст, импресия. Кратък
            текст, импресия. Кратък текст, импресия
          </p>
          <Link className={`btn__primary ${classes.btn}`} href="/za-men">
            Окачи я в своя дом <BsArrowRight />
          </Link>
        </article>
      </section>
    </section>
  );
};

export default OnFocus;
