const initialState = {
  keyword: false,
  number: 0,
};
// redux reducer to set search keyword and result number to global state
const searchReducer = (state = initialState, actions) => {
  if (actions.type === "SEARCH") {
    state = {
      ...state,
      keyword: actions.payload,
    };
    return state;
  } else if (actions.type === "RESULT") {
    state = {
      ...state,
      number: actions.payload,
    };
    return state;
  }
  return state;
};

export default searchReducer;
