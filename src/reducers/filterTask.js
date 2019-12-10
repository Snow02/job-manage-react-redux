import {FILTER_TASK} from "../constants/ActionTypes";

var initialState = {
    filterName : '',
    filterStatus : -1,
};

var myReducer = (state = initialState , action ) => {
    switch (action.type) {
        case FILTER_TASK : {
            return {
                filterName: action.filter.filterName,
                filterStatus: parseInt(action.filter.filterStatus)
            }
        }
        default : { return state}
    }
};

export default myReducer;