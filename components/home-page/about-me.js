import Link from "next/link";
import classes from "./about-me.module.css";
import { BsArrowRight } from "react-icons/bs";
import React from "react";


const AboutMe = ({ bulgarian }) => {
  return (
    <React.Fragment>
  
    <section className={classes.background}>
      <div className="container">
        <div>
          { bulgarian ? 
            <h3 className={`${classes.title} ${classes.bgFontTitle}`}>Какво правя и защо?</h3> 
          :
            <h3 className={`${classes.title} henni`}>What do I do and why?</h3>
          }
        </div>
        <section className={classes.info}>
          <article className={classes.display}>
            {bulgarian ?
              <div>
                <h4 className={classes.bgTitleAnother}>&quot;Изкуството няма нищо общо с яснота. Нито се набърква в ясното, нито изяснява&quot;</h4>
                <h5 className={`${classes.cite} bgFont`}>Самюъл Бекет</h5>
              </div>
              
            :
              <div>
                <h4 className="henni">Art has nothing to do with clarity, does not dabble in the clear and does not clear</h4>
                <h5 className={`${classes.cite} typewriter`}>Samuel Beckett</h5>
              </div>
            }
           
          </article>
          <article>
            { bulgarian ? 
              <p className="bgFont shadow">Родена съм през ноември 1989г., един мил скорпион. 😉</p>
            :
              <p className="typewriter shadow">I was born November, 1989., a kind scorpio. 😉</p>
            }

            { bulgarian ? 
              <p className="bgFont shadow">Рисувам и пиша, вдъхновена от емоционалния и интуитивния свят, както и от символното значение на природата и социалните роли. Работя предимно с акрил, смесена техника. За мен рисуването е израз на специфични усещания без претенция за техническо съвършенство.</p>
            :
              <p className="typewriter shadow">I paint and write inspired by the emotional and intuitive world as well as the symbolic meaning of nature and social roles. I work mainly with mixed acrylic media. For me, art is an expression of specific feelings without any claim to technical perfection.</p>
            }
           
            { bulgarian ? 
              <div className={classes.display_m}>
                <h4 className={`${classes.bgTitleAnother}`}>
                &quot;Изкуството няма нищо общо с яснота. Нито се набърква в ясното, нито изяснява&quot;
                </h4>
                <h5 className={`${classes.cite} bgFont`}>Самюъл Бекет</h5>
              </div>
              
            :
              <div className={classes.display_m}>
                <h4 className={`henni`}>
                &quot;Art has nothing to do with clarity, does not dabble in the clear and does not clear&quot;
                </h4>
                <h5 className={`${classes.cite} typewriter`}>Samuel Beckett</h5>
              </div>
            }

            { bulgarian ? 
              <p className="bgFont shadow">Интересите ми са в областта на модерното и съвременното изкуство, криминалната лингвистика и психическите възприятия. Писатели и поети като Бекет, По, Дилън Томас, Силвия Плат са едни от любимите ми…
              </p>
            :
              <p className="typewriter shadow">My interests are in the field of modern and contemporary art, forensic linguistics, and psychic perceptions. Writers and poets like Beckett, Po, Dylan Thomas and Silvia Plath are some of my favourites…
              </p>
            }

            { bulgarian ? 
              <p className="bgFont shadow">През 2008 г. завърших ЕГ &quot;Иван Вазов&quot; гр. Смолян с немски език. Същата година продължих образованието си в СУ &quot;Св. Климент Охридски&quot;, специалност Немска филология, а впоследствие записах магистратура &quot;Философия на съзнанието на езика&quot;. През 2022г. се дипломирах в магистърската програма на НБУ &quot;Криминология и политики за превенция на престъпността&quot;.</p>
            :
              <p className="typewriter shadow">In 2008, I graduated from Language School &quot;Ivan Vazov&quot; in Smolyan with German language. The same year, I continued my education at the University of &quot;St. Kliment Ohridski&quot;, majoring in German philology, and subsequently enrolled in a master&apos;s degree &quot;Philosophy of Mind and Language&quot;. In 2022, I graduated from the Master&apos;s program of the NBU, &quot;Criminology and Crime Prevention Policies&quot;.</p>
            }
            <div className={`${classes.btn_mobile} shadow`}>
              { bulgarian ?
                <Link className={`btn__primary ${classes.btn} bgFont`} href="/contact-me">
                  Пишете ми
                </Link>
              :
                <Link className={`btn__primary ${classes.btn} typewriter`} href="/contact-me">
                  Drop me a line
                </Link>
              }
            </div>
           
          </article>
        </section>
      </div>
    </section>

    </React.Fragment>
  );
};

export default AboutMe;
