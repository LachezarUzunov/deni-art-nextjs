import Link from "next/link";
import classes from "./about-me.module.css";
import { BsArrowRight } from "react-icons/bs";

const AboutMe = ({ bulgarian }) => {
  
  return (
    <section className={classes.background}>
      <div className="container">
        <div>
          <h3 className={classes.title}>{ bulgarian ? 'Какво правя и защо?' : 'What do I do and why?' }</h3>
        </div>
        <section className={classes.info}>
          <article className={classes.display}>
            <h4>
              { bulgarian ? 'Щастлив е този, който може да види красотата в обичайните неща, там, където другите не виждат нищо!' : 'Blessed are they who see beautiful things in humble places where other people see nothing.' } 
            </h4>
          </article>
          <article>
            <p className="shadow">
              { bulgarian ? 'Родена съм през ноември 1989г., един мил скорпион. 😉' : 'I was born November , 1989., a kind scorpio. 😉'} 
            </p>
            <p className="shadow">
              { bulgarian ? 'През 2008 г. завърших ЕГ ,,Иван Вазов‘‘ гр. Смолян с немски  и английски език. Същата година продължих образованието си в СУ ,,Св. Климент Охридски‘‘ , специалност Немска филология, а впоследствие записах магистратура ,,Философия на съзнанието на езика‘‘. През 2022 г. се дипломирах в магистърската програма на НБУ ,,Криминология и политики за превенция на престъпността.‘‘' : 'In 2008, I graduated from Language School "Ivan Vazov" in Smolyan with German and English. The same year, I continued my education at Sofia University "St. Kliment Ohridski", majoring in German philology. I subsequently enrolled in a Master\'s degree in "Philosophy of Mind and Language ". In 2022, I graduated from the Master\'s program of the NBU, "Criminology and Crime Prevention Policies."'}
             
            </p>
            <h4 className={classes.display_m}>
              { bulgarian ? 'Щастлив е този, който може да види красотата в обичайните неща, там, където другите не виждат нищо!' : 'Blessed are they who see beautiful things in humble places where other people see nothing.' }
            </h4>

            <p className="shadow">
              { bulgarian ? 'Интересите ми са в областта на модерното и съвременното изкуство и литература, литературата на XIXв., криминалната лингвистика и криминалния ум, съществуването на съзнанието и душата, възприятията, психическия процес, експресионизма, абстракционизма и др.' : 'My interests are in the field of modern and contemporary art and literature, 19th century literature, forensic linguistics and criminal mind, the existence of consciousness and soul, perceptions, mental process, expressionism, abstractionism, and others.' }
            
            </p>
            <p className="shadow">
              { bulgarian ? 'Рисувам, вдъхновена от емоционалния свят, както и от символното значение на природата и социалните роли. Работя предимно с акрил и смесена техника. За мен рисуването е израз на специфични усещания без претенция за техническо съвършенство.' : 'I paint inspired by the emotional world as well as the symbolic meaning of nature and social roles. I work mainly with acrylic and mixed media. For me, painting is an expression of specific feelings without any claim to technical perfection.' }
            
            </p>
            <div className={classes.btn_mobile}>
              <Link className={`btn__primary ${classes.btn}`} href="/kontakti">
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
