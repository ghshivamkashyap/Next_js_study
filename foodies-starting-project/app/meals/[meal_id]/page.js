import React from "react";

const Meal = (props) => {
  // console.log('props', props.params.meal_id);

  return <div>i am meal page with id - {props.params.meal_id}</div>;
};

export default Meal;
