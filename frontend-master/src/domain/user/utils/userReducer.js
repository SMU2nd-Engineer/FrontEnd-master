const userReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_FIELD":
      if (action.payload) {
        return {
          ...state,
          ...action.payload,
        };
      } else {
        return { ...state, [action.name]: action.value };
      }
    default:
      return state;
  }
};

export default userReducer;
