import React, {Component} from 'react';
import TaskItem from "./TaskItem";
import {connect} from 'react-redux';
import {filterTask, sortTask} from "../actions";
class TaskList extends Component {
    state = {
        filterName : '',
        filterStatus : -1,
    };
    onHandleChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;

        this.props.onHandleFilter({
            filterName : name === 'filterName' ? value : this.state.filterName,
            filterStatus : name === 'filterStatus' ? value : this.state.filterStatus,
        });
        this.setState({
            [name] : value
        });

    };


    render() {

        var {listTasks,filterTask,keywords, sortTask} = this.props;

        // Filter Task
        // With name
        if(filterTask.filterName){
            listTasks = listTasks.filter((task) => {
                return task.name.toLowerCase().indexOf(filterTask.filterName.toLowerCase()) !== -1;
            });
        }
        // with status
        listTasks = listTasks.filter((task) => {
            // all task
            if(filterTask.filterStatus === -1){
                return task;
            }
            // task status : true and false
            else{
                return task.status === filterTask.filterStatus ? true : false;
            }
        });
        // End filter

        // Search Task
        if(keywords){
            listTasks = listTasks.filter((task) => {
                return task.name.toLowerCase().indexOf(keywords.toLowerCase()) !== -1;
            });
        }

        // Sort Task

        if(sortTask){
            if(sortTask.sortBy === "name"){
                listTasks.sort((a,b) => {
                    var nameA = a.name.toUpperCase(); // bỏ qua hoa thường
                    var nameB = b.name.toUpperCase(); // bỏ qua hoa thường
                    if(nameA > nameB ) return sortTask.sortValue;
                    else if(nameA < nameB ){
                        return -sortTask.sortValue;
                    }
                    else return 0;
                });
            }

            else{

                listTasks.sort((a,b) => {
                    if(a.status < b.status ) return sortTask.sortValue;
                    else if(a.status > b.status ){
                        return -sortTask.sortValue;
                    }
                    else return 0;
                });
            }
        }
        var task = listTasks.map((task,index) => (
            <TaskItem
                key={index}
                task = {task}
                stt = {index}
            />
        ));

        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Name</th>
                        <th className="text-center">Status</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input type="text" className="form-control" name="filterName" onChange={this.onHandleChange} value={this.state.filterName} placeholder="search ..."/>
                        </td>
                        <td>
                            <select className="form-control" name="filterStatus" onChange={this.onHandleChange} value={this.state.filterStatus}>
                                <option value={-1}>All task</option>
                                <option value={0}>Hidden</option>
                                <option value={1}>Active</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {/*Task Item*/}
                    {task}
                </tbody>
            </table>
        );
    }
}

// map state in store redux to props
const mapStateToProps = (state) =>{
    return {
        // Props listTasks = state.tasks  // state.tasks =  initialState  in tasks reducer
        listTasks : state.tasks,
        filterTask : state.filterTask,
        keywords : state.searchTask,
        sortTask : state.sortTask
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onHandleFilter : (filter) => {
            dispatch(filterTask(filter));
        }
    }
}  ;
export default connect(mapStateToProps,mapDispatchToProps)(TaskList);