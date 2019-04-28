import styles from "./index.less";
import React from "react";
import classname from "classname";
import Formatter from "@/util/formatter";
import {Tooltip} from "antd";

class index extends React.PureComponent {
    render() {
        let {className = {}, value, dataSource} = this.props;
        return (<div className={classname(className, styles.component)}>
            <Tooltip placement="top" title={<div>{Formatter.dashboard(value)}</div>}>
                {this.renderContent({value, dataSource})}
            </Tooltip>
        </div>);
    }

    renderContent = ({value, dataSource}) => {
        let {
            realtime: {
                wind,
                comfort,
                ultraviolet,
                o3,
                co,
                so2,
                no2,
                humidity,
                pm25, pm10, pres, cloudrate, visibility
            }
        } = dataSource;
        switch (value) {
            // 风速+风向
            case 1: {
                return [
                    <i key={0} className={`info-icon wi wi-wind towards-${wind.direction}-deg`}/>,
                    <span key={1}> {`${wind.speed}`}m/s</span>
                ];
            }
            // 湿度
            case 2: {
                return [
                    <i key={0} className={`info-icon wi wi-humidity`}/>,
                    <span key={1}> {`${humidity}`}%</span>
                ];
            }
            // PM2.5
            case 3: {
                return [
                    <i key={0} className={styles.textIcon}>PM2.5</i>,
                    <span key={1}> {`${pm25}`}μg/m³</span>
                ];
            }
            // PM10
            case 4: {
                return [
                    <i key={0} className={styles.textIcon}>PM10</i>,
                    <span key={1}> {`${pm10}`}μg/m³</span>
                ];
            }
            // 气压
            case 5: {
                return [
                    <i key={0} className={`info-icon wi wi-barometer`}/>,
                    <span key={1}> {`${Formatter.hpa(pres)}`}hpa</span>
                ];
            }
            // 云量
            case 6: {
                return [
                    <i key={0} className={`info-icon wi wi-cloud`}/>,
                    <span key={1}> {`${Formatter.cloudrate(cloudrate)}`}%</span>
                ];
            }
            // 能见度
            case 7: {
                return [
                    <i key={0} className={`info-icon wi wi-windy`}/>,
                    <span key={1}> 10<sup>{`${visibility}`}</sup>m</span>
                ];
            }
            // 舒适度
            case 8: {
                return [
                    <i key={0} className={styles.textIcon}>舒适度</i>,
                    <span key={1}> {`${comfort.desc}`}</span>
                ];
            }
            // 紫外线
            case 9: {
                return [
                    <i key={0} className={styles.textIcon}>紫外线</i>,
                    <span key={1}> {`${ultraviolet.desc}`}</span>
                ];
            }
            // 臭氧浓度
            case 10: {
                return [
                    <i key={0} className={styles.textIcon}>臭氧</i>,
                    <span key={1}> {`${o3}`}μg/m</span>
                ];
            }
            // 二氧化氮浓度
            case 11: {
                return [
                    <i key={0} className={styles.textIcon}>二氧化氮</i>,
                    <span key={1}> {`${no2}`}μg/m</span>
                ];
            }
            // 二氧化硫浓度
            case 12: {
                return [
                    <i key={0} className={styles.textIcon}>二氧化硫</i>,
                    <span key={1}> {`${so2}`}μg/m</span>
                ];
            }
            // 一氧化碳浓度
            case 13: {
                return [
                    <i key={0} className={styles.textIcon}>一氧化碳</i>,
                    <span key={1}> {`${co}`}μg/m</span>
                ];
            }
        }
    };

}

export default index;