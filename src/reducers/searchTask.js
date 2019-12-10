import {SEARCH_TASK} from "../constants/ActionTypes";
var initialState = '';
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_TASK : {
            return state = action.keywords;
        }
        default : {return state}
    }
};

export default myReducer;