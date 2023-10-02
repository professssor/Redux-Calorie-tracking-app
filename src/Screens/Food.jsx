import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import store from "../Store/Store";
import { addFood, fetchFood, removeFood } from "../action/foodAction";
import Links from "./Links";
import Navbar from "./Navbar";

const cardStyle = {
  backgroundColor: "#272829",
  width: "21rem",
  border: "1px solid #ccc",
  padding: "2rem",
  margin: "10px",
  position: "relative",
  borderRadius: "5px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const formContainerStyle = {
  zIndex: 10,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const Food = () => {
  // const foods = useSelector((state) => state.foods);

  const dispatch = useDispatch();
  const foods = useSelector((state) => state.FoodReducer.food);
  useEffect(() => {
    dispatch(fetchFood());
  }, [dispatch]);

  const [showFoodForm, setShowFoodForm] = useState(false);
  const [foodName, setFoodName] = useState("");
  const [protein, setProtein] = useState("");
  const [carbohydrates, setCarbohydrates] = useState("");
  const [fat, setFat] = useState("");
  const [calories, setCalories] = useState("");
  const handleClick = () => {
    setShowFoodForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFood(foodName, protein, calories, carbohydrates, fat));
    setFoodName("");
    setProtein("");
    setCarbohydrates("");
    setFat("");
    setCalories("");
    setShowFoodForm(false);
  };

  const handleGoBack = () => {
    setShowFoodForm(false); // Reverse the state to hide the modal
  };
  return (
    <div style={{ width: "100vw", padding: ".5rem" }}>
      <h1 style={(cardStyle, { textAlign: "left", padding: "1rem" })}>
        Food Page
      </h1>
      <div style={{ margin: "40px 0px" }}>
        {" "}
        <Links />
      </div>
      <button onClick={handleClick} style={{ padding: "1rem" }}>
        Add New Food
      </button>{" "}
      {showFoodForm && (
        <div style={formContainerStyle}>
          <form style={cardStyle}>
            <h2>Add New Food</h2>
            <div>
              <label htmlFor="foodName">Food Name:</label>
              <input
                type="text"
                id="foodName"
                value={foodName}
                onChange={(e) => setFoodName(e.target.value)}
                style={{ width: "100%", padding: ".4rem" }}
                required
              />
            </div>
            <div>
              <label htmlFor="protein">Protein:</label>
              <input
                type="number"
                id="protein"
                value={protein}
                onChange={(e) => setProtein(e.target.value)}
                style={{ width: "100%", padding: ".4rem" }}
                required
              />
            </div>

            {/* for calories */}
            <div>
              <label htmlFor="calories">Calories:</label>
              <input
                type="number"
                id="calories"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                style={{ width: "100%", padding: ".4rem" }}
                required
              />
            </div>
            <div>
              <label htmlFor="carbohydrates">Carbohydrates:</label>
              <input
                type="number"
                id="carbohydrates"
                value={carbohydrates}
                onChange={(e) => setCarbohydrates(e.target.value)}
                style={{ width: "100%", padding: ".4rem" }}
                required
              />
            </div>
            <div>
              <label htmlFor="fat">Fat:</label>
              <input
                type="number"
                id="fat"
                value={fat}
                onChange={(e) => setFat(e.target.value)}
                style={{ width: "100%", padding: ".4rem" }}
                required
              />
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              style={{
                marginTop: "1rem",
                padding: ".4rem",
                backgroundColor: "green",
                color: "white",
                width: "100%",
              }}
            >
              Add Food
            </button>
            <button
              onClick={handleGoBack} // Handle the "Go Back" button click
              style={{
                marginTop: "1rem",
                padding: ".4rem",
                color: "white",
                width: "100%",
              }}
            >
              Go Back
            </button>
          </form>
        </div>
      )}
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {foods.length === 0 && (
          <h2 style={(cardStyle, { border: "none" })}>No foods present</h2>
        )}

        {foods.map((food) => (
          <div key={food.id} style={cardStyle}>
            <h1>{food.foodName}</h1>
            <h4>Protein: {food.protein} grams</h4>
            <h4>Calories: {food.calories} kcal</h4>
            <h4>Carbohydrates: {food.carbohydrates} grams</h4>
            <h4>Fat: {food.fat} grams</h4>
            <button
              onClick={() => dispatch(removeFood(food._id))}
              style={{ backgroundColor: "red", color: "white" }}
            >
              Remove Food
            </button>
          </div>
        ))}
      </section>
      <Navbar />
    </div>
  );
};

export default Food;
