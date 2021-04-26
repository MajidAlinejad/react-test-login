import axios from "axios";

// export const getRecords = () => {
    
 
//   };
export const updateRecord = payload => {
  return {
    type: "UPDATE_RECORD",
    payload: payload
  };
};

export const getRecords = (page=1) => {
  // const token = localStorage.getItem("token");
  return dispatch => {
    
    axios.get(`https://reqres.in/api/users?page=${page}`)
    .then(function (res) {
      dispatch(updateRecord(res.data));
      // console.log(res.data);
    })
  };
};
