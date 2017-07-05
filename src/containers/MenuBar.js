import React from 'react';
import { connect } from 'react-redux';
import { Menu, Row, Col } from 'antd';
import {withRouter} from "react-router-dom";

import 'antd/dist/antd.css';

class MenuBar extends React.Component {
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
            <Menu
                mode="horizontal"
                onClick={this.handleClick}
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
                theme="dark"
            >
                <Menu.Item key="/">Home</Menu.Item>
                <Menu.Item key="/BoardList">List</Menu.Item>
                <Menu.Item key="/Login">Login</Menu.Item>
                <Menu.Item key="/myPage">myPage</Menu.Item>
                <Menu.SubMenu title="SubMenu">
                    <Menu.Item>SubMenuItem</Menu.Item>
                    <Menu.Item>SubMenuItem</Menu.Item>
                    <Menu.Item>SubMenuItem</Menu.Item>
                    <Menu.Item>SubMenuItem</Menu.Item>
                    <Menu.Item>SubMenuItem</Menu.Item>
                </Menu.SubMenu>
            </Menu>

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

export default connect(mapStateToProps)(withRouter(MenuBar));
