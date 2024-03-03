import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

import ContactForm from "@/components/contacts-page/contact-form";
import classes from "./index.module.css";
import { Fragment, useContext } from "react";
import LanguageContext from "@/store/language";
import Head from "next/head";

const Contacts = () => {
  const languageCtx = useContext(LanguageContext);
  const bulgarian = languageCtx.version;
  
  return (
    <Fragment>
      {bulgarian && 
      <Head>
        <title>Контакти</title>
        <meta
          name="description"
          content="Свържете се с мен и купете картина или рисунка за вашия офис, хотел, дом"
        ></meta>
      </Head>}
      {! bulgarian && 
      <Head>
        <title>Contacts</title>
        <meta
          name="description"
          content="Contact me and buy a painting or drawing for your home, office or hotel"
        ></meta>
      </Head>}
    <section className={classes.bg}>
      <div className="container">
        <ContactForm />
      </div>
      <article className={`container ${classes.contacts}`}>
        <div className={classes.contacts__single}>
          <GrMail className={classes.icon} />
          {bulgarian ?
            <h3 className={`${classes.contact_details} bgFont`}>denigreg_art@abv.bg</h3>
          :
            <h3 className={`${classes.contact_details} typewriter`}>denigreg_art@abv.bg</h3>
          }
        </div>
      </article>
    </section>
    </Fragment>
  );
};

export default Contacts;
