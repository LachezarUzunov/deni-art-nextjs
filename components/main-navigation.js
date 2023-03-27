import classes from "./main-navigation.module.css";

import Link from "next/link";

const MainNavigation = () => {
  return (
    <ul>
      <li>
        <Link href="/">НАЧАЛО</Link>
      </li>
      <li>
        <Link href="/za-men">ЗА МЕН</Link>
      </li>
      <li>
        <Link href="/galeria">ГАЛЕРИЯ</Link>
      </li>
      <li>
        <Link href="/kontakti">КОНТАКТИ</Link>
      </li>
    </ul>
  );
};

export default MainNavigation;
