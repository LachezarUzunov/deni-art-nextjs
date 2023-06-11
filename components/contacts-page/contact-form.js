import classes from "./contact-form.module.css";

const ContactForm = () => {
  return (
    <section className={classes.form__section}>
      <div>
        <h2 className={classes.header}>КОНТАКТИ</h2>
        <h2 className={classes.header_two}>Пишете ми</h2>
      </div>
      <div className={classes.form_center}>
        <form className={classes.form}>
          <label htmlFor="name">Име</label>
          <input id="name" required />
          <label htmlFor="email">Имейл</label>
          <input id="email" required />
          <label htmlFor="question">Вашето запитване</label>
          <textarea required id="question"></textarea>
          <div className={classes.centered_btn}>
            <button className="btn__primary">Изпрати</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
