import {CLOSE_FORM, OPEN_FORM, TOGGLE_FORM} from "../constants/ActionTypes";

var initialState = false;

var myReducer = (state = initialState , action ) => {
    switch(action.type){
        case TOGGLE_FORM : {
            return state  = !state;
        }

        case CLOSE_FORM :  {
            return state =  false;
        }

        case OPEN_FORM : {
            return state = true;
        }

        default : {return state}
    }
};

export default myReducer;