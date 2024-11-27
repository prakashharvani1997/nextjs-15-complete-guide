import Link from "next/link";

import logoimg from "@/assets/logo.png";

import classes from "./main-header.module.css";

export default function MainHeader({}) {
  return (
    <header className={classes.header}>
      <Link href="" className={classes.logo}>
        <img src={logoimg.src} alt="A Plate with food list." />
        Next Level Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
