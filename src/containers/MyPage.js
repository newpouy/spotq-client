import React from 'react';
import { Row, Col, Tag, Avatar, Badge } from 'antd';
import { connect } from 'react-redux';

class MyPage extends React.Component {

    constructor(props) {
        super(props);

        this.removeFriend = this.removeFriend.bind(this);
    }

    componentDidMount() {
        
    }

    removeFriend(){
        alert('친구 삭제!');
    }

    render() {
        const spanStyle = {
            'vertical-align' : 'middle'
            , 'top' : '-39px'
            , 'position' : 'relative'
            ,  'font-size' : '30px'
        };
        const tagStyle = {
            width: '80%'
            , height : '83px'
            , display : "block"
            , margin:"15px 0px"
            , padding : "15px 150x"
        }
        return (
            <div>
                <Row>
                    <Col span={12} style={{'min-width' : '500px'}}>
                        <Tag color="#2db7f5" style={tagStyle}>
                            <Avatar size="large" icon="user" style={{margin:'20px 10px'}}/>
                            <span style={spanStyle}>aaaaaaaaaaaa</span>
                        </Tag>
                        <Tag color="#2db7f5" style={tagStyle}>
                            <Avatar size="large" icon="user" style={{margin:'20px 10px'}}/>
                            <span style={spanStyle}>aaaaaaaaaaaa</span>
                        </Tag>
                        <Tag color="#2db7f5" style={tagStyle}>
                            <Avatar size="large" icon="user" style={{margin:'20px 10px'}}/>
                            <span style={spanStyle}>aaaaaaaaaaaa</span>
                        </Tag>
                        <Tag color="#2db7f5" style={tagStyle}>
                            <Avatar size="large" icon="user" style={{margin:'20px 10px'}}/>
                            <span style={spanStyle}>aaaaaaaaaaaa</span>
                        </Tag>
                        <Tag color="#2db7f5" style={tagStyle}>
                            <Avatar size="large" icon="user" style={{margin:'20px 10px'}}/>
                            <span style={spanStyle}>aaaaaaaaaaaa</span>
                        </Tag>
                        <Tag color="#2db7f5" style={tagStyle}>
                            <Avatar size="large" icon="user" style={{margin:'20px 10px'}}/>
                            <span style={spanStyle}>aaaaaaaaaaaa</span>
                        </Tag>
                    </Col>
                    <Col span={12} style={{'min-width' : '500px'}}>
                        <h1>친구 정보</h1>
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

export default connect(mapStateToProps)(MyPage);