import styles from "./index.less";
import React from "react";

export default function () {
    return (<div className={styles.component}>
        <div className={styles.left}>
            <div className={styles.temperature}>
                N&deg;
            </div>
            <div className={styles.location}>
                定位中..
            </div>
            <div className={styles.sun}>
                <div className={styles.sunrise}>
                    <i className="sun-icon wi wi-sunrise"/>
                    日出
                </div>
                <div className={styles.sunset}>
                    <i className="sun-icon wi wi-sunset"/>
                    日落
                </div>
            </div>
            <div className={styles.actionRefresh}>
                <i className="wi wi-refresh"/>
            </div>
        </div>
        <div className={styles.right}>
            <span className={styles.aqi}>优</span>
            <span className={styles.logo}>&#xf07b;</span>
            <div className={styles.dashboard}/>
        </div>
    </div>);
}