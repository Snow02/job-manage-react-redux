import React, {Component} from 'react';
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import {connect}  from  'react-redux';
import {openForm, toggleForm, updateTask} from "./actions";
class App extends Component {

    onToggleForm = () => {
        // Đang update thì click add task => chuyển qua add task
        if(this.props.updateTask && this.props.updateTask.id !== ''){
            this.props.onOpenForm();
        }
        else{
            this.props.onHandleToggleForm();
        }
        //
        this.props.onClearTask({
            id : '',
            name : '',
            status : false,
        });

    };

    render() {
        var {isDisplayForm} = this.props ;
        // console.log(isDisplayForm);
        var elmTaskForm = isDisplayForm ? <TaskForm/> : '';
        return (
            <div id="page-job">
                <div className="container">
                    {/*Header*/}
                    <Header />
                    {/*Form add task*/}
                    <div className="row">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                           {/*Form*/}
                            {elmTaskForm}
                        </div>
                        {/*end*/}

                        <div className= {isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"} >
                            <button type="button" className="btn btn-primary btn-add-task" onClick={this.onToggleForm}>
                                <span className="fa fa-plus"></span>Add Task
                            </button>
                            {/*Sort - Filter*/}
                            <Control />
                            {/*Table Task*/}
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    {/*Table List*/}
                                    <TaskList />
                                </div>
                            </div>
                            {/*end*/}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return  {
        isDisplayForm : state.isDisplayForm,
        updateTask : updateTask
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onHandleToggleForm : () => {
            dispatch(toggleForm());
        },
        onClearTask : (task) => {
            dispatch(updateTask(task));
        },
        onOpenForm : () => {
            dispatch(openForm());
        }

    };
};
export default connect(mapStateToProps,mapDispatchToProps)(App) ;