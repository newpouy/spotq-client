import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        
        return (
            <div>
                <h1>Login</h1>
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

export default connect(mapStateToProps)(Login);
