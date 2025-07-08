import React from 'react'
import classes from './Checkout.module.css';

const Checkout = (props) => {

  const formConfirmHandler = (e) => {
    e.preventDefault();
  }


  return (
    <form onSubmit={formConfirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id='name' />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id='street' />
      </div>
      <div className={classes.control}>
        <label htmlFor="busstop">Bus-Stop</label>
        <input type="text" id='busstop' />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id='city' />
      </div>
      <button type='button' onClick={props.onCancel}>Cancel</button>
      <button>Confirm</button>
    </form>
  )
}

export default Checkout;
