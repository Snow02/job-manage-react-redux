import {combineReducers} from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import taskUpdate from './updateTask';
import filterTask from './filterTask';
import searchTask from './searchTask';
import sortTask from './sortTask';
// combine multi reducer
const myReducer = combineReducers ({
    tasks : tasks,
    isDisplayForm : isDisplayForm,
    taskUpdate : taskUpdate,
    filterTask : filterTask,
    searchTask : searchTask,
    sortTask : sortTask,

});
export default myReducer;