import LanguageContext from "@/store/language";
import classes from "./contact-form.module.css";
import { useContext } from "react";

const ContactForm = () => {
  const languageCtx = useContext(LanguageContext);

  const bulgarianVersion = languageCtx.version;

  return (
    <section className={classes.form__section}>
      <div>
        <h2 className={classes.header}>{ bulgarianVersion ? 'КОНТАКТИ' : 'CONTACTS'}</h2>
        <h2 className={classes.header_two}>{ bulgarianVersion ? 'Пишете ми' : 'Drop me a line'}</h2>
      </div>
      <div className={classes.form_center}>
        <form className={classes.form}>
          <label htmlFor="name">{ bulgarianVersion ? 'Име' : 'Name'}</label>
          <input id="name" required />
          <label htmlFor="email">{ bulgarianVersion ? 'Имейл' : 'Email'}</label>
          <input id="email" required />
          <label htmlFor="question">{ bulgarianVersion ? 'Вашето запитване' : 'Your message'}</label>
          <textarea required id="question"></textarea>
          <div className={classes.centered_btn}>
            <button className="btn__primary">{ bulgarianVersion ? 'Изпрати' : 'Send'}</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
