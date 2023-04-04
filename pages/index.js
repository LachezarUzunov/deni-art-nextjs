import AboutMe from "@/components/home-page/about-me";
import Heading from "@/components/home-page/heading";
import LatestWork from "@/components/home-page/latest-work";
// import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <main>
      <Heading />
      <AboutMe />
      <LatestWork />
    </main>
  );
}
