import React, { useEffect, useReducer, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import store from "../Store/Store";
import exerciseReducer from "../Reducer/ExerciceTrackReducer";
import {
  addExercise,
  fetchExercise,
  removeExercise,
} from "../action/exerciseAction";
import Links from "./Links";

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

const Exercises = () => {
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exerciseReducer.exercises);
  useEffect(() => {
    dispatch(fetchExercise());
  }, [dispatch]);

  // state for tracking the rendering of addexercise form
  const [showExerciseForm, setShowExerciseForm] = useState(false);
  // state for exercise name tracking
  const [exercise, setExercise] = useState("");
  // state for exercise duration  name tracking
  const [duration, setDuration] = useState("");
  const [exerciseType, setExerciseType] = useState("1000 kcal");
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setShowExerciseForm(true);
  };
  //handling on submit click
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(addExercise(exercise, duration, exerciseType));
    setExercise("");
    setDuration("");
    setExerciseType("");
    setShowExerciseForm(false);
    setLoading(false);
  };

  // to hanndle click  go back click
  const handleGoBack = () => {
    setShowExerciseForm(false); // Reverse the state to hide the modal
  };

  return (
    <div style={{ width: "100vw", padding: ".5rem" }}>
      <h1 style={(cardStyle, { textAlign: "left", padding: "1rem" })}>
        Exercise Page
      </h1>
      <div style={{ margin: "40px 0px" }}>
        {" "}
        <Links />
      </div>
      {/* add new button */}
      <button onClick={handleClick} style={{ padding: "1rem" }}>
        Add New exercise
      </button>{" "}
      {showExerciseForm && (
        <div style={formContainerStyle}>
          <form onSubmit={handleSubmit} style={cardStyle}>
            <h2>Add New Exercise</h2>
            <div>
              <label htmlFor="exerciseName">Exercise Name:</label>
              <input
                type="text"
                id="exerciseName"
                value={exercise}
                onChange={(e) => setExercise(e.target.value)}
                style={{ width: "100%", padding: ".4rem" }}
                required
              />
            </div>
            <div>
              <label htmlFor="exerciseDuration">Duration:</label>
              <input
                type="Number"
                id="exerciseDuration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                style={{ width: "100%", padding: ".4rem" }}
                required
              />
            </div>

            <div>
              <label htmlFor="exercises calorie">exercise type</label>
              <select
                value={exerciseType}
                onChange={(e) => setExerciseType(e.target.value)}
                name="exerisetype"
                id=""
              >
                <option selected value="1000 kcal">
                  Cardio
                </option>
                <option value="500 kcal">Weight-training</option>
              </select>
            </div>

            <button
              type="submit"
              style={{
                marginTop: "1rem",
                padding: ".4rem",
                backgroundColor: "green",
                color: "white",
                width: "100%",
              }}
            >
              Add Exercise
            </button>

            {/* handle go back button  */}
            <button
              onClick={handleGoBack}
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
        {exercises.length === 0 && (
          <h2 style={(cardStyle, { border: "none" })}>No exercises present</h2>
        )}

        {loading ? (
          <h1>loading</h1>
        ) : (
          exercises.map((exercise, index) => (
            <div key={index} style={cardStyle}>
              <h1>{exercise.name}</h1>
              <h4> time :{exercise.duration} minutes</h4>
              <h4>Calories burned: {exercise.exerciseType} </h4>
              <button
                onClick={() => dispatch(removeExercise(exercise._id))}
                style={{ backgroundColor: "red", color: "white" }}
              >
                Remove Exercise
              </button>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default Exercises;
