import styles from './index.less';
import React from 'react';
import classname from 'classname';
import Haze from '@/components/Skycon/Haze';
import Cloudy from '@/components/Skycon/Cloudy';
import PartlyCloudy from '@/components/Skycon/PartlyCloudy';
import Rain from '@/components/Skycon/Rain';
import Snow from '@/components/Skycon/Snow';
import Sun from '@/components/Skycon/Sun';
import Wind from '@/components/Skycon/Wind';


class index extends React.PureComponent {
    render() {
        let { className = {}, value } = this.props;
        return (<div className={classname(className, styles.component)}>
            {this.skycon(value)}
        </div>);
    }

    skycon = (skycon) => {
        switch (skycon) {
          // 晴（白天）
            case 'CLEAR_DAY': {
                return <Sun/>;
            }
          // 晴（夜间）
            case 'CLEAR_NIGHT': {
                return <Sun/>;
            }
          // 多云（白天）
            case 'PARTLY_CLOUDY_DAY': {
                return <PartlyCloudy/>;
            }
          // 多云（夜间）
            case 'PARTLY_CLOUDY_NIGHT': {
                return <PartlyCloudy/>;
            }
          // 阴
            case 'CLOUDY': {
                return <Cloudy/>;
            }
          // 大风
            case 'WIND': {
                return <Wind/>;
            }
          // 雾霾
            case 'HAZE': {
                return <Haze/>;
            }
          // 雨
            case 'RAIN': {
                return <Rain/>;
            }
          // 雪
            case 'SNOW': {
                return <Snow/>;
            }
            default: {
                return '未知';
            }
        }
    };

}

export default index;