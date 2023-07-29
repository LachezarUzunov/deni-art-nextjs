import AboutMe from "@/components/home-page/about-me";
import Heading from "@/components/home-page/heading";
import LatestWork from "@/components/home-page/latest-work";
import OnFocus from "@/components/home-page/on-focus";
import PaintingsOrDrawings from "@/components/home-page/paintings-or-drawings";
import { useContext } from "react";
// import styles from "@/styles/Home.module.css";

export default function Home() {
  //useContext();

  return (
    <main>
      <Heading />
      <AboutMe />
      <PaintingsOrDrawings />
      <LatestWork />
      <OnFocus />
    </main>
  );
}
