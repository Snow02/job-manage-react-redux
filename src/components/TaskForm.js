import React, {Component} from 'react';
import {connect} from 'react-redux';
import {saveTask, closeForm} from "../actions";

class TaskForm extends Component {
    state = {
        id: '',
        name: '',
        status: false,
    };
    // Handle event change data input
    onHandleChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;

        this.setState({
            [name]: value
        });

    };
    // Handle event submit form add task
    onHandleSubmit = (event) => {
        event.preventDefault();
        // check isset id

        this.props.onSaveTask(this.state);
        this.onClear();
        this.onCloseForm();

    };
    // Handle close form when click icon close
    onCloseForm = () => {
        this.props.onCloseForm();
    };
    onClear = () => {
        this.setState({
            id: '',
            name: '',
            status: false,
        });
    };


    //Handle data when edit
    UNSAFE_componentWillMount() {
        console.log(this.props.taskUpdate);
        if (this.props.taskUpdate && this.props.taskUpdate.id !== null) {
            this.setState({
                id: this.props.taskUpdate.id,
                name: this.props.taskUpdate.name,
                status: this.props.taskUpdate.status,
            });
        } else {
            this.onClear();
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.taskUpdate) {
            this.setState({
                id: nextProps.taskUpdate.id,
                name: nextProps.taskUpdate.name,
                status: nextProps.taskUpdate.status,
            });
        } else {
            this.onClear();
        }
    }

    render() {

        return (

            <div className="panel panel-warning">
                <div className="panel-heading">

                    <p className="panel-title">{!this.state.id ? "Add Task" : 'Update Task'}
                        <span className="fa fa-times-circle text-right" onClick={this.onCloseForm}></span>
                    </p>

                </div>
                <div className="panel-body">
                    <form onSubmit={this.onHandleSubmit}>
                        <div className="form-group">
                            <label>Name </label>
                            <input type="text" className="form-control" name="name" onChange={this.onHandleChange}
                                   value={this.state.name}/>
                        </div>
                        <label>Status</label>
                        <select className="form-control" required="required" name="status"
                                onChange={this.onHandleChange} value={this.state.status}>
                            <option value={true}>Active</option>
                            <option value={false}>Hidden</option>
                        </select>
                        <br/>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Add</button>
                            &nbsp;
                            <button type="reset" className="btn btn-danger">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isDisplayForm: state.isDisplayForm,
        taskUpdate: state.taskUpdate
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSaveTask: (task) => {
            dispatch(saveTask(task));
        },

        onCloseForm: () => {
            dispatch(closeForm());
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);