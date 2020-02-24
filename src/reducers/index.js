import { combineReducers } from "redux";
import templatesReducer from "./templatesReducer";
import templateReducer from "./templateReducer";
import productsReducer from "./productsReducer";


const allReducers = combineReducers({
    templates: templatesReducer,
    template: templateReducer,
    products: productsReducer
})

export default allReducers