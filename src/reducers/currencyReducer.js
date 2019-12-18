const initialState = {
  currency: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "FETCH_CURRENCY":
      return {
        ...state,
        currency: action.payload
      };
    default:
      return state;
  }
}

// import { FETCH_DATA } from "../actions/fetchCurrency";

// export default function(state = [], action) {
//   switch (action.type) {
//     case FETCH_DATA:
//       return [action.payload.data, ...state];
//   }

//   return state;
//}
