import styles from './index.less';
import React from 'react';
import classname from 'classname';
import CLEAR_DAY from '@/assets/weather/svg/CLEAR_DAY.svg';
import CLEAR_NIGHT from '@/assets/weather/svg/CLEAR_NIGHT.svg';
import CLOUDY from '@/assets/weather/svg/CLOUDY.svg';
import HAZE from '@/assets/weather/svg/HAZE.svg';
import PARTLY_CLOUDY_DAY from '@/assets/weather/svg/PARTLY_CLOUDY_DAY.svg';
import PARTLY_CLOUDY_NIGHT from '@/assets/weather/svg/PARTLY_CLOUDY_NIGHT.svg';
import RAIN from '@/assets/weather/svg/RAIN.svg';
import SNOW from '@/assets/weather/svg/SNOW.svg';
import WIND from '@/assets/weather/svg/WIND.svg';

class index extends React.PureComponent {
    render() {
        let { className = {}, time = 'Now', temperature = 'N/A', skycon = '0' } = this.props;
        return (<div className={classname(className, styles.component)}>
            <div className={styles.temperature}>{temperature}</div>
            <div className={styles.image}>
                <img src={this.getSkyconSvg(skycon)} alt={`${skycon}`}/>
            </div>
            <div className={styles.time}>{time}</div>
        </div>);
    }


    getSkyconSvg = (skycon) => {
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
                return CLEAR_DAY;
            }
        }
    };

}

export default index;