import styles from "./index.less";
import React from "react";
import classname from "classname";

class index extends React.PureComponent {
    render() {
        let {className = {}, value} = this.props;
        return (<div className={classname(className, styles.component)}>
            {this.renderSkycon('PARTLY_CLOUDY_DAY')}
        </div>);
    }

    renderSkycon = (skycon) => {
        switch (skycon) {
            // 晴（白天）
            case 'CLEAR_DAY': {
                return (<div className="a-icon a-sunny">
                    <div className="a-sun">
                        <div className="a-rays"/>
                    </div>
                </div>);
            }
            // 晴（夜间）
            case 'CLEAR_NIGHT': {
                return (<div className="a-icon a-sunny">
                    <div className="a-sun">
                        <div className="a-rays"/>
                    </div>
                </div>);
            }
            // 多云（白天）
            case 'PARTLY_CLOUDY_DAY': {
                return (<div className="a-icon a-cloudy">
                    <div className="a-cloud"/>
                    <div className="a-cloud"/>
                </div>);
            }
            // 多云（夜间）
            case 'PARTLY_CLOUDY_NIGHT': {

                return (<div className="a-icon a-sun-shower">
                    <div className="a-cloud"/>
                    <div className="a-sun">
                        <div className="a-rays"/>
                    </div>
                </div>);
            }
            // 阴
            case 'CLOUDY': {
                return (<div className="a-icon a-cloudy">
                    <div className="a-cloud"/>
                    <div className="a-cloud"/>
                </div>);
            }
            // 大风
            case 'WIND': {
                return <div>大风</div>
            }
            // 雾霾
            case 'HAZE': {
                return (<div className="a-icon">
                    <div className="a-cloud"/>
                    <div className="a-fog">
                        <div className="a-mist"/>
                        <div className="a-mist"/>
                    </div>
                </div>);
            }
            // 雨
            case 'RAIN': {
                return (<div className="a-icon a-rainy">
                    <div className="a-cloud"/>
                    <div className="a-rain"/>
                </div>);
            }
            // 雪
            case 'SNOW': {
                return (<div className="a-icon a-flurries">
                    <div className="a-cloud"/>
                    <div className="a-snow">
                        <div className="a-flake"/>
                        <div className="a-flake"/>
                    </div>
                </div>);
            }
            default: {
                return <span>&#xf07b;</span>;
            }
        }
    };

}

export default index;