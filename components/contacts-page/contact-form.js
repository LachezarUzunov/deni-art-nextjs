import LanguageContext from "@/store/language";
import classes from "./contact-form.module.css";
import { useContext, useRef, useState } from "react";
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const languageCtx = useContext(LanguageContext);

  const bulgarian = languageCtx.version;

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e);
    emailjs.sendForm(
      "service_vwdlf88",
      "template_fd1v9lk",
      form.current,
      "Nx0o_yOvAxqAluK_u"
    )
    .then(
      (result) => {
        console.log(result.text);
        e.target.reset();
        setSent(true);
        setTimeout(() => {
          setSent(false);
        }, 7000);
      },
      (error) => {
        console.log(error.text);
      })
  }

  return (
    <section className={classes.form__section}>
      <div className={classes.form_div}>
        { bulgarian ?
          <h2 className={`${classes.header} ${classes.rubik}`}>КОНТАКТИ</h2>
        :
          <h2 className={`${classes.header} typewriter`}>CONTACTS</h2>
        }
        
        { bulgarian ?
          <h2 className={`${classes.header_two} bgFont`}>Пишете ми</h2>
        :
          <h2 className={`${classes.header_two} henni`}>Drop me a line</h2>
        }

{sent && bulgarian ? (
            <h2 className={`${classes.header_two} bgFont`}>
              Вашето запитване беше изпратено успешно. Ще се свържа с Вас във възможно най-кратък срок.
            </h2>
          ) : null}
        {sent && !bulgarian ? (
        <h2 className={`${classes.header} typewriter`}>
          Your message was sent successfully. I will get back to you as soon
          as possible.
        </h2>
      ) : null}
      </div>
      <div className={classes.form_center}>
        <form 
          className={classes.form} 
          ref={form}
          onSubmit={sendEmail}
        >
          { bulgarian ?
            <label className="bgFont" htmlFor="name">Име</label>
          :
            <label className="henni" htmlFor="name">Name</label>
          }
          <input id="name" name="name" type="text" required />
          { bulgarian ?
            <label className="bgFont" htmlFor="name">Имейл</label>
          :
            <label className="henni" htmlFor="name">Email</label>
          }
          <input id="email" name="email" type="email" required />
          { bulgarian ?
            <label className="bgFont" htmlFor="name">Вашето запитване</label>
          :
            <label className="henni" htmlFor="name">Your message</label>
          }
          <textarea required id="question" name="message" type="text"></textarea>
          <div className={classes.centered_btn}>
            {bulgarian ?
              <button className={`btn__primary bgFont`}>Изпрати</button>
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
