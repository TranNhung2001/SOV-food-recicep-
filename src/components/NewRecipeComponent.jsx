import { Col, Row } from "antd";
import React from "react";
import { getNewRecipe } from "../api/apiRecipe";
import CardRecipeComponent from "./-child/CardRecipeComponent";
import { useState } from "react";
import { useEffect } from "react";

const NewRecipeComponent = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const res = getNewRecipe();
    setRecipes(res);
  });

  const listRecipe = recipes.map((recipe, index) => {
    if (index < 12) {
      return (
        <Col xs={24} sm={24} md={12} lg={6}>
          <CardRecipeComponent key={recipe.id} {...recipe} />
        </Col>
      );
    }
  });
  return (
    <>
      <h1 className="title" style={{color:"white"}}>Công thức mới nhất</h1>
      <Row
        gutter={[
          { xs: 20, sm: 24, lg: 32 },
          { xs: 20, sm: 24, lg: 32 },
        ]}
        style={{ marginTop: "40px", marginBottom: "80px" }}
        justify="center"
      >
        {listRecipe}
      </Row>
    </>
  );
};

export default NewRecipeComponent;
