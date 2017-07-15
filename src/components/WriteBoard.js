import React from 'react';
import { Input, Form, Upload, Tooltip, Row, Col
        , Icon, Button, Tag } from 'antd';
const { TextArea } = Input;

const FormItem = Form.Item;

class WriteBoard extends React.Component {

    constructor(props) {
        super(props);

        this.handleWrite = this.handleWrite.bind(this);
        this.handleCloseTag = this.handleCloseTag.bind(this);
    }

    handleWrite(){
        alert('글쓰기!');
    }

    handleCloseTag(){
        alert('태그 삭제!');
    }
    render() {
        const formItemLayout = {
        labelCol: {
            xs: { span: 3 },
        },
        wrapperCol: {
            xs: { span: 18 },
            },
        };

        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem
                        {...formItemLayout}
                        label="Title"
                        hasFeedback
                    >
                        <Input placeholder="Title" />
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Content"
                        hasFeedback
                    >
                        <TextArea rows={10}/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Tag"
                        hasFeedback
                    >
                        <Input placeholder="입력 후 엔터!" />
                        <Tag closable onClose={this.handleCloseTag}>Tag 1</Tag>
                        <Tag closable onClose={this.handleCloseTag}>Tag 2</Tag>
                        <Tag closable onClose={this.handleCloseTag}>Tag 3</Tag>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Dragger"
                    >
                        <div className="dropbox">
                            <Upload.Dragger name="files" action="/upload.do">
                                <p className="ant-upload-drag-icon">
                                <Icon type="inbox" />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            </Upload.Dragger>
                        </div>
                    </FormItem>
                </Form>
                <Row>
                    <Col span={3} offset={18}>
                        <Button onClick={this.handleWrite} size="large" style={{'float':'right'}}>글쓰기</Button>
                    </Col>
                </Row>
                
            </div>
        );
    }
}


export default WriteBoard