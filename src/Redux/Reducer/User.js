
const initialState = {
  user: false,
  error:false
};
// redux reducer handle user status 
const UserReducer = (state = initialState, actions) => {
  if (actions.type === "ERROR") {
    state = {
      ...state,
      user: false,
      error:true
    };
  } else if(actions.type === "USER") {
    state = {
        ...state,
        user: true,
        error:false
      };
  }else if(actions.type === "OUT") {
    state = {
        ...state,
        user: false,
        error:false
      };
  }

  return state;
};

export default UserReducer;
