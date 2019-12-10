import {SAVE_TASK, DELETE_TASK, LIST_ALL, UPDATE_STATUS_TASK} from "../constants/ActionTypes";

var findIndex = (tasks , id ) => {
    var result = -1 ;
    tasks.forEach((task, index) => {
        if(task.id === id) {
            result = index;
        }
    });
    return result;
};
// Get data to localStorage
var data = JSON.parse(localStorage.getItem('tasks'));
// Check data -> set initialState = data
var initialState = data ? data : [];

var myReducer = (state = initialState , action) => {
    switch (action.type) {
        case LIST_ALL : {
            return state;
        }

        case SAVE_TASK : {
           console.log(action);
            var newTask = {
                id : action.task.id,
                name : action.task.name,
                status : action.task.status === 'true' ? true : false,
            };
            // update task
            if(newTask.id === ""){
                newTask.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                state.push(newTask);
            }
            else{
                var index = findIndex(state, action.task.id);
                state[index] = newTask;
            }
            // add new task

            localStorage.setItem('tasks',JSON.stringify(state));
            return [...state];

        }
        case UPDATE_STATUS_TASK : {
            var id = action.id;
            var index = findIndex(state , id);
            if(index !== false) {
                state[index].status = !state[index].status;
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        }

        case DELETE_TASK : {
            var id = action.id;
            var index = findIndex(state, id);
            if(index !== false) {
                state.splice(index , 1);
            }
            localStorage.setItem('tasks' , JSON.stringify(state));
            return [...state];
        }


        default : {
            return state;
        }
    }
};

export default myReducer;