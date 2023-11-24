import AboutMe from "@/components/home-page/about-me";
import Heading from "@/components/home-page/heading";
import LatestWork from "@/components/home-page/latest-work";
import OnFocus from "@/components/home-page/on-focus";
import PaintingsOrDrawings from "@/components/home-page/paintings-or-drawings";
import LanguageContext from "@/store/language";
import Head from "next/head";
import { Fragment, useContext } from "react";
// import styles from "@/styles/Home.module.css";

export default function Home() {
  const languageCtx = useContext(LanguageContext);
  const activeLang = languageCtx.version;
  
  return (
    <Fragment>
      { activeLang &&  <Head>
        <title>Моите картини и рисунки</title>
        <meta
          name="description"
          content="Абстрактни картини и рисунки за продажба от професионален художник - Деница Кръстанова"  
        >
        </meta>
      </Head>}
      {! activeLang &&  <Head>
        <title>My paintings and drawings</title>
        <meta
          name="description"
          content="Abstract paintings and drawings for selling from a professional artist - Denitza Krastanova"  
        >
        </meta>
      </Head>}
      <main>
        <Heading bulgarian={activeLang}/>
        <AboutMe bulgarian={activeLang}/>
        <PaintingsOrDrawings bulgarian={activeLang}/>
        <LatestWork bulgarian={activeLang}/>
        <OnFocus bulgarian={activeLang}/>
      </main>
    </Fragment>
   
  );
}
