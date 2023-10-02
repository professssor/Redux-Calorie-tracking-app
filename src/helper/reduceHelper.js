export const stateAppropriateAction = (state, name) => {
  let differedReturnValue = 0; // Initialize it to 0

  if (name === "exercises") {
    differedReturnValue = state.reduce((acc, curr) => {
      const calorieCount = curr.exerciseType === "1000 kcal" ? 1000 : 500;
      return acc + calorieCount;
    }, 0);
  }

  if (name === "foods") {
    differedReturnValue = state.reduce((acc, curr) => {
      return parseInt(acc + curr.calories);
    }, 0);
  }

  if (name === "goal") {
    differedReturnValue = state.reduce((acc, curr) => {
      return parseInt(acc + curr.targetCalorieValue);
    }, 0);
  }

  return differedReturnValue;
};
