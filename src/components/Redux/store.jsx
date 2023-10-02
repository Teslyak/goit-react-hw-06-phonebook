import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { phoneBookReducer } from "./phoneBookSlice";
const enhancer = devToolsEnhancer();



const rootReducer = combineReducers({
    phoneBook: phoneBookReducer,
});



export const store = createStore(rootReducer, enhancer)



