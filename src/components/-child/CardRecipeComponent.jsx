import React from "react";

const CardRecipeComponent = (props) => {
  const handleClick = () => {
    console.log(props.id);
  };
  return (
    <div onClick={handleClick} className="card-food">
      <div>
        <img src={props.img} className="card-food__img" />
      </div>
      <h3 className="card-food__name">{props.name}</h3>
    </div>
  );
};

export default CardRecipeComponent;
