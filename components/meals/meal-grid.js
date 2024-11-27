import classes from './meals-grid.module.css';

export default function MealsGrid({meals}) {
    
    return (
        <ul className={classes.meals}>
            {meals.map((x)=>(<li key={x.id}> 
                {...x}
            </li>))}
        </ul>
    )
}