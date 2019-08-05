import styles from './index.less';
import classname from 'classname';
import React from 'react';
import { connect } from 'dva';
import { Col, Row } from 'antd';
import Native from '@/util/native';
import Skycon1 from '@/components/Skycon/Haze';

@connect(({ apps, loading }) => {
    return {
        weather: apps.generalWeather,
        isLoading: loading.effects['apps/findGeneralWeather'],
    };
}, dispatch => ({
    $findGeneralWeather: (args = {}) => dispatch({ type: 'apps/findGeneralWeather', ...args }),
}))
class index extends React.Component {

    componentDidMount() {
        document.title = '天气';
        Native.addListeners();
    }

    render() {
        let { weather, isLoading } = this.props;
        console.log('响应', weather);
        return (
          <div className={styles.page}>
              <div className={styles.header}>
                  <div className={styles.bg}/>
                  <div className={styles.content}>
                      <div className={styles.row1}>
                          <div className={styles.temperature}>28&deg;</div>
                          <div className={styles.skycon}>
                              <Skycon1 className={styles.small}/>
                          </div>
                      </div>
                      <div className={styles.row2}>
                          <div className={styles.region}>湖里区</div>
                          <div className={styles.temperatureRange}>32&deg;～28&deg;</div>
                      </div>
                  </div>
                  <div className={classname(styles.wave, styles.wave1)}/>
                  <div className={classname(styles.wave, styles.wave2)}/>
              </div>
              <div className={styles.body}>
                  sd
              </div>

          </div>
        );
    }

    /**
     * 刷新
     */
    onClickRefresh = () => {
        let { $findGeneralWeather, isLoading = true } = this.props;
        if (isLoading) {
            return;
        }
        Native.getLocation(({ lat, lng }) => {
            $findGeneralWeather({
                payload: {
                    lng,
                    lat,
                },
            });
        });
    };

}

export default index;
