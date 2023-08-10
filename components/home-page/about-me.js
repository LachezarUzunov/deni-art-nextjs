import Link from "next/link";
import classes from "./about-me.module.css";
import { BsArrowRight } from "react-icons/bs";

const AboutMe = ({ bulgarian }) => {
  
  return (
    <section className={classes.background}>
      <div className="container">
        <div>
          { bulgarian ? 
            <h3 className={`${classes.title}`}>Какво правя и защо?</h3> 
          :
            <h3 className={`${classes.title} henni`}>What do I do and why?</h3>
          }
        </div>
        <section className={classes.info}>
          <article className={classes.display}>
            {bulgarian ?
              <h4>О, вий, които имате очи печални, с безкрая синкав на морето ги хранете</h4>
            :
              <h4 className="henni">Oh ye! who have your eye-balls vex&apos;d and tir&apos;d, Feast them upon the wideness of the Sea</h4>
            }
           
          </article>
          <article>
            { bulgarian ? 
              <p className={`shadow`}>Родена съм през ноември 1989г., един мил скорпион. 😉</p>
            :
              <p className="typewriter shadow">I was born November, 1989., a kind scorpio. 😉</p>
            }

            { bulgarian ? 
              <p className={`shadow`}>През 2008 г. завърших ЕГ &quot;Иван Вазов&quot; гр. Смолян с немски  и английски език. Същата година продължих образованието си в СУ &quot;Св. Климент Охридски&quot;, специалност Немска филология, а впоследствие записах магистратура &quot;Философия на съзнанието на езика&quot;. През 2022 г. се дипломирах в магистърската програма на НБУ &quot;Криминология и политики за превенция на престъпността.&quot;</p>
            :
              <p className="typewriter shadow">In 2008, I graduated from Language School &quot;Ivan Vazov&quot; in Smolyan with German and English. The same year, I continued my education at Sofia University &quot;St. Kliment Ohridski&quot;, majoring in German philology. I subsequently enrolled in a Master&apos;s degree in &quot;Philosophy of Mind and Language&quot;. In 2022, I graduated from the Master&apos;s program of the NBU, &quot;Criminology and Crime Prevention Policies.&quot;</p>
            }
           
            { bulgarian ? 
              <h4 className={classes.display_m}>
                О, вий, които имате очи печални, с безкрая синкав на морето ги хранете
              </h4>
            :
              <h4 className={`${classes.display_m} ${classes.henni}`}>
                Oh ye! who have your eye-balls vex&apos;d and tir&apos;d, Feast them upon the wideness of the Sea
              </h4>
            }

            { bulgarian ? 
              <p className={`shadow`}>Интересите ми са в областта на модерното и съвременното изкуство и литература, литературата на XIXв., криминалната лингвистика и криминалния ум, съществуването на съзнанието и душата, възприятията, психическия процес, експресионизма, абстракционизма и др.</p>
            :
              <p className="typewriter shadow">My interests are in the field of modern and contemporary art and literature, 19th century literature, forensic linguistics and criminal mind, the existence of consciousness and soul, perceptions, mental process, expressionism, abstractionism, and others.</p>
            }

            { bulgarian ? 
              <p className={`shadow`}>Рисувам, вдъхновена от емоционалния свят, както и от символното значение на природата и социалните роли. Работя предимно с акрил и смесена техника. За мен рисуването е израз на специфични усещания без претенция за техническо съвършенство.</p>
            :
              <p className="typewriter shadow">I paint inspired by the emotional world as well as the symbolic meaning of nature and social roles. I work mainly with acrylic and mixed media. For me, painting is an expression of specific feelings without any claim to technical perfection.</p>
            }
       
            <p className="shadow">
              { bulgarian ? '' : '' }
            
            </p>
            <div className={classes.btn_mobile}>
              <Link className={`btn__primary ${classes.btn}`} href="/contact-me">
                { bulgarian ? 'Пишете ми ' : 'Drop me a line '} <BsArrowRight />
              </Link>
            </div>
           
          </article>
        </section>
      </div>
    </section>
  );
};

export default AboutMe;
