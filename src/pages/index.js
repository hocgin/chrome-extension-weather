import styles from './index.less';
import classname from 'classname';
import React from 'react';
import { connect } from 'dva';
import Native from '@/util/native';
import Skycon1 from '@/components/Skycon/Haze';
import TextItem from '@/components/TextItem';
import TestChart from '@/components/TestChart';

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
                      <div className={styles.skycon}><Skycon1 className={styles.small}/></div>
                      <div className={styles.descWrapper}>
                          <div className={styles.temperature}>28<sup className={styles.flag}>°C</sup></div>
                          <div className={styles.right}>
                              <div>多云</div>
                              <div>↑32&deg;</div>
                              <div>↓28&deg;</div>
                          </div>
                      </div>
                      <div className={styles.text}>
                          未来两小时不会下雨，放心出门吧
                      </div>
                  </div>
                  <div className={classname(styles.wave, styles.wave1)}/>
                  <div className={classname(styles.wave, styles.wave2)}/>
              </div>
              <div className={styles.body}>
                  <div className={styles.panel}>
                      <div className={styles.row}>
                          <TextItem value={"多云"} title={"天气"}/>
                          <TextItem value={"18km"} title={"能见度"}/>
                          <TextItem value={"东北风"} title={"风向"}/>
                          <TextItem value={"2级"} title={"风力"}/>
                      </div>
                      <div className={styles.row}>
                          <TextItem value={"8km"} title={"风速/小时"}/>
                          <TextItem value={"0.8"} title={"降水量"}/>
                          <TextItem value={"64"} title={"相对湿度"}/>
                          <TextItem value={"908"} title={"气压"}/>
                      </div>
                  </div>
                  <div>
                      G2
                  </div>
                  <div>sd</div>
                  <div>sd</div>
                  <div>sd</div>
                  <div>sd</div>
                  <div>sd</div>
                  <div>sd</div>
                  <div>sd</div>
                  <div>sd</div>
                  <div>sd</div>
                  <div>sd</div>
                  <div>sd</div>
                  <div>sd</div>
                  <div>sd</div>
                  <div>sd</div>
                  <div>sd</div>
                  <div>sd</div>
                  <div>sd</div>
                  <div>sd</div>
                  <div>sd</div>
                  <div>sd</div>
                  <div>sd</div>
                  <div>sd</div>
                  <div>sd</div>
                  <div>sd</div>
                  <div>sd</div>
                  <div>sd</div>
                  <div>sd</div>
                  <div>sd</div>
                  <div>sd</div>
                  <div>sd</div>
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
