/*
    Import all the reducers created in te reducer.js file here
    this file will act as one reducer which has all other reducres in it 
*/

import changeNumber from "./incDec";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    changeNumber  // here also we are supposed to write key value pair but if key == value we cna write just one else key: reducerName
});

export default rootReducer;

