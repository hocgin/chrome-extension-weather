import styles from "./index.less";
import React from "react";
import {createForm} from 'rc-form';
import {Button, Col, Divider, Form, Input, message, Radio, Row, Select} from "antd";
import {connect} from "dva";
import Formatter from "@/util/formatter";
import Utils from "@/util/util";

const RadioGroup = Radio.Group,
    Option = Select.Option;

@connect(({apps, loading}) => {
    return {
        userConfig: apps.userConfig,
        isLoading: loading.effects['apps/findUserConfig']
    };
}, dispatch => ({
    $saveUserConfig: (args = {}) => dispatch({type: 'apps/saveUserConfig', ...args}),
    $resetUserConfig: (args = {}) => dispatch({type: 'apps/resetUserConfig', ...args}),
}))
class index extends React.Component {
    render() {

        let {form: {getFieldDecorator}, userConfig, isLoading = true} = this.props;
        if (isLoading) {
            return <div/>;
        }

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
                <Form {...formItemLayout} onSubmit={this.onSubmit}>
                    <div className={styles.wrapper}>
                        <div className={styles.optionHeader}>
                            <h1>设置</h1>
                        </div>
                        <div className={styles.optionBody}>
                            <Form.Item label="经度">
                                {getFieldDecorator('longitude', {
                                    initialValue: userConfig.longitude,
                                    rules: [{
                                        validator: (r, value, cb) => {
                                            if (value) {
                                                value >= -180 && value <= 180 ? cb() : cb(true);
                                            }
                                        },
                                        message: '请输入正确的经度(-180,180)'
                                    }]
                                })(
                                    <Input min={-180} max={180} placeholder="经度"/>
                                )}
                            </Form.Item>
                            <Form.Item label="纬度">
                                {getFieldDecorator('latitude', {
                                    initialValue: userConfig.latitude,
                                    rules: [{
                                        validator: (r, value, cb) => {
                                            if (value) {
                                                value >= -85 && value <= 85 ? cb() : cb(true);
                                            }
                                        },
                                        message: '请输入正确的纬度(-85,85)'
                                    }]
                                })(
                                    <Input min={-85} max={85} placeholder="纬度"/>
                                )}
                            </Form.Item>
                            <Form.Item label="刷新间隔"
                                       extra="上一次刷新时间 2018-09-22 12:99:90">
                                <Row gutter={8}>
                                    <Col span={12}>
                                        {getFieldDecorator('interval', {
                                            initialValue: userConfig.interval,
                                            rules: [{
                                                type: 'number',
                                                min: 10 * 60 * 1000,
                                                message: '请输入10分钟以上的间隔'
                                            }, {
                                                required: true,
                                                message: '请输入时间间隔'
                                            }]
                                        })(
                                            <Input placeholder="单位: ms"/>
                                        )}
                                    </Col>
                                    <Col span={12}>
                                        <Button>刷新</Button>
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Divider orientation="left">UI 设置</Divider>
                            <Form.Item label="徽章显示">
                                {getFieldDecorator('badge', {
                                    initialValue: userConfig.badge,
                                    rules: [{
                                        required: true,
                                        message: '请选择徽章显示方案'
                                    }]
                                })(
                                    <RadioGroup>
                                        <Radio value={1}>不显示</Radio>
                                        <Radio value={2}>温度</Radio>
                                        <Radio value={3}>天气描述</Radio>
                                        <Radio value={4}>空气质量</Radio>
                                        <Radio value={5}>AQI 指数</Radio>
                                    </RadioGroup>
                                )}
                            </Form.Item>
                            <Form.Item label="天气样式">
                                {getFieldDecorator('style', {
                                    initialValue: userConfig.style,
                                    rules: [{
                                        required: true,
                                        message: '请选择天气样式显示方案'
                                    }]
                                })(
                                    <RadioGroup>
                                        <Radio value={1}>静态风格</Radio>
                                        <Radio value={2}>动态风格</Radio>
                                    </RadioGroup>
                                )}
                            </Form.Item>
                            <Form.Item label="温度单位">
                                {getFieldDecorator('unit', {
                                    initialValue: userConfig.unit,
                                    rules: [{
                                        required: true,
                                        message: '请选择温度单位显示方案'
                                    }]
                                })(
                                    <RadioGroup>
                                        <Radio value={1}>开氏度</Radio>
                                        <Radio value={2}>摄氏度</Radio>
                                        <Radio value={3}>华氏度</Radio>
                                    </RadioGroup>
                                )}
                            </Form.Item>
                            {/*仪表盘*/}
                            <Divider orientation="left">仪表盘</Divider>
                            <Form.Item label="左侧">
                                {getFieldDecorator('dashboardLeft', {
                                    initialValue: userConfig.dashboard.left,
                                    rules: [{
                                        required: true,
                                        message: '请选择仪表盘(左侧)显示方案'
                                    }]
                                })(
                                    <Select>
                                        <Option value={1}>风速+风向</Option>
                                        <Option value={2}>湿度</Option>
                                        <Option value={3}>PM2.5</Option>
                                        <Option value={4}>PM10</Option>
                                        <Option value={5}>气压</Option>
                                        <Option value={6}>云量</Option>
                                        <Option value={7}>能见度</Option>
                                    </Select>
                                )}
                            </Form.Item>

                            <Form.Item label="右侧">
                                {getFieldDecorator('dashboardRight', {
                                    initialValue: userConfig.dashboard.right,
                                    rules: [{
                                        required: true,
                                        message: '请选择仪表盘(右侧)显示方案'
                                    }]
                                })(
                                    <Select>
                                        <Option value={1}>风速+风向</Option>
                                        <Option value={2}>湿度</Option>
                                        <Option value={3}>PM2.5</Option>
                                        <Option value={4}>PM10</Option>
                                        <Option value={5}>气压</Option>
                                        <Option value={6}>云量</Option>
                                        <Option value={7}>能见度</Option>
                                    </Select>
                                )}
                            </Form.Item>
                            <Divider orientation="left">语言</Divider>
                            <Form.Item label="语言">
                                {getFieldDecorator('language', {
                                    initialValue: userConfig.language,
                                    rules: [{
                                        required: true,
                                        message: '请选择语言环境'
                                    }]
                                })(
                                    <Select>
                                        <Option value='zh-cn'>zh-cn</Option>
                                    </Select>
                                )}
                            </Form.Item>
                        </div>
                        <div className={styles.optionFooter}>
                            <Button type="primary" htmlType="submit">保存</Button>
                            <Button style={{marginLeft: 8}} onClick={this.onReset}>
                                重置
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>
        );
    }

    onSubmit = (e) => {
        e.preventDefault();
        let {form, $saveUserConfig} = this.props;
        form.validateFields((err, values) => {
            if (!err) {
                let payload = {
                    ...values,
                    longitude: Formatter.longitude(values.longitude),
                    latitude: Formatter.latitude(values.latitude),
                    dashboard: {
                        left: values.dashboardLeft,
                        right: values.dashboardRight
                    }
                };
                delete payload.dashboardLeft;
                delete payload.dashboardRight;
                $saveUserConfig({
                    payload: payload,
                    callback: () => {
                        message.success('配置保存成功');
                    }
                });
            } else {
                Utils.showErrorHasMessage(err);
            }
        });
    };

    onReset = (e) => {
        e.preventDefault();
        let {$resetUserConfig} = this.props;
        $resetUserConfig({
            payload: {},
            callback: () => {
                message.success('配置重置成功');
            }
        });
    };

}

let wrapper = createForm()(index);
export default wrapper;