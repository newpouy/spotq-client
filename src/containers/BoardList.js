import React from 'react';
import { connect } from 'react-redux';

class BoardList extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        
        return (
            <div>
                <h1>Board List</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        
    };
};

export default connect(mapStateToProps)(BoardList);
