import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddGoal, fetchGoals, removeGoal } from "../action/goalActions";
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

const Goal = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGoals());
  }, [dispatch]);

  const goals = useSelector((state) => state.GoalTrackReducer.goal);

  const [showGoalForm, setShowGoalForm] = useState(false);
  const [goalName, setGoalName] = useState("");
  const [goalDesc, setGoalDesc] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const [targetCalorieValue, setTargetCalorieValue] = useState("");
  const [status, setStatus] = useState("in progress");

  const handleClick = () => {
    setShowGoalForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      AddGoal(goalName, goalDesc, targetDate, targetCalorieValue, status)
    );
    setGoalName("");
    setGoalDesc("");
    setTargetDate("");
    setTargetCalorieValue("");
    setStatus("");
    setShowGoalForm(false);
  };

  const handleGoBack = () => {
    setShowGoalForm(false); // Reverse the state to hide the modal
  };
  return (
    <div style={{ width: "100vw", padding: ".5rem" }}>
      <h1 style={(cardStyle, { textAlign: "left", padding: "1rem" })}>
        Goals Page
      </h1>
      <div style={{ margin: "40px 0px" }}>
        {" "}
        <Links />
      </div>
      <button onClick={handleClick} style={{ padding: "1rem" }}>
        Add New Goal
      </button>{" "}
      {showGoalForm && (
        <div style={formContainerStyle}>
          <form style={cardStyle}>
            <h2>Add New Goal</h2>
            <div>
              <label htmlFor="goalName">Goal Name:</label>
              <input
                type="text"
                id="goalName"
                value={goalName}
                onChange={(e) => setGoalName(e.target.value)}
                style={{ width: "100%", padding: ".4rem" }}
                required
              />
            </div>
            <div>
              <label htmlFor="goalDesc">Goal Description:</label>
              <input
                type="text"
                id="goalDesc"
                value={goalDesc}
                onChange={(e) => setGoalDesc(e.target.value)}
                style={{ width: "100%", padding: ".4rem" }}
                required
              />
            </div>
            <div>
              <label htmlFor="targetDate">Target Date:</label>
              <input
                type="text"
                id="targetDate"
                placeholder="Can enter data as string"
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
                style={{ width: "100%", padding: ".4rem" }}
                required
              />
            </div>
            <div>
              <label htmlFor="targetCalorieValue">Target Calorie Value:</label>
              <input
                type="Number"
                id="targetCalorieValue"
                value={targetCalorieValue}
                onChange={(e) => setTargetCalorieValue(e.target.value)}
                style={{ width: "100%", padding: ".4rem" }}
                required
              />
            </div>
            <div>
              <select
                value={status}
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
                name="status"
                id=""
              >
                <option selected value="inProgress">
                  In Progress
                </option>
                <option value="completed">Completed</option>
                <option value="abandoned">Abandoned</option>
              </select>
            </div>

            {/* <input
                type="text"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                style={{ width: "100%", padding: ".4rem" }}
                required
              /> */}
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
              Add Goal
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
        {goals.length === 0 && (
          <h2 style={(cardStyle, { border: "none" })}>No goals present</h2>
        )}

        {goals.map((goal, index) => (
          <div key={index} style={cardStyle}>
            <h1>{goal.goalName}</h1>
            <h4>Description: {goal.goalDesc}</h4>
            <h4>Target Date: {goal.targetDate}</h4>
            <h4>Target Calorie Value: {goal.targetCalorieValue} kcal</h4>
            <h4>Status: {goal.status}</h4>
            <button
              onClick={() => dispatch(removeGoal(goal._id))}
              style={{ backgroundColor: "red", color: "white" }}
            >
              Remove Goal
            </button>
          </div>
        ))}
      </section>
      <Navbar />
    </div>
  );
};

export default Goal;
