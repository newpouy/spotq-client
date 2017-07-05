import React from 'react';
import { Button, Table, Icon } from 'antd';
import { connect } from 'react-redux';

class MyPage extends React.Component {

    constructor(props) {
        super(props);

        this.handleList = this.handleList.bind(this);
        this.handleFriendList = this.handleFriendList.bind(this);
        this.handleGroupList = this.handleGroupList.bind(this);
        this.handleRcmdList = this.handleRcmdList.bind(this);
        this.handleQuestion = this.handleQuestion.bind(this);
        this.handleShare = this.handleShare.bind(this);
    }

    componentDidMount() {
        
    }

    //친구 리스트
    handleFriendList(){
        alert("친구");

        this.handleSort();
    }

    //그룹 리스트
    handleGroupList(){
        alert("그룹");

        this.handleSort();
    }

    //추천 리스트
    handleRcmdList(){
        alert("추천");

        this.handleSort();
    }

    //종목별 정렬
    handleList(){
        alert("리스트");
    }

    render() {
        const columns = [{
            title: 'lineData',
            dataIndex: 'lineData',
            key: 'lineData',
            render: (lineData) => {return <div><p href="#">{lineData[0]}</p><p>{lineData[1]}</p><p>{lineData[2]}</p></div>}
        }];
        const data = [{
            lineData: ['문제 111',"#해시1 #해시2 #해시3","hint, solve, share, friend"]
            }, {
            lineData: ['문제 22222',"#해시1 #해시2 #해시3","hint, solve, share, friend"]
            }, {
            lineData: ['문제 333333333',"#해시1 #해시2 #해시3","hint, solve, share, friend"]
            }];
        return (
            <div>
                <Button onClick={this.handleFriendList} size="large">친구</Button>
                <Button onClick={this.handleGroupList} size="large">그룹</Button>
                <Button onClick={this.handleRcmdList} size="large">추천</Button>
                <Table showHeader={false} pagination={false} columns={columns} dataSource={data} />
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