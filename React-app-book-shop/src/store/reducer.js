import { combineReducers } from "redux";
import home from "./home";
import cart from "./cart";
import selected from "./selected";

const reducer = combineReducers({ home, cart, selected });
export default reducer;
