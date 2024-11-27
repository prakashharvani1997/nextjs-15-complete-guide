import classes from "./loading.module.css";

export default async function LoadingMealsPage() {
    // reserved filename same as page & layout
    // this file will become active when page next to it / any nested page / layout loading Data
  return <p className={classes.loading}> Fetching meals... </p>;
}
