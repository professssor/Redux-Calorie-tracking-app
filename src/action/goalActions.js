export const fetchGoals = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://neogassignment17.professssor.repl.co/goal"
    );
    const data = await response.json();

    dispatch({
      type: "FETCH_GOAL_SUCCESS",
      payload: data,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: "FETCH_GOAL_FAILURE",
      payload: error.message,
    });
  }
};

export const AddGoal =
  (goalName, goalDesc, targetDate, targetCalorieValue, status) =>
  async (dispatch) => {
    try {
      const response = await fetch(
        "https://neogassignment17.professssor.repl.co/goal",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            goalName,
            goalDesc,
            targetDate,
            status,
            targetCalorieValue,
          }),
        }
      );
      const data = await response.json();
      if (data) {
        dispatch({
          type: "ADD_GOAL_SUCCESS",
          payload: data,
        });
      }
    } catch (error) {
      console.error("error adding the goals ");

      dispatch({
        type: "ADD_GOAL_FAILURE",
        payload: error.message,
      });
    }
  };

// removing the goal

export const removeGoal = (goalId) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://neogassignment17.professssor.repl.co/goal",
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ goalId }),
      }
    );
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: "REMOVE_GOAL_SUCCESS",
        payload: goalId,
      });
    }
  } catch (error) {
    dispatch({
      type: "REMOVE_GOAL_FAILURE",
      payload: error.message,
    });
  }
};
