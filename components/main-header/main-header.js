
import Link from "next/link";

import logoimg from "@/assets/logo.png";

import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {


  return (
    <>
      <MainHeaderBackground />
    <header className={classes.header}>
      <Link href="" className={classes.logo}>
      <Image src={logoimg} alt="A Plate with food list." priority />
        Next Level Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href="/meals" >Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community"  >Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
}
