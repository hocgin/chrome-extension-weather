import styles from "./index.less";
import React from "react";
import Skycon1 from "@/components/Skycon/Style1";

class IndexCard1 extends React.PureComponent {

    render() {
        let {
            // 当前
            realtime: {
                temperature = 'N',
                aqi = '囧',
                humidity = '囧',
                ultraviolet = '囧',
                // 天气现象
                skycon
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
                    {temperature}&deg;
                </div>
                <div className={styles.location}>
                    {description}
                </div>
                <div className={styles.sun}>
                    <div className={styles.sunrise}>
                        <i className="sun-icon wi wi-sunrise"/>
                        &nbsp;{sunrise}
                    </div>
                    <div className={styles.sunset}>
                        <i className="sun-icon wi wi-sunset"/>
                        &nbsp;{sunset}
                    </div>
                </div>
                <div className={styles.actionRefresh}>
                    <i className="wi wi-refresh"/>
                </div>
            </div>
            <div className={styles.right}>
                {this.renderAQI(aqi)}
                <Skycon1 className={styles.logo} value={skycon}/>
                {this.renderDashboard({
                    humidity,
                    ultraviolet: ultraviolet.desc
                })}
            </div>
        </div>);
    }

    renderAQI = (aqi) => {
        let backgroundColor = 'rgba(93, 0, 32, .8)';
        let airQualityText = '严重';
        if (aqi <= 50) {
            airQualityText = '优';
            backgroundColor = 'rgba(116, 208, 0, .8)';
        } else if (aqi <= 100) {
            airQualityText = '良';
            backgroundColor = 'rgba(244, 211, 32, .8)';
        } else if (aqi <= 150) {
            airQualityText = '轻度';
            backgroundColor = 'rgba(243, 137, 43, .8)';
        } else if (aqi <= 200) {
            airQualityText = '中度';
            backgroundColor = 'rgba(241, 0, 29, .8)';
        } else if (aqi <= 300) {
            airQualityText = '重度';
            backgroundColor = 'rgba(144, 0, 86, .8)';
        }
        return (<span className={styles.aqi} style={{
            backgroundColor
        }}>{airQualityText}</span>);
    };

    renderDashboard = ({humidity, ultraviolet}) => {
        return (<div className={styles.dashboard}>
            <div>
                <i className="info-icon wi wi-humidity"/>
                <span>&nbsp;{humidity}%</span>
            </div>
            <div>
                <i className={styles.textIcon}>紫外线</i>
                <span>&nbsp;{ultraviolet}</span>
            </div>
        </div>)
    };
}

export default IndexCard1;