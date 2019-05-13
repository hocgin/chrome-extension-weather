import styles from "./index.less";
import React from "react";
import classname from "classname";
import CLEAR_DAY from "@/assets/theme/flaticon/CLEAR_DAY.svg";
import CLEAR_NIGHT from "@/assets/theme/flaticon/CLEAR_NIGHT.svg";
import CLOUDY from "@/assets/theme/flaticon/CLOUDY.svg";
import HAZE from "@/assets/theme/flaticon/HAZE.svg";
import PARTLY_CLOUDY_DAY from "@/assets/theme/flaticon/PARTLY_CLOUDY_DAY.svg";
import PARTLY_CLOUDY_NIGHT from "@/assets/theme/flaticon/PARTLY_CLOUDY_NIGHT.svg";
import RAIN from "@/assets/theme/flaticon/RAIN.svg";
import SNOW from "@/assets/theme/flaticon/SNOW.svg";
import WIND from "@/assets/theme/flaticon/WIND.svg";


class index extends React.PureComponent {
    render() {
        let {className = {}, value} = this.props;
        return (<div className={classname(className, styles.component)}>
            <embed src={this.getSvg(value)} width="100%" height="100%"
                   type="image/svg+xml"
                   pluginspage="http://www.adobe.com/svg/viewer/install/"/>
        </div>);
    }


    // 主题
    getSvg = (skycon) => {
        switch (skycon) {
            // 晴（白天）
            case 'CLEAR_DAY': {
                return CLEAR_DAY;
            }
            // 晴（夜间）
            case 'CLEAR_NIGHT': {
                return CLEAR_NIGHT;
            }
            // 多云（白天）
            case 'PARTLY_CLOUDY_DAY': {
                return PARTLY_CLOUDY_DAY;
            }
            // 多云（夜间）
            case 'PARTLY_CLOUDY_NIGHT': {
                return PARTLY_CLOUDY_NIGHT;
            }
            // 阴
            case 'CLOUDY': {
                return CLOUDY;
            }
            // 大风
            case 'WIND': {
                return WIND;
            }
            // 雾霾
            case 'HAZE': {
                return HAZE;
            }
            // 雨
            case 'RAIN': {
                return RAIN;
            }
            // 雪
            case 'SNOW': {
                return SNOW;
            }
            default: {
                return '未知';
            }
        }
    }

}

export default index;