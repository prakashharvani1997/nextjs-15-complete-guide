import classes from './loading.module.css';


export default async function LoadingMealsPage() {
return <p className={classes.loading}> Fetching meals... </p>
}