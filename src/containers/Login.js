import React from 'react';
import { connect } from 'react-redux';

import { Row, Col, Button } from 'antd';

class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        
        return (
            <div>
                <Row type="flex" justify="center">
                    <Col span={8}>
                        <Button type="primary" style={{ width: '100%', height : '50px', display : "block", textAlign : "center", margin:"15px 0px" }}>Google</Button>
                        <Button type="primary" style={{ width: '100%', height : '50px', display : "block", textAlign : "center", margin:"15px 0px"}}>Cacao</Button>
                    </Col>
                </Row>
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
