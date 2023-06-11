import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

import ContactForm from "@/components/contacts-page/contact-form";
import classes from "./index.module.css";

const Contacts = () => {
  return (
    <section className={classes.bg}>
      <div className="container">
        <ContactForm />
      </div>
      <article className={`container ${classes.contacts}`}>
      <div className={classes.contacts__single}>
          <BsFillTelephoneFill className={classes.icon} />
          <h3 className={classes.contact_details}>0888 888 888</h3>
        </div>
        <div className={classes.contacts__single}>
          <GrMail className={classes.icon} />
          <h3 className={classes.contact_details}>deni@abv.bg</h3>
        </div>
      </article>
    </section>
  );
};

export default Contacts;
