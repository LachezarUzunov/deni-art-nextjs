import LanguageContext from "@/store/language";
import classes from "./contact-form.module.css";
import { useContext } from "react";

const ContactForm = () => {
  const languageCtx = useContext(LanguageContext);

  const bulgarian = languageCtx.version;

  return (
    <section className={classes.form__section}>
      <div className={classes.form_div}>
        { bulgarian ?
          <h2 className={classes.header}>КОНТАКТИ</h2>
        :
          <h2 className={`${classes.header} typewriter`}>CONTACTS</h2>
        }
        
        { bulgarian ?
          <h2 className={classes.header_two}>Пишете ми</h2>
        :
          <h2 className={`${classes.header_two} henni`}>Drop me a line</h2>
        }
        
      </div>
      <div className={classes.form_center}>
        <form className={classes.form}>
          { bulgarian ?
            <label htmlFor="name">Име</label>
          :
            <label className="henni" htmlFor="name">Name</label>
          }
          <input id="name" required />
          { bulgarian ?
            <label htmlFor="name">Имейл</label>
          :
            <label className="henni" htmlFor="name">Email</label>
          }
          <input id="email" required />
          { bulgarian ?
            <label htmlFor="name">Вашето запитване</label>
          :
            <label className="henni" htmlFor="name">Your message</label>
          }
          <textarea required id="question"></textarea>
          <div className={classes.centered_btn}>
            {bulgarian ?
              <button className="btn__primary">Изпрати</button>
            :
              <button className="btn__primary typewriter">Send</button>
            }
            
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
