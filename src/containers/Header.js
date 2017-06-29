import React from 'react';
import { connect } from 'react-redux';
import { Menu, Row, Col } from 'antd';
import {withRouter} from "react-router-dom";

import 'antd/dist/antd.css';

class App extends React.Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        const menuKey = e.key;


        this.props.history.push(menuKey);

        
    }
    render() {    
        return (
            
            <Row>
                <Col>
                    <Menu
                        mode="horizontal"
                        onClick={this.handleClick}
                    >
                        <Menu.Item key="/">Home</Menu.Item>
                        <Menu.Item key="/BoardList">List</Menu.Item>
                        <Menu.Item key="/Login">Login</Menu.Item>
                        <Menu.SubMenu title="SubMenu">
                            <Menu.Item>SubMenuItem</Menu.Item>
                            <Menu.Item>SubMenuItem</Menu.Item>
                            <Menu.Item>SubMenuItem</Menu.Item>
                            <Menu.Item>SubMenuItem</Menu.Item>
                            <Menu.Item>SubMenuItem</Menu.Item>
                        </Menu.SubMenu>
                    </Menu>
                </Col>
            </Row>

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

export default connect(mapStateToProps)(withRouter(App));
