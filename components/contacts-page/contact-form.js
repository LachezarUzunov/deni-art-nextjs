import classes from "./contact-form.module.css";

const ContactForm = () => {
  return (
    <section>
      <div>
        <h2>Изпрати съобщение</h2>
        <p>Ще отговоря на запитването във възможно най-кратък срок</p>
      </div>
      <form className={classes.form}>
        <input placeholder="Име" required />
        <input placeholder="Имейл адрес" required />
        <input placeholder="Искам да поръчам картина" />
        <textarea></textarea>
        <button>Изпрати съобщение</button>
      </form>
    </section>
  );
};

export default ContactForm;
