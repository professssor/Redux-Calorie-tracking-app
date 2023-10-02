const initialGoalState = {
  goal: [],
  loading: false,
  error: null,
};
const GoalTrackReducer = (state = initialGoalState, action) => {
  switch (action.type) {
    case "FETCH_GOAL_SUCCESS":
      return { ...state, goal: action.payload, loading: false, error: null };

    case "FETCH_GOAL_FAILURE":
      return {
        ...state,
        goal: [],
        loading: false,
        error: "error fething goal data",
      };

    case "ADD_GOAL_SUCCESS":
      // const newGoal = {
      //   id: action.payload.id,
      //   goalName: action.payload.goalName,
      //   goalDesc: action.payload.goalDesc,
      //   targetDate: action.payload.targetDate,
      //   targetCalorieValue: action.payload.targetCalorieValue,
      //   status: action.payload.status,
      // };
      return {
        ...state,
        goal: [...state.goal, action.payload],
        loading: false,
        error: null,
      };

    case "ADD_GOAL_FAILURE":
      return { ...state, loading: false, error: "error adding the goal " };

    case "REMOVE_GOAL_SUCCESS":
      const afterRemovalGoalArray = state.goal.filter(
        (goal) => goal._id !== action.payload
      );
      return {
        ...state,
        goal: [...afterRemovalGoalArray],
        loading: false,
        error: null,
      };
    case "REMOVE_GOAL_FAILURE":
      return {
        ...state,
        loading: false,
        error: "error removing the goal from the db",
      };
    default:
      return state;
  }
};
export { initialGoalState };

export default GoalTrackReducer;
