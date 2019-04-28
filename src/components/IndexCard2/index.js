import styles from "./index.less";
import React from "react";
import WeatherIcon from "@/components/WeatherIcon";

class index extends React.PureComponent {
    render() {
        let {hourly} = this.props;

        return (
            <div className={styles.component}>
                <table className="i-table">
                    <thead>
                    <tr>
                        <th>天气</th>
                        <th>时间</th>
                        <th>温度</th>
                        <th>湿度</th>
                        <th>云量</th>
                        <th>风</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderItem(hourly)}
                    </tbody>
                </table>
            </div>
        );
    }

    renderItem = (data) => {
        let trs = [];
        // 当前记录的日期
        let prev;
        (data.temperature || []).forEach((t, i) => {
            let datetime = t.datetime;
            let date = datetime.substr(0, '2017-11-07'.length);
            let time = datetime.substr('2017-11-07'.length, "03:00:".length);
            if (!prev || date !== prev) {
                trs.push(<tr key={`r${i}`}>
                    <td className="i-date" colSpan="4">{date}</td>
                </tr>);
                prev = date;
            }
            trs.push(
                <tr key={`${i}`}>
                    <td>
                        <WeatherIcon value={data.skycon[i].value}/>
                    </td>
                    <td>{time}</td>
                    <td>{data.temperature[i].value}°</td>
                    <td>{data.humidity[i].value}%</td>
                    <td>{data.cloudrate[i].value}%</td>
                    <td>{data.wind[i].speed.toFixed(1)}m/s</td>
                </tr>
            );
        });
        return trs;
    };
}

export default index;