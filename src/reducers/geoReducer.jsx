const initialState = {
  geoInfo: null,
  history: [],
};

const geoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_GEO_INFO":
      return {
        ...state,
        geoInfo: action.payload,
      };
    case "SET_HISTORY":
      return {
        ...state,
        history: action.payload,
      };
    default:
      return state;
  }
};

export default geoReducer;
