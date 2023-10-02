const initialState = {
  exercises: [],
  loading: false,
  error: null,
};
const exerciseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_EXERCISES_SUCCESS":
      return {
        ...state,
        exercises: action.payload,
        loading: false,
        error: null,
      };

    case "FETCH_EXERCISES_FAILURE":
      return {
        ...state,
        exercises: [],
        loading: false,
        error: "failed to fetch exercises",
      };

    case "ADD_EXERCISE":
      // const newExercise = {
      //   id: action.payload.id,
      //   name: action.payload.name,
      //   duration: action.payload.duration,
      // };
      return {
        ...state,
        exercises: [...state.exercises, action.payload],
        loading: false,
        error: null,
      };

    case "ADD_EXERCISE_FAILURE":
      return { ...state, loading: false, error: "Error Adding data" };

    case "REMOVE_EXERCISE":
      const afterRemovalExerciseArray = state.exercises.filter(
        (exercise) => exercise._id !== action.payload
      );
      return {
        ...state,
        exercises: [...afterRemovalExerciseArray],
        loading: false,
        error: null,
      };

    case "REMOVE_EXERCISE_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error removing exercise from  list",
      };
    default:
      return state;
  }
};
export { initialState };

export default exerciseReducer;
