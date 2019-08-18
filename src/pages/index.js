import styles from './index.less';
import classname from 'classname';
import React from 'react';
import { connect } from 'dva';
import Native from '@/util/native';
import Skycon from '@/components/Skycon';
import TextItem from '@/components/TextItem';
import IndexItem from '@/components/IndexItem';
import Title from '@/components/Title';
import WeatherItem from '@/components/WeatherItem';
import Timeline from '@/components/Timeline';
import { Carousel, Tooltip } from 'antd';
import Util from '@/util/util';
import Formatter from '@/util/formatter';

const AlertContent = (props) => {
    let { location, text, source } = props;
    return (<div>
        <div>{location}</div>
        <div>{text}</div>
        <div>{source}</div>
    </div>);
};

@connect(({ apps, loading }) => {
    return {
        weather: apps.generalWeather,
        userConfig: apps.userConfig,
        isLoading: loading.effects['apps/findGeneralWeather'],
    };
}, dispatch => ({
    $findGeneralWeather: (args = {}) => dispatch({ type: 'apps/findGeneralWeather', ...args }),
}))
class index extends React.Component {

    state = {
        index: 0,
    };

    componentDidMount() {
        document.title = '天气';
        Native.addListeners();
    }

    render() {
        let { weather, isLoading, userConfig: { address } } = this.props;
        let { index } = this.state;
        let result = weather[index];


        let alert = Formatter.getAlert(result);
        return (
          <div className={styles.fullPage}>
              <div className={styles.title}>{Util.getLastEle(address[index].address)}</div>
              {/*背景*/}
              <div className={styles.bgWrapper}>
                  <div className={styles.bg}/>
                  <div className={classname(styles.wave, styles.wave1)}/>
                  <div className={classname(styles.wave, styles.wave2)}/>
              </div>
              {/*通知*/}
              {alert.length > 0 && <div className={styles.notifyWrapper}>
                  {(alert).map(({ code, location, description }) => {
                      return (<Tooltip placement="right" title={<AlertContent text={description}/>}>
                          <span className={styles.notify}>{Formatter.getAlertCodeDesc(code).join(' / ')}</span>
                      </Tooltip>);
                  })}
              </div>}
              {/*内容*/}
              <Carousel dotPosition="top"
                        afterChange={this.onChangeCarousel}>
                  {(address || []).map(({}) => {
                      let realtime = Formatter.getRealtime(result);
                      let temperature = Formatter.getTemperature(realtime.temperature);

                      let daily = Formatter.getDaily(result);
                      let today = daily.temperature[0];

                      let max = Formatter.getTemperature(today.max)[0];
                      let min = Formatter.getTemperature(today.min)[0];

                      let hourly = Formatter.getHourly(result);

                      let forecast_keypoint = Formatter.getForecastKeypoint(result);

                      let aqi = Formatter.toAirText(realtime.aqi);
                      return (<div className={styles.page}>
                          <div className={styles.header}>
                              <div className={styles.content}>
                                  <div className={styles.row1}>
                                      <div className={styles.skycon}>
                                          <Skycon className={styles.small} value={`${realtime.skycon}`}/>
                                      </div>
                                      <div className={styles.descWrapper}>
                                          <div className={styles.temperature}>{temperature[0]}<sup
                                            className={styles.flag}>°C</sup>
                                          </div>
                                          <div className={styles.right}>
                                              <div>{Formatter.toWeatherText(realtime.skycon)}</div>
                                              <div>↑{max}&deg;</div>
                                              <div>↓{min}&deg;</div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className={styles.text}>
                                      {forecast_keypoint}
                                  </div>
                                  <div className={styles.text}>
                                      {Formatter.getNearestJsDesc(realtime.precipitation.nearest)}
                                  </div>
                              </div>
                          </div>
                          <div className={styles.body}>
                              <div className={styles.panel}>
                                  {/*常用参数*/}
                                  <div className={styles.row}>
                                      <TextItem value={`${realtime.ultraviolet.desc}`} title={'紫外线'}/>
                                      <TextItem value={`${realtime.comfort.desc}`} title={'舒适度'}/>
                                      <TextItem value={`${aqi.text}`} sub={realtime.aqi} title={'AQI'}/>
                                      <TextItem value={`${realtime.humidity}`} sub={`%`} title={'相对湿度'}/>
                                  </div>
                                  <div className={styles.row}>
                                      <TextItem value={`${realtime.visibility}`} sub={`km`} title={'能见度'}/>
                                      <TextItem value={`${realtime.cloudrate}`} title={'云量'}/>
                                      <TextItem value={`${realtime.wind.speed}`} sub={`m`} title={'风速/小时'}/>
                                      <TextItem value={`${realtime.pm25}`} sub={`μg/m3`} title={'pm2.5'}/>
                                  </div>
                                  {/*24小时天气情况*/}
                                  <div className={styles.h24}>
                                      <Title>24小时</Title>
                                      <div className={styles.wrow}>
                                          {(hourly.skycon || []).map((item, index) => {
                                              let temperature = Formatter.getTemperature(hourly.temperature[index].value)[0];
                                              let skycon = `${item.value}`;
                                              let datetime = `${item.datetime}`;

                                              return (<WeatherItem time={`${Formatter.fromNow(datetime)}`}
                                                                   temperature={`${temperature}`} skycon={skycon}/>);
                                          })}
                                      </div>
                                  </div>
                                  {/*生活指数*/}
                                  {/*<div className={styles.index}>*/}
                                  {/*    <Title>生活指数</Title>*/}
                                  {/*    <IndexItem title={`舒适度`} tag={daily.comfort[0].desc}/>*/}
                                  {/*    <IndexItem title={`紫外线`} tag={daily.ultraviolet[0].desc}/>*/}
                                  {/*    <IndexItem title={`穿衣指数`} tag={daily.dressing[0].desc}/>*/}
                                  {/*    <IndexItem title={`洗车指数`} tag={daily.carWashing[0].desc}/>*/}
                                  {/*    <IndexItem title={`感冒指数`} tag={daily.coldRisk[0].desc}/>*/}
                                  {/*</div>*/}
                                  {/*最近7天天气情况*/}
                                  <div className={styles.d7}>
                                      <Title>最近7天</Title>

                                      {}
                                      <Timeline datasource={(daily.skycon || []).map((item, index) => {
                                          let temperature = daily.temperature[index];
                                          let aqi = daily.aqi[index];
                                          let skycon = `${item.value}`;
                                          let datetime = `${item.date}`;

                                          return {
                                              date: datetime,
                                              aqi: aqi.avg,
                                              skycon: skycon,
                                              maxTemp: `${Formatter.getTemperature(temperature.max)[0]}`,
                                              minTemp: `${Formatter.getTemperature(temperature.min)[0]}`,
                                          };
                                      })}/>
                                  </div>
                              </div>
                          </div>
                      </div>);
                  })}
              </Carousel>
          </div>
        );
    }


    timeline = [];
    onChangeCarousel = (index) => {
        let { $findGeneralWeather, isLoading = true } = this.props;
        let timelineElement = this.timeline[index];
        let now = new Date().getTime();
        // 30s 内防止重复请求
        if (!timelineElement || now - timelineElement > 30 * 1000) {
            $findGeneralWeather({
                payload: {
                    index,
                },
            });
            this.timeline[index] = now;
        }

        this.setState({ index: index });
    };

}

export default index;
