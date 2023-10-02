export const fetchFood = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://neogassignment17.professssor.repl.co/food"
    );
    const data = await response.json();
    dispatch({
      type: "FETCH_FOOD_SUCCESS",
      payload: data,
    });
  } catch (error) {
    console.error("error fetching the food list ", error);
    dispatch({
      type: "FETCH_FOOD_FAILURE",
      payload: error.message,
    });
  }
};

export const addFood =
  (foodName, protein, calories, carbohydrates, fat) => async (dispatch) => {
    try {
      const response = await fetch(
        "https://neogassignment17.professssor.repl.co/food",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            foodName,
            protein,
            calories,
            carbohydrates,
            fat,
          }),
        }
      );
      const data = await response.json();
      if (data) {
        dispatch({
          type: "ADD_FOOD_SUCCESS",
          payload: data,
        });
      }
    } catch (error) {
      dispatch({
        type: "ADD_FOOD_FAILURE",
        payload: error.message,
      });
    }
  };
export const removeFood = (foodId) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://neogassignment17.professssor.repl.co/food",
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ foodId }),
      }
    );
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: "REMOVE_FOOD_SUCCESS",
        payload: foodId,
      });
    }
  } catch (error) {
    console.error("Error removing food", error);
    dispatch({
      type: "REMOVE_FOOD_FAILURE",
      payload: error.message,
    });
  }
};
