import React, {Component} from 'react';
import Search from "./Search";
import Sort from "./Sort";
class Control extends Component {
    render() {
        return (
            <div className="row" style={{marginBottom:'30px'}}>
                {/*Form Search*/}
                <Search/>
                {/*end*/}
                {/*Sort*/}
                <Sort/>
                {/*end*/}
            </div>
        );
    }
}

export default Control;