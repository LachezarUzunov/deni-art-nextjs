import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

import ContactForm from "@/components/contacts-page/contact-form";
import classes from "./index.module.css";

const Contacts = () => {
  return (
    <section className={classes.bg}>
      <article className={`container ${classes.contacts}`}>
        <div className={classes.contacts__single}>
          <BsFillTelephoneFill className={classes.icon} />
          <div>
            <h2>Телефон</h2>
            <h3>0888 888 888</h3>
          </div>
        </div>
        <div className={classes.contacts__single}>
          <GrMail className={classes.icon} />
          <div>
            <h3>deni@abv.bg</h3>
            <h2>E-mail адрес</h2>
          </div>
        </div>
      </article>
      <div className="container">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contacts;
