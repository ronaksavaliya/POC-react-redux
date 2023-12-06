const initialState = 0;

export function numReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT": {
      return state + action.incrementBy;
    }

    case "DECREMENT": {
      return state - action.decrementBy;
    }

    default:
      return state;
  }
}
