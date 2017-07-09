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
                        
                            <Button type="primary" style={{ width: '300', display : "block", textAlign : "center" }}>Primary</Button>
                        
                        <Button type="primary">Primary</Button>
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
