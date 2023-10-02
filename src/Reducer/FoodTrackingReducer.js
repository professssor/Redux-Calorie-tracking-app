const initialFoodState = {
  food: [],
  loading: false,
  error: null,
};
const FoodReducer = (state = initialFoodState, action) => {
  switch (action.type) {
    case "FETCH_FOOD_SUCCESS":
      return { ...state, food: action.payload, loading: null, error: null };

    case "FETCH_FOOD_FAILURE":
      return {
        ...state,
        food: [],
        loading: false,
        error: "failed to fetch food",
      };

    case "ADD_FOOD_SUCCESS":
      return {
        ...state,
        food: [...state.food, action.payload],
        loading: false,
        error: null,
      };

    case "ADD_FOOD_FAILURE":
      return { ...state, loading: false, error: "error adding food " };

    case "REMOVE_FOOD_SUCCESS":
      const afterRemovalFoodArray = state.food.filter(
        (food) => food._id !== action.payload
      );
      return {
        ...state,
        food: [...afterRemovalFoodArray],
        loading: false,
        error: null,
      };
    case "REMOVE_FOOD_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error removing food item",
      };

    default:
      return state;
  }
};
export { initialFoodState };

export default FoodReducer;
