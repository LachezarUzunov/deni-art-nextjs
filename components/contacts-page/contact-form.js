import classes from "./contact-form.module.css";

const ContactForm = () => {
  return (
    <section>
      <div>
        <h2>Изпрати съобщение</h2>
        <p>Ще отговоря на запитването във възможно най-кратък срок</p>
      </div>
      <form className={classes.form}>
        <label htmlFor="name">Име</label>
        <input placeholder="Име" id="name" required />
        <label htmlFor="email">Име</label>
        <input placeholder="Имейл адрес" id="email" required />
        <label htmlFor="about">Име</label>
        <input placeholder="Искам да поръчам картина" id="about" />
        <label htmlFor="question">Вашето запитване</label>
        <textarea required id="question"></textarea>
        <button className="btn__primary">Изпрати съобщение</button>
      </form>
    </section>
  );
};

export default ContactForm;
