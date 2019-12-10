import {
    SAVE_TASK,
    CLOSE_FORM,
    DELETE_TASK,
    LIST_ALL,
    OPEN_FORM,
    TOGGLE_FORM,
    UPDATE_STATUS_TASK, UPDATE_TASK, FILTER_TASK, SEARCH_TASK, SORT_TASK
} from "../constants/ActionTypes";

// Get all tasks
export const listAll = () =>  {
      return {
          type : LIST_ALL  ,

      };
};
// Add new task
export const saveTask = (task) => {
    return {
        type : SAVE_TASK,
        task : task,
    }
};

// Toggle form
export const toggleForm = () => {
    return {
        type : TOGGLE_FORM,
    }
};

// close form
export const closeForm = () => {
    return {
        type : CLOSE_FORM,
    }
};

// open form
export const openForm = () => {
    return {
        type : OPEN_FORM,
    }
};

//update status task
export const updateStatusTask = (idTask) => {
    return {
        type : UPDATE_STATUS_TASK,
        id : idTask,
    }
};

// delete task
export const deleteTask = (idTask) => {
    return {
        type : DELETE_TASK,
        id : idTask
    }
};

// update task
export const updateTask = (task) => {
    return {
        type : UPDATE_TASK,
        task : task,
    }
};

// filter task
export const filterTask = (filter) => {
    return {
        type : FILTER_TASK,
        filter : filter   // filter is object {name , select )
    }
};

// Search width name
export const searchTask = (keywords) => {
    return {
        type : SEARCH_TASK,
        keywords : keywords
    }
};

// Sort
export const sortTask  = (sort) => {
    return {
        type : SORT_TASK,
        sort : sort
    }
};