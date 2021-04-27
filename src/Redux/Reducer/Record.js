const initialState = {
    data: {},
    loading: true,
  };
  // redux reducer to set data from action to global state
  const RecordReducer = (state = initialState, actions) => {
    if (actions.type === "UPDATE_RECORD") {
      state = {
        ...state,
        loading: false,
        data: {
          ...state.data,
          ...actions.payload,
        }
      };
      return state;
    } else return state;
  };
  
  export default RecordReducer;