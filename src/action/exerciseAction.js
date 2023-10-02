export const fetchExercise = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://neogassignment17.professssor.repl.co/exercises"
    );
    const data = await response.json();

    dispatch({
      type: "FETCH_EXERCISES_SUCCESS",
      payload: data,
    });
  } catch (error) {
    console.error("Error fetching exercises", error);
    dispatch({
      type: "FETCH_EXERCISES_FAILURE",
      payload: error.message, // Include the error message
    });
  }
};

export const addExercise =
  (name, duration, exerciseType) => async (dispatch) => {
    try {
      const response = await fetch(
        "https://neogassignment17.professssor.repl.co/exercises",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, duration, exerciseType }),
        }
      );

      const data = await response.json();

      if (data.data) {
        dispatch({
          type: "ADD_EXERCISE",
          payload: data.data,
        });
      }
    } catch (error) {
      console.error("Error adding exercise:", error);
      dispatch({
        type: "ADD_EXERCISE_FAILURE",
        payload: error.message, // Include the error message
      });
    }
  };

export const removeExercise = (exerciseId) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://neogassignment17.professssor.repl.co/exercises",
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ exerciseId }),
      }
    );

    const data = await response.json();

    if (data.success) {
      dispatch({
        type: "REMOVE_EXERCISE",
        payload: exerciseId,
      });
    }
  } catch (error) {
    console.error("Error removing exercise:", error);
    dispatch({
      type: "REMOVE_EXERCISE_FAILURE",
      payload: error, // Include the error message
    });
  }
};
