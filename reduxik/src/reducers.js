import { createStore } from "redux";
let store = createStore(counter);

export function counter(state, action) {
  switch (action.value) {
    case action.value !== "":
      return action.value;
    case "ggg":
      return action.value;
    default:
      return action.value;
  }
}

export function action(x) {
  store.dispatch({ type: x });
}
