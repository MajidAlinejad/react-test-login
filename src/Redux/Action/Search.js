// redux action to send required keyword by user to reducer
export const sendKeyword = (keyword) => {
  return {
    type: "SEARCH",
    payload: keyword,
  };
};
// redux action to send number of searched result to reducer 
export const searchResult = (number) => {
  return {
    type: "RESULT",
    payload: number,
  };
};
