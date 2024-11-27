import Link from "next/link";

import logoimg from "@/assets/logo.png";

import classes from "./main-header.module.css";
import Image from "next/image";

export default function MainHeader({}) {
  return (
    <header className={classes.header}>
      <Link href="" className={classes.logo}>
      <Image src={logoimg} alt="A Plate with food list." priority />
        <img  />
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
