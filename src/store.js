import {legacy_createStore as createStore} from "redux";   // redux toolkit
import rootReducer from "./reducers/index";

 const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 // after coma added to use redux devtools in chrome 

 export default store;