import React from "react";

const CardCategoryComponent = (props) => {
  const handleClick = () => {
    console.log(props.id);
  };
  return (
    <div onClick={handleClick} className="card-category">
      <div>
        <img src={props.thumnail} className="card-category__img" />
      </div>
      <h3 className="card-category__name">{props.name}</h3>
    </div>
  );
};

export default CardCategoryComponent;
