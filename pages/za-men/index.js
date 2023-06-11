import Link from "next/link";
import classes from "./index.module.css";
import { BsArrowRight } from "react-icons/bs";

const AboutMe = () => {
  return (
    <section className="container">
        <div className="container">
        <div>
          <h3 className={classes.title}>Какво правя и защо?</h3>
        </div>
        <section className={classes.info}>
          <article>
            <h4>
              Щастлив е този, който може да види красотата в обичайните неща,
              там, където другите не виждат нищо!
            </h4>
          </article>
          <article>
            <p>
              Родена съм през ноември 1989г., един мил скорпион. 😉 
            </p>
            <p>
              За мен истински важните неща за един творец… Това, което ме
              провокира и от което черпя вдъхновение са … не мога да не отбележа
              и … и така нататък, така нататък и така нататък и така нататък.
            </p>
            <p>
              За мен истински важните неща за един творец… Това, което ме
              провокира и от което черпя вдъхновение са … не мога да не отбележа
              и … и така нататък, така нататък и така нататък и така нататък.
            </p>
            <Link className={`btn__primary ${classes.btn}`} href="/za-men">
              Научи повече за мен <BsArrowRight />
            </Link>
          </article>
        </section>
      </div>
    </section>
  );
};

export default AboutMe;
