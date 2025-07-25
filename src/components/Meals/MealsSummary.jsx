import classes from './MealsSummary.module.css';


const MealsSummary = () => {
	return (
		<section className={classes.summary}>
			<h2>Delicious Food Delivered To You</h2>
			<p>
				Choose your overite meal from our broad selection of available meaals
				and enjoy a deliciouss lunch or dinner at home
			</p>
			<p>
				All our meals are cooked with high-quality ingredients, just in time and
				of course by experienced chefs!
			</p>
		</section>
	);
};

export default MealsSummary;