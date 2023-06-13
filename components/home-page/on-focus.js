import { BsArrowRight } from "react-icons/bs";

import Image from "next/image";
import Link from "next/link";
import classes from "./on-focus.module.css";

const OnFocus = () => {
  return (
    <section className={classes.background}>
      <section className={`container ${classes.focus__section}`}>
        <Image
          className={classes.image_onFocus}
          src="/paintings/Басмая.jpg"
          alt="Басмая"
          width={600 / (60 / 40)}
          height={600}
        />
        <article className={classes.onfocus__info}>
          <h2>На фокус</h2>
          <h3>Басмая</h3>
          <p>Размери в сантиметри - 60 на 40</p>
          <p>
          Между пелените и първообраза Младостта трудно се отмива. В пояса й са потънали ветрове, в неотменната и съвършена песен на новородените -  никаква утеха, но как спокойно цъфтят кухите й очи в люспестите пети на вечността и белее облак тлъст, отлъчен от бялото и изтънял.
   Една капка кръв и атомите носят коварна нежност, поднесена на луди сблъсъци. Съвършенството завързало любовния плод със сбръчканата и изсмукана кухина на ласка, запокитило го извън ембриона, където някога било като вълна от сянка с лъскави хриле. Толкова малко плът имало, че видяло как по-навътре слънцето черноокия ужас обрулило, съвместило го с лице, леко като разкървавена капсула  на небесно, безволно подгизнало закрепена.
   Отпускали се откосите сълзи, просторно заспали, измамно вплетени. Или това бил дяволът само със захапаната си усмивка на грохот бездомно кух?

          </p>
          <Link className={`btn__primary ${classes.btn}`} href="/za-men">
            Окачи я в своя дом <BsArrowRight />
          </Link>
        </article>
      </section>
    </section>
  );
};

export default OnFocus;
