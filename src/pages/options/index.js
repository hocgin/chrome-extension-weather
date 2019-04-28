import styles from "./index.less";
import React from "react";
import {createForm} from 'rc-form';
import {Button, Col, Divider, Form, Input, message, Radio, Row, Select, Switch} from "antd";
import {connect} from "dva";
import Formatter from "@/util/formatter";
import Utils from "@/util/util";
import CenterSpin from "@/components/CenterSpin";
import {LOCAL_STORAGE} from "@/util/constant";
import Native from "@/util/native";

const RadioGroup = Radio.Group,
    Option = Select.Option;

@connect(({apps, loading}) => {
    return {
        lastUpdated: localStorage.getItem(LOCAL_STORAGE.WEATHER_RESPONSE_LAST_TIME),
        userConfig: apps.userConfig,
        isLoading: loading.effects['apps/findUserConfig'],
        isRefreshWeather: loading.effects['apps/findGeneralWeather'],
    };
}, dispatch => ({
    $findGeneralWeather: (args = {}) => dispatch({type: 'apps/findGeneralWeather', ...args}),
    $saveUserConfig: (args = {}) => dispatch({type: 'apps/saveUserConfig', ...args}),
    $resetUserConfig: (args = {}) => dispatch({type: 'apps/resetUserConfig', ...args}),
}))
class index extends React.Component {

    state = {
        auto: this.props.userConfig.auto
    };

    render() {
        let {form: {getFieldDecorator}, userConfig, isLoading, lastUpdated} = this.props;
        if (isLoading === true || isLoading === undefined) {
            return <CenterSpin/>;
        }

        // 是否自动定位
        let {auto} = this.state;
        let isAuto = auto === undefined ? userConfig.auto : auto;

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
                            <Form.Item label="自动获取">
                                {getFieldDecorator('auto', {
                                    initialValue: userConfig.auto,
                                    valuePropName: 'checked'
                                })(
                                    <Switch checkedChildren="开" unCheckedChildren="关" onChange={this.onSwitchChange}/>
                                )}
                            </Form.Item>
                            {!isAuto && <Form.Item label="经度">
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
                            }
                            {!isAuto && <Form.Item label="纬度">
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
                            </Form.Item>}
                            <Form.Item label="刷新间隔"
                                       extra={`上一次刷新时间 ${Formatter.fullDatetime(lastUpdated)}`}>
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
                                        <Button onClick={this.onClickRefresh}>刷新</Button>
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
                                        <Radio value={0}>不显示</Radio>
                                        <Radio value={1}>温度</Radio>
                                        <Radio value={2}>天气描述</Radio>
                                        <Radio value={3}>空气质量</Radio>
                                        <Radio value={4}>AQI 指数</Radio>
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
                                        <Radio value="metric">公制</Radio>
                                        <Radio value="SI">科学单位体系</Radio>
                                        <Radio value="imperial">英制</Radio>
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
                                        <Option value={8}>舒适度</Option>
                                        <Option value={9}>紫外线</Option>
                                        <Option value={10}>臭氧浓度</Option>
                                        <Option value={11}>二氧化氮浓度</Option>
                                        <Option value={12}>二氧化硫浓度</Option>
                                        <Option value={13}>一氧化碳浓度</Option>
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
                                        <Option value={8}>舒适度</Option>
                                        <Option value={9}>紫外线</Option>
                                        <Option value={10}>臭氧浓度</Option>
                                        <Option value={11}>二氧化氮浓度</Option>
                                        <Option value={12}>二氧化硫浓度</Option>
                                        <Option value={13}>一氧化碳浓度</Option>
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
                                        <Option value='zh_CN'>简体中文</Option>
                                        <Option value='zh_TW'>繁体中文</Option>
                                        <Option value='en_US'>美式英语</Option>
                                        <Option value='en_GB'>英式英语</Option>
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

    onClickRefresh = () => {
        let {$findGeneralWeather, isRefreshWeather} = this.props;
        if (isRefreshWeather) {
            return;
        }
        Native.getLocation(({lat, lng}) => {
            $findGeneralWeather({
                payload: {
                    lng,
                    lat
                },
            });
        });
    };

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

    onSwitchChange = (v) => {
        this.setState({
            auto: v
        })
    };

}

let wrapper = createForm()(index);
export default wrapper;