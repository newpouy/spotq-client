import React from 'react';
import { Tag, Avatar } from 'antd';
import { connect } from 'react-redux';

class MyPage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }


    render() {
        return (
            <div>
                <Tag color="#2db7f5">
                    <Avatar size="large" icon="user" />
                </Tag>
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

export default connect(mapStateToProps)(MyPage);