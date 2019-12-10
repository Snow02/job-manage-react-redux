import React, {Component} from 'react';
import {connect}  from 'react-redux';
import {closeForm, deleteTask, openForm, updateStatusTask, updateTask} from "../actions";
class TaskItem extends Component {

    onHandleUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    };

    onHandleDeleteTask = () => {
        this.props.onDelete(this.props.task.id);
        this.props.onCloseForm();
    };

    onOpenFormEdit = () => {
        this.props.onOpenForm();
        this.props.onUpdateTask(this.props.task);
    };
    render() {
        var {stt , task} = this.props;

        return (
            <tr>
                <td>{++stt}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span className={task.status ? 'label label-success status' : 'label label-danger status'} onClick={this.onHandleUpdateStatus}>

                        {task.status ? 'action' : 'hidden'}
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning btn-edit" onClick={this.onOpenFormEdit}>
                        <span className="fa fa-pencil mr-5 "></span>Edit
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger btn-delete" onClick={this.onHandleDeleteTask}>
                        <span className="fa fa-trash mr-5"></span>Delete
                    </button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch , props) => {
      return {
          onUpdateStatus : (id) => {
                dispatch(updateStatusTask(id));
          },
          onDelete : (id) => {
              dispatch(deleteTask(id));
          },
          onCloseForm : () => {
              dispatch(closeForm());
          },
          onOpenForm : () => {
              dispatch(openForm());
          },
          onUpdateTask : (task) => {
              dispatch(updateTask(task));
          }
      }

};
export default connect(mapStateToProps,mapDispatchToProps) (TaskItem);