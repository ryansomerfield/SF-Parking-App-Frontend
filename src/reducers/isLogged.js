const isLoggedReducer = (state = false, action) => {
  switch (action.type) {
    case "LOG_IN":
      state = true;
      return state;
    case "LOG_OUT":
      state = false;
      return state;
    default:
      return state;
  }
};

export default isLoggedReducer;
