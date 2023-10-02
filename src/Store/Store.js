import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux"; // Import compose
import thunk from "redux-thunk";
import FoodReducer from "../Reducer/FoodTrackingReducer";
import exerciseReducer from "../Reducer/ExerciceTrackReducer";
import GoalTrackReducer from "../Reducer/GoalTrackReducer";

// Combine your reducers into a single root reducer
const rootReducer = combineReducers({
  exerciseReducer,
  FoodReducer,
  GoalTrackReducer,
});

// Define your enhancers (e.g., Redux DevTools Extension and thunk middleware)
const enhancers = [
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
];

const composedEnhancers = compose(...enhancers); // Combine enhancers using compose

const store = createStore(rootReducer, composedEnhancers);

store.subscribe(() => console.log(store.getState()));

export default store;
