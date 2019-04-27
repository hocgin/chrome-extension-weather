import styles from './index.less';
import React from "react";
import {connect} from "dva";
import {Carousel} from "antd";

@connect(({apps, loading}) => {
    return {};
})
class index extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <Carousel effect="fade">
                    <div>
                        {this.renderTab1()}
                    </div>
                    <div>
                        {this.renderTab2()}
                    </div>
                </Carousel>
            </div>
        );
    }

    renderTab1 = () => {
        return (<div className={styles.card1}>
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
    };

    renderTab2 = () => {
        return <div>2</div>
    };
}

export default index;
