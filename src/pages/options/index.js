import styles from "./index.less";
import React from "react";
import {createForm} from 'rc-form';
import {Button, Col, Divider, Form, Input, Radio, Row, Select} from "antd";

const RadioGroup = Radio.Group,
    Option = Select.Option;

class index extends React.Component {
    render() {
        let {form: {getFieldDecorator}} = this.props;

        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 4},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 16},
            },
        };
        return (
            <div className={styles.page}>
                <div className={styles.wrapper}>
                    <div className={styles.optionHeader}>
                        <h1>设置</h1>
                    </div>
                    <div className={styles.optionBody}>
                        <Form {...formItemLayout}>
                            <Form.Item label="纬度">
                                <Input placeholder="纬度"/>
                            </Form.Item>
                            <Form.Item label="经度">
                                <Input placeholder="经度"/>
                            </Form.Item>
                            <Form.Item label="刷新间隔"
                                       extra="上一次刷新时间 2018-09-22 12:99:90">
                                <Row gutter={8}>
                                    <Col span={12}>
                                        {getFieldDecorator('captcha', {
                                            rules: [{required: true, message: 'Please input the captcha you got!'}],
                                        })(
                                            <Input/>
                                        )}
                                    </Col>
                                    <Col span={12}>
                                        <Button>刷新</Button>
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Divider orientation="left">UI 设置</Divider>
                            <Form.Item label="徽章显示">
                                <RadioGroup name="badge" defaultValue={2}>
                                    <Radio value={1}>不显示</Radio>
                                    <Radio value={2}>温度</Radio>
                                    <Radio value={2}>天气描述</Radio>
                                    <Radio value={2}>空气质量</Radio>
                                    <Radio value={2}>AQI 指数</Radio>
                                </RadioGroup>
                            </Form.Item>
                            <Form.Item label="天气样式">
                                <RadioGroup defaultValue={2}>
                                    <Radio value={1}>静态风格</Radio>
                                    <Radio value={2}>动态风格</Radio>
                                </RadioGroup>
                            </Form.Item>
                            <Form.Item label="温度单位">
                                <RadioGroup defaultValue={2}>
                                    <Radio value={1}>开氏度</Radio>
                                    <Radio value={2}>摄氏度</Radio>
                                    <Radio value={3}>华氏度</Radio>
                                </RadioGroup>
                            </Form.Item>
                            {/*仪表盘*/}
                            <Divider orientation="left">仪表盘</Divider>
                            <Form.Item label="左侧">
                                <Select name="dashboard" defaultValue={2}>
                                    <Option value={1}>风速+风向</Option>
                                    <Option value={2}>湿度</Option>
                                    <Option value={3}>PM2.5</Option>
                                    <Option value={3}>PM10</Option>
                                    <Option value={3}>气压</Option>
                                    <Option value={3}>云量</Option>
                                    <Option value={3}>能见度</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item label="右侧">
                                <Select name="dashboard" defaultValue={2}>
                                    <Option value={1}>风速+风向</Option>
                                    <Option value={2}>湿度</Option>
                                    <Option value={3}>PM2.5</Option>
                                    <Option value={3}>PM10</Option>
                                    <Option value={3}>气压</Option>
                                    <Option value={3}>云量</Option>
                                    <Option value={3}>能见度</Option>
                                </Select>
                            </Form.Item>
                            <Divider orientation="left">语言</Divider>
                            <Form.Item label="语言">
                                <Select name="lang" defaultValue={1}>
                                    <Option value={1}>zh-cn</Option>
                                </Select>
                            </Form.Item>
                        </Form>


                    </div>
                    <div className={styles.optionFooter}>
                        <Button type="primary" htmlType="submit">保存</Button>
                        <Button style={{marginLeft: 8}}>
                            重置
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

let wrapper = createForm()(index);
export default wrapper;