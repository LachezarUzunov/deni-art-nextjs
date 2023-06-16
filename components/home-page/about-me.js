import Link from "next/link";
import classes from "./about-me.module.css";
import { BsArrowRight } from "react-icons/bs";

const AboutMe = () => {
  return (
    <section className={classes.background}>
      <div className="container">
        <div>
          <h3 className={classes.title}>Какво правя и защо?</h3>
        </div>
        <section className={classes.info}>
          <article className={classes.display}>
            <h4>
              Щастлив е този, който може да види красотата в обичайните неща,
              там, където другите не виждат нищо!
            </h4>
          </article>
          <article>
            <p className="shadow">
              Родена съм през ноември 1989г., един мил скорпион. 😉 
            </p>
            <p className="shadow">
            През 2008 г. завърших ЕГ ,,Иван Вазов‘‘ гр. Смолян с немски  и английски език. Същата година продължих образованието си в СУ ,,Св. Климент Охридски‘‘ , специалност Немска филология, а впоследствие записах магистратура ,,Философия на съзнанието на езика‘‘. През 2022 г. се дипломирах в магистърската програма на НБУ ,,Криминология и политики за превенция на престъпността.‘‘ 
            </p>
            <h4 className={classes.display_m}>
              Щастлив е този, който може да види красотата в обичайните неща,
              там, където другите не виждат нищо!
            </h4>

            <p className="shadow">
            Интересите ми са в областта на модерното и съвременното изкуство и литература, литературата на XIXв., криминалната лингвистика и криминалния ум, съществуването на съзнанието и душата, възприятията, психическия процес, експресионизма, абстракционизма и др. 
            </p>
            <p className="shadow">
            Рисувам, вдъхновена от емоционалния свят, както и от символното значение на природата и социалните роли. Работя предимно с акрил и смесена техника. За мен рисуването е израз на специфични усещания без претенция за техническо съвършенство. 
            </p>
            <div className={classes.btn_mobile}>
              <Link className={`btn__primary ${classes.btn}`} href="/kontakti">
                Пишете ми <BsArrowRight />
              </Link>
            </div>
           
          </article>
        </section>
      </div>
    </section>
  );
};

export default AboutMe;
