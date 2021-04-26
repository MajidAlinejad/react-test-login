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



export const userLogout = () => {
  
    localStorage.clear();
    return {
      type: "OUT",
    };
  
};


