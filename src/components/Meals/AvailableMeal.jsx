import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeal.module.css';

const AvailableMeals = () => {
	const [meals, setMeals] = useState([]);
	const [isloading, setIsloading] = useState(true);
	const [error, setError] = useState(null);

	const fetchMeal = async () => {
		setError(null);
		try {
			const response = await fetch(
				'https://food-order-app-35b8f-default-rtdb.firebaseio.com/meal.json'
			);

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
			setError(error.message);
			console.error('Error fetching meals:', error);
		}
		setIsloading(false);
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

	let content;
	if (meals.length > 0) {
		content = (
			<section className={classes.meals}>
				<Card>{mealsList}</Card>
			</section>
		);
	}
	if (error) {
		content = (
			<section className={classes.mealsError}>
				<p>{error}</p>
			</section>
		);
	}
	if (isloading) {
		content = (
			<section className={classes.mealsIsLoading}>
				<p>Loading...</p>
			</section>
		);
	}

	return (
		<div>{content}</div>
	);
};
export default AvailableMeals;
