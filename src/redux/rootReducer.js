import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import candyReducer from "./candy/candyReducer";
import reducer from "./user/userReducer";

const rootReducer = combineReducers({
  iceCream: iceCreamReducer,
  cake: cakeReducer,
  candy: candyReducer,
  user: reducer
});

export default rootReducer;
