import AboutMe from "@/components/home-page/about-me";
import Heading from "@/components/home-page/heading";
import LatestWork from "@/components/home-page/latest-work";
import OnFocus from "@/components/home-page/on-focus";
import PaintingsOrDrawings from "@/components/home-page/paintings-or-drawings";
import LanguageContext from "@/store/language";
import { useContext } from "react";
// import styles from "@/styles/Home.module.css";

export default function Home() {
  const languageCtx = useContext(LanguageContext);
  const activeLang = languageCtx.version;

  return (
    <main>
      <Heading bulgarian={activeLang}/>
      <AboutMe bulgarian={activeLang}/>
      <PaintingsOrDrawings bulgarian={activeLang}/>
      <LatestWork bulgarian={activeLang}/>
      <OnFocus bulgarian={activeLang}/>
    </main>
  );
}
