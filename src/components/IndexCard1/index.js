import styles from "./index.less";
import React from "react";
import Skycon1 from "@/components/Skycon/Style1";
import Skycon2 from "@/components/Skycon/Style2";
import Skycon3 from "@/components/Skycon/Style3";
import DashboardItem from "@/components/DashboardItem";
import Formatter from "@/util/formatter";
import Config from "@/util/config";
import {Tooltip} from "antd";

class IndexCard1 extends React.PureComponent {

    render() {
        let {realtime, onClickRefresh} = this.props;
        let {
            // 当前
            realtime: {
                temperature,
                aqi,
                so2,
                no2,
                pm25,
                pm10,
                o3,
                co,
                // 天气现象
                skycon,
                comfort
            },
            hourly: {
                description
            },
            daily: {
                astro
            },
        } = this.props;

        let sunrise = astro[0].sunrise.time || '日出',
            sunset = astro[0].sunset.time || '日落';

        return (<div className={styles.component}>
            <div className={styles.left}>
                <div className={styles.temperature}>
                    <Tooltip placement="left" title={<div>
                        <div>舒适度: {comfort.desc}</div>
                        <div>天气: {Formatter.toWeatherText(skycon)}</div>
                    </div>}>
                        {Formatter.temperature(temperature)}&deg;
                    </Tooltip>
                </div>
                <div className={styles.location}>
                    {description}
                </div>
                <div className={styles.sun}>
                    <div className={styles.sunrise}>
                        <Tooltip placement="top" title={`日出`}>
                            <i className="sun-icon wi wi-sunrise"/>
                            &nbsp;{sunrise}
                        </Tooltip>
                    </div>
                    <div className={styles.sunset}>
                        <Tooltip placement="top" title={`日落`}>
                            <i className="sun-icon wi wi-sunset"/>
                            &nbsp;{sunset}
                        </Tooltip>
                    </div>
                </div>
                <div className={styles.actionRefresh} onClick={onClickRefresh}>
                    <Tooltip placement="bottom" title="刷新">
                        <i className="wi wi-refresh"/>
                    </Tooltip>
                </div>
            </div>
            <div className={styles.right}>
                {this.renderAQI({
                    aqi,
                    so2,
                    no2,
                    pm25,
                    pm10,
                    o3,
                    co,
                })}
                {this.renderSkycon(skycon)}
                {this.renderDashboard({
                    dataSource: {
                        realtime
                    }
                })}
            </div>
        </div>);
    }

    renderSkycon = (skycon) => {
        let userConfig = Config.getUserConfig();

        switch (userConfig.style) {
            case 1:
                return (
                    <Skycon2 className={styles.logo} value={skycon}/>
                );
            case 2:
                return (
                    <Skycon1 className={styles.logo} value={skycon}/>
                );
            case 3:
            default:
                return (
                    <Skycon3 className={styles.logo} value={skycon}/>
                );
        }
    };

    renderAQI = ({
                     aqi,
                     so2,
                     no2,
                     pm25,
                     pm10,
                     o3,
                     co,
                 }) => {
        let {backgroundColor, text} = Formatter.toAirText(aqi);
        return (
            <Tooltip placement="leftTop" title={
                <div>
                    <div>AQI指数: {`${aqi || 'N/A'}`}</div>
                    <div>PM25: {`${pm25 || 'N/A'}`}μg/m³</div>
                    <div>PM10: {`${pm10 || 'N/A'}`}μg/m³</div>
                    <div>臭氧: {`${o3 || 'N/A'}`}μg/m³</div>
                    <div>二氧化氮: {`${no2 || 'N/A'}`}μg/m³</div>
                    <div>二氧化硫: {`${so2 || 'N/A'}`}μg/m³</div>
                    <div>一氧化碳: {`${co || 'N/A'}`}μg/m³</div>
                </div>
            }>
            <span className={styles.aqi} style={{
                backgroundColor
            }}>{text}</span>
            </Tooltip>
        );
    };

    renderDashboard = ({dataSource}) => {
        let {dashboard: {left, right}} = Config.getUserConfig();
        return (<div className={styles.dashboard}>
            <DashboardItem dataSource={dataSource} value={left}/>
            <DashboardItem dataSource={dataSource} value={right}/>
        </div>)
    };
}

export default IndexCard1;