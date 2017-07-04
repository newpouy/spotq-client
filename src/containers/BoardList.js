import React from 'react';
import { Button, Table, Icon } from 'antd';
import { connect } from 'react-redux';

class BoardList extends React.Component {

    constructor(props) {
        super(props);

        this.handleSort = this.handleSort.bind(this);
        this.handleSortPplr = this.handleSortPplr.bind(this);
        this.handleSortNear = this.handleSortNear.bind(this);
        this.handleSortType = this.handleSortType.bind(this);
        this.handleQuestion = this.handleQuestion.bind(this);
        this.handleShare = this.handleShare.bind(this);
    }

    componentDidMount() {
        
    }

    //인기별 정렬
    handleSortPplr(){
        alert("popular");

        this.handleSort();
    }

    //근처 정렬
    handleSortNear(){
        alert("Near");

        this.handleSort();
    }

    //종목별 정렬
    handleSortType(){
        alert("Type");

        this.handleSort();
    }

    //종목별 정렬
    handleSort(){
        alert("SORT");
    }

    //문제내기
    handleQuestion(){
        alert("문제내기");
    }

    //공유하기
    handleShare(){
        alert("공유하기");
    }
    render() {
        const columns = [{
            title: 'address',
            dataIndex: 'address',
            key: 'address',
        }];
        const data = [{
            address: 'New York No. 1 Lake Park',
            }, {
            address: 'London No. 1 Lake Park',
            }, {
            address: 'Sidney No. 1 Lake Park',
            }];
        return (
            <div>
                <Button onClick={this.handleSortPplr} size="large">인기</Button>
                <Button onClick={this.handleSortNear} size="large">주변</Button>
                <Button onClick={this.handleSortType} size="large">종목</Button>
                <Table showHeader={false} pagination={false} columns={columns} dataSource={data} />
                <Button onClick={this.handleQuestion} size="large">문제내기</Button>
                <Button onClick={this.handleShare} size="large">공유하기</Button>
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