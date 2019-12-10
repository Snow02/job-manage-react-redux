import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchTask} from "../actions";
class Search extends Component {
    state = {
        keywords : '',
    };
    onHandleChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;

        this.setState({
            [name] : value
        });

    };
    onHandleSearch = () => {
        this.props.onSearch(this.state.keywords);

    };
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input type="text" className="form-control" name="keywords" placeholder="Nhập từ khóa..."  onChange={this.onHandleChange}/>
                    <span className="input-group-btn">
                        <button className="btn btn-primary" type="button" onClick={this.onHandleSearch}>
                            <span className="fa fa-search mr-5"></span>Search
                        </button>
                    </span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
};
const mapDispatchToProps = (dispatch , props) => {
    return {
        onSearch : (keywords) => {
            dispatch(searchTask(keywords));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Search);
