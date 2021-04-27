import axios from "axios";

// redux dispatch data(from api) to reducer 
export const updateRecord = payload => {
  return {
    type: "UPDATE_RECORD",
    payload: payload
  };
};

// redux action to get data from api 
export const getRecords = (page=1) => {
  return dispatch => {
    axios.get(`https://reqres.in/api/users?page=${page}`)
    .then(function (res) {
      dispatch(updateRecord(res.data));
    })
  };
};
