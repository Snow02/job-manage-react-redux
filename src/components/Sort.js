import React, {Component} from 'react';
import {connect} from "react-redux";
import {sortTask} from "../actions";

class Sort extends Component {
    state = {
        sortBy : 'name',
        sortValue : 1
    };
    onHandleSort = (sortBy , sortValue) => {
        this.props.onSort({
            sortBy : sortBy ,
            sortValue : sortValue,
        });
    };
    render() {
        const {sortTask} = this.props;
        console.log(sortTask)
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button"
                            id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="true">
                        Sort <span className="fa fa-caret-square-o-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={() => this.onHandleSort('name', 1)}>
                            <a role="button"
                               className={sortTask.sortBy === 'name' && sortTask.sortValue === 1 ? 'sort-selected' : ''}
                            >
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Tên A-Z
                                </span>
                            </a>
                        </li>
                        <li onClick={() => this.onHandleSort('name', -1)}>
                            <a role="button" href="#">
                                <span className="fa fa-sort-alpha-desc pr-5">
                                    Tên Z-A
                                </span>
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li onClick={() => this.onHandleSort('status', 1)}><a role="button" href="#">Status : Active</a></li>
                        <li onClick={() => this.onHandleSort('status', -1)}><a role="button" href="#"> Status : Hidden</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sortTask : state.sortTask
    }
};

const mapDispatchToProps  = (dispatch , props) => {
    return {
        onSort : (sort) => {
            dispatch(sortTask(sort));
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Sort);