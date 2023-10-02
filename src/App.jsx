import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchExercise } from "./action/exerciseAction";
import { fetchFood } from "./action/foodAction";
import { stateAppropriateAction } from "./helper/reduceHelper";
import { fetchGoals } from "./action/goalActions";
import Links from "./Screens/Links";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExercise());
    dispatch(fetchFood());
    dispatch(fetchGoals());
  }, [dispatch]);

  const exercises = useSelector((state) => state.exerciseReducer.exercises);

  const goals = useSelector((state) => state.GoalTrackReducer.goal);

  const foods = useSelector((state) => state.FoodReducer.food);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Dashboard</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        {/* Links to pages */}
        <Links />
      </div>

      <div>
        <h2>
          Total burned calories:{" "}
          {exercises.length > 0 || exercises.length === 0 ? (
            <span style={highlightStyle}>
              {stateAppropriateAction(exercises, "exercises")} kcal
            </span>
          ) : (
            "loading"
          )}
        </h2>
        <h2>
          Total Calories Consumed:{" "}
          {foods.length > 0 || foods.length === 0 ? (
            <span style={highlightStyle}>
              {stateAppropriateAction(foods, "foods")} Kcal
            </span>
          ) : (
            "Loading"
          )}
        </h2>
        <h2>
          Total Calories Goal:{" "}
          {goals.length > 0 || goals.length === 0 ? (
            <span style={highlightStyle}>
              {stateAppropriateAction(goals, "goal")} kcal
            </span>
          ) : (
            "Loading"
          )}
        </h2>
        <hr />
        <h2>
          Total Calories Remaining:{" "}
          {exercises.length === 0 ||
          goals.length === 0 ||
          foods.length === 0 ? (
            <span style={highlightStyle}>
              {stateAppropriateAction(goals, "goal") -
                stateAppropriateAction(foods, "foods") -
                stateAppropriateAction(exercises, "exercises")}{" "}
              kcal
            </span>
          ) : (
            "Loading"
          )}
        </h2>
      </div>
      <a href="https://github.com/professssor/Redux-Calorie-tracking-app">
        {" "}
        github
      </a>
    </div>
  );
}

const highlightStyle = {
  fontWeight: "bold",
  color: "#ff5733", // You can change the highlight color as needed
};

export default App;
