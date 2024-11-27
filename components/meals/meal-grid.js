import MealItem from './meal-item';
import classes from './meals-grid.module.css';

export default function MealsGrid({meals}) {
    
    return (
        <ul className={classes.meals}>
            {meals.map((x)=>(<li key={x.id}> 
                <MealItem {...x} />
            </li>))}
        </ul>
    )
}