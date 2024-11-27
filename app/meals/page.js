
import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meal-grid";

export default function MealsPage() {
  return (

    <>
      <header className={classes.header}>
        <h1>
          Deiicious meals ,created {' '}
          <span className={classes.highlight}>By You </span>
        </h1>
        <p>
          Choose your favorite recipe And cook it yourself , Its easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href='/meals/share'>
            Share your favorite recipe
          </Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={[]} />
      </main>
    </>

  );
}
