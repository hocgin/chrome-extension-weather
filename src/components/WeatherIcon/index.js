import styles from "./index.less";
import React from "react";
import classname from "classname";

class index extends React.PureComponent {
    render() {
        let {className = {}, value} = this.props;
        return (<div className={classname(className, styles.component)}>
            {this.renderSkycon(value)}
        </div>);
    }

    renderSkycon = (skycon) => {
        switch (skycon) {
            // 晴（白天）
            case 'CLEAR_DAY': {
                return <span>&#xf00d;</span>;
            }
            // 晴（夜间）
            case 'CLEAR_NIGHT': {
                return <span>&#xf02e;</span>;
            }
            // 多云（白天）
            case 'PARTLY_CLOUDY_DAY': {
                return (<span>&#xf07d;</span>);
            }
            // 多云（夜间）
            case 'PARTLY_CLOUDY_NIGHT': {
                return (<span>&#xf07e;</span>);
            }
            // 阴
            case 'CLOUDY': {
                return (<span>&#xf013;</span>);
            }
            // 大风
            case 'WIND': {
                return <span>大风</span>
            }
            // 雾霾
            case 'HAZE': {
                return (<span>&#xf003;</span>);
            }
            // 雨
            case 'RAIN': {
                return (<span>&#xf00b;</span>);
            }
            // 雪
            case 'SNOW': {
                return (<span>&#xf00a;</span>);
            }
            default: {
                return <span>&#xf07b;</span>;
            }
        }
    };

}

export default index;