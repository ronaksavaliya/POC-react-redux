import { numReducer } from "./Num";
import { combineReducers } from "redux";

const reducer = combineReducers({
    numReducer : numReducer
})

export {reducer}