import styles from './index.less';
import React from 'react';
import { createForm } from 'rc-form';
import { Alert, Button, Cascader, Divider, Form, List, message, Radio, Select, Skeleton, Tag } from 'antd';
import { connect } from 'dva';
import Formatter from '@/util/formatter';
import Utils from '@/util/util';
import CenterSpin from '@/components/CenterSpin';
import { LOCAL_STORAGE } from '@/util/constant';
import Native from '@/util/native';
import API from '@/util/api';

const RadioGroup = Radio.Group,
  Option = Select.Option;

@connect(({ apps, loading }) => {
    return {
        lastUpdated: localStorage.getItem(LOCAL_STORAGE.WEATHER_RESPONSE_LAST_TIME),
        userConfig: apps.userConfig,
        allRegions: Utils.getAllRegions(),
        isLoading: loading.effects['apps/findUserConfig'],
        isRefreshWeather: loading.effects['apps/findGeneralWeather'],
    };
}, dispatch => ({
    $findGeneralWeather: (args = {}) => dispatch({ type: 'apps/findGeneralWeather', ...args }),
    $saveUserConfig: (args = {}) => dispatch({ type: 'apps/saveUserConfig', ...args }),
    $resetUserConfig: (args = {}) => dispatch({ type: 'apps/resetUserConfig', ...args }),
}))
class index extends React.Component {

    state = {
        showAddressModal: false,
        selectedRegion: null,
        address: this.props.userConfig.address || [],
    };

    componentDidMount() {
        document.title = '设置';
    }

    render() {
        let { form: { getFieldDecorator }, userConfig, isLoading, lastUpdated, allRegions } = this.props;
        if (isLoading === true || isLoading === undefined) {
            return <CenterSpin/>;
        }
        let { address } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
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
                          <Divider orientation="left">问题反馈</Divider>
                          <Alert message={
                              <div>
                                  <a href="https://hocg.in">Blog</a>
                                  <Divider type="vertical"/>
                                  <a href="https://github.com/hocgin">GitHub</a>
                                  <Divider type="vertical"/>
                                  <a href="https://weibo.com/hocgin">Weibo</a>
                              </div>
                          } type="success"/>
                          <Divider orientation="left">常用城市</Divider>
                          <Form.Item label={'选择城市'}>
                              <Cascader options={allRegions}
                                        onChange={(item) => {
                                            this.setState({
                                                selectedRegion: item,
                                            });
                                        }}
                                        placeholder="请选择城市"
                                        showSearch={{ filter: Utils.filter }}
                              />
                              <a onClick={this.onClickAddRegion}>+ 添加一个常用城市</a>
                          </Form.Item>
                          <div className={styles.regionContainer}>
                              <List dataSource={address}
                                    renderItem={this.renderRegionItem}/>
                          </div>
                          <Divider orientation="left">UI 设置</Divider>
                          <Form.Item label="徽章显示">
                              {getFieldDecorator('badge', {
                                  initialValue: userConfig.badge,
                                  rules: [{
                                      required: true,
                                      message: '请选择徽章显示方案',
                                  }],
                              })(
                                <RadioGroup>
                                    <Radio value={0}>不显示</Radio>
                                    <Radio value={1}>温度</Radio>
                                    <Radio value={2}>天气描述</Radio>
                                    <Radio value={3}>空气质量</Radio>
                                    <Radio value={4}>AQI 指数</Radio>
                                </RadioGroup>,
                              )}
                          </Form.Item>
                          <Form.Item label="温度单位">
                              {getFieldDecorator('unit', {
                                  initialValue: userConfig.unit,
                                  rules: [{
                                      required: true,
                                      message: '请选择温度单位显示方案',
                                  }],
                              })(
                                <RadioGroup>
                                    <Radio value="metric">公制</Radio>
                                    <Radio value="SI">科学单位体系</Radio>
                                    <Radio value="imperial">英制</Radio>
                                </RadioGroup>,
                              )}
                          </Form.Item>
                          {/*语言*/}
                          <Divider orientation="left">语言</Divider>
                          <Form.Item label="语言">
                              {getFieldDecorator('language', {
                                  initialValue: userConfig.language,
                                  rules: [{
                                      required: true,
                                      message: '请选择语言环境',
                                  }],
                              })(
                                <Select>
                                    <Option value='zh_CN'>简体中文</Option>
                                    <Option value='zh_TW'>繁体中文</Option>
                                    <Option value='en_US'>美式英语</Option>
                                    <Option value='en_GB'>英式英语</Option>
                                </Select>,
                              )}
                          </Form.Item>
                      </div>
                      <div className={styles.optionFooter}>
                          <Button type="primary" htmlType="submit">保存</Button>
                          <Button style={{ marginLeft: 8 }} onClick={this.onReset}>
                              重置
                          </Button>
                      </div>
                  </div>
              </Form>
          </div>
        );
    }

    onClickRefresh = () => {
        let { $findGeneralWeather, isRefreshWeather } = this.props;
        if (isRefreshWeather) {
            return;
        }
        Native.getLocation(({ lat, lng }) => {
            $findGeneralWeather({
                payload: {
                    lng,
                    lat,
                },
            });
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        let { form, $saveUserConfig } = this.props;
        let { address } = this.state;
        form.validateFields((err, values) => {
            if (!err) {
                let payload = {
                    ...values,
                    address: address.map(({ isLoading, temperature, desc, ...rest }) => {
                        return {
                            ...rest,
                        };
                    }).sort((a, b) => {
                        if (a.isDefault) {
                            return -1;
                        }
                        if (b.isDefault) {
                            return 1;
                        }
                        return 0;
                    }),
                };
                $saveUserConfig({
                    payload: payload,
                    callback: () => {
                        message.success('配置保存成功');
                    },
                });
            } else {
                Utils.showErrorHasMessage(err);
            }
        });
    };

    onReset = (e) => {
        e.preventDefault();
        let { $resetUserConfig } = this.props;
        $resetUserConfig({
            payload: {},
            callback: () => {
                this.setState({
                    address: this.props.userConfig.address,
                });
                message.success('配置重置成功');
            },
        });
    };


    renderRegionItem = ({ id, address, auto, temperature, skycon, desc, isDefault, isLoading = true }) => {
        let actions = [
            <a disabled={isDefault}
               onClick={() => {
                   this.onClickDeleteRegion(id);
               }}>移除</a>,
            <a disabled={isDefault}
               onClick={() => {
                   this.onClickSetDefaultRegion(id);
               }}>默认</a>,
        ];
        if (isLoading) {
            this.requestSimpleWeather(id, auto);
        }
        return (<List.Item
          actions={actions}>
            <Skeleton avatar title={false} loading={isLoading} active>
                <List.Item.Meta
                  title={<a className={styles.title}>{address[address.length - 1]} <Tag color="lime" visible={!!auto}>自动</Tag>{auto}</a>}
                  description={<span
                    className={styles.subTitle}>{address.join('/')}</span>}
                />
                <div className={styles.detail}>
                    <span className={styles.temperature}>{Formatter.getTemperature(temperature)[0]}°</span>
                    <div className={styles.desc}>
                        <span>{desc}</span>/<img className={styles.img} src={Utils.getSkyconSvg(skycon)}
                                                 alt={`${skycon}`}/>
                    </div>
                </div>
            </Skeleton>
        </List.Item>);
    };

    /**
     * 删除常用城市
     * @param sid
     */
    onClickDeleteRegion = (sid) => {
        this.setState(({ address }) => {
            address.splice(address.findIndex(({ id }) => id === sid), 1);
            return {
                address,
            };
        });
    };

    /**
     * 设置默认城市
     * @param sid
     */
    onClickSetDefaultRegion = (sid) => {
        this.setState(({ address }) => {
            let newAddress = (address || []).map((item) => {
                return {
                    ...item,
                    isDefault: item.id === sid,
                };
            });
            if (newAddress.some(({ isDefault }) => isDefault === true)) {
                return {
                    address: newAddress,
                };
            }
            return {};
        });
    };

    /**
     * 点击添加常用城市
     */
    onClickAddRegion = () => {
        let { selectedRegion, address } = this.state;
        if ((address || []).length >= 3) {
            message.warn('目前最大仅允许添加3个哦');
            return;
        }

        if (!selectedRegion) {
            message.error('请先选择城市');
            return;
        }
        let selectedLastItem = selectedRegion[selectedRegion.length - 1];
        let region = Utils.getRegion(selectedLastItem);
        if (!region) {
            message.error('数据错误');
            return;
        }

        if (address.some(({ id }) => id === region.value)) {
            message.error('该城市已添加');
            return;
        }


        region = {
            id: `${region.value}`,
            address: [...`${region.value}`.split(',')],
            latlng: region.latlng,
            isDefault: false,
            temperature: 'N/A',
            desc: 'N/A',
            isLoading: true,
        };

        this.setState(({ address }) => ({
            address: [...address, region],
        }));

    };


    /**
     * 请求天气信息
     * @param sid
     * @param auto
     */
    requestSimpleWeather = (sid, auto = false) => {
        let { address } = this.state;
        let findIndex = address.findIndex(({ id }) => id === sid);
        if (findIndex < 0) {
            message.error('数据异常, 自动进行重置');
            localStorage.removeItem(LOCAL_STORAGE.CONFIG);
            return;
        }
        let region = address[findIndex];

        if (auto) {
            API.findLngLatUseIp().then((result) => {
                if (result.info === 'OK') {
                    let str = `${result.rectangle}`;
                    if (str.includes(';')) {
                        str = str.split(';')[0];
                    }
                    let lnglat = [];
                    if (str.includes(',')) {
                        lnglat = str.split(',');
                    }
                    this.onlyGetWeather({
                        ...region,
                        address: [result.province, result.city],
                        latlng: [lnglat[1], lnglat[0]],
                    });
                } else {
                    message.error(result.message);
                }
            });
        } else {
            this.onlyGetWeather(region);
        }

    };

    onlyGetWeather = (region) => {
        let { address } = this.state;

        API.findSimpleWeather({
            lat: region.latlng[0],
            lng: region.latlng[1],
        }).then(({ status, result }) => {
            if (status === 'ok') {
                region = {
                    ...region,
                    isLoading: false,
                    temperature: result.realtime.temperature,
                    skycon: result.realtime.skycon,
                    desc: Formatter.toWeatherText(result.realtime.skycon),
                };
                let index = address.findIndex(({ id }) => id === region.id);
                if (index > -1) {
                    address[index] = region;
                } else {
                    address = [...address, region];
                }
                this.setState({
                    address: address,
                });
            } else {
                message.warn('请求发生故障');
            }
        });
    };
}

let wrapper = createForm()(index);
export default wrapper;