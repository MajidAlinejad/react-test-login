// redux action to login user 
export const userValidator = (user) => {
  if (user.username === "majid" && user.password === "react") {
    localStorage.setItem("user", "true");
    return {
      type: "USER",
    };
  } else {
    return {
      type: "ERROR",
    };
  }
};

// redux action to logout and remove user activity
export const userLogout = () => {
  
    localStorage.clear();
    return {
      type: "OUT",
    };
  
};


