/**
 * 리듀서 함수
 * @param {Object} state
 * @param {Object} action
 * @returns
 */
const userReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_FIELD":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
