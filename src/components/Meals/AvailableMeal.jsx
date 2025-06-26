import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeal.module.css';

const DUMMY_MEALS = [
	{
		id: 'm1',
		name: 'Jollof Rice',
		description: 'spicy, savory, vibrant, and satisfying.',
		price: 1850.99,
	},
	{
		id: 'm2',
		name: 'Cake Bread',
		description: 'Soft, fluffy, and deliciously sweet',
		price: 1320.50,
	},
	{
		id: 'm3',
		name: 'fried Chicken',
		description: 'Crispy, juicy, and finger-licking good',
		price: 2050.99,
	},
	{
		id: 'm4',
		name: 'Vegetable Salad',
		description: 'Fresh, colorful, and packed with nutrients',
		price: 800.99,
	},
];

const AvailableMeals = () => {
	// Helper
	const mealsList = DUMMY_MEALS.map((meal) => (<MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />));

	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
