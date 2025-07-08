import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeal.module.css';

const AvailableMeals = () => {
	const [meals, setMeals] = useState([]);

	const fetchMeal = async () => {
		try {
			const response = await fetch(
				'https://food-order-app-35b8f-default-rtdb.firebaseio.com/meal.json'
			);
			console.log('This is response', response);

			if (!response.ok) {
				throw new Error('Something went erong');
			}
			const mealsData = await response.json();

			console.log('This sis Data:', mealsData);

			const loadMeals = [];

			for (const key in mealsData) {
				loadMeals.push({
					id: key,
					name: mealsData[key].name,
					description: mealsData[key].description,
					price: mealsData[key].price,
				});

				console.log('This is load Meals:', loadMeals);
				setMeals(loadMeals);
			}
		} catch (error) {
			console.error('Error fetching meals:', error);
		}
	};

	useEffect(() => {
		fetchMeal();
	}, []);

	// Helper
	const mealsList = meals.map((meal) => (
		<MealItem
			key={meal.id}
			id={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
		/>
	));

	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};
export default AvailableMeals;

// const DUMMY_MEALS = [
// 	{
// 		id: 'm1',
// 		name: 'Rice',
// 		description: 'spicy, savory, vibrant, and satisfying.',
// 		price: 1850.99,
// 	},
// 	{
// 		id: 'm2',
// 		name: 'Cake Bread',
// 		description: 'Soft, fluffy, and deliciously sweet',
// 		price: 1320.5,
// 	},
// 	{
// 		id: 'm3',
// 		name: 'fried Chicken',
// 		description: 'Crispy, juicy, and finger-licking good',
// 		price: 2050.99,
// 	},
// 	{
// 		id: 'm4',
// 		name: 'Vegetable',
// 		description: 'Fresh, colorful, and packed with nutrients',
// 		price: 800.99,
// 	},
// ];
