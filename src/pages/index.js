import styles from './index.less';
import IndexCard1 from '@/components/IndexCard1';
import IndexCard2 from '@/components/IndexCard2';
import CenterSpin from '@/components/CenterSpin';
import React from "react";
import {connect} from "dva";
import {Carousel} from "antd";
import Native from "@/util/native";

@connect(({apps, loading}) => {
    return {
        weather: apps.generalWeather,
        isLoading: loading.effects['apps/findGeneralWeather']
    };
}, dispatch => ({
    $findGeneralWeather: (args = {}) => dispatch({type: 'apps/findGeneralWeather', ...args}),
}))
class index extends React.Component {

    componentDidMount() {
        document.title = '天气';
        Native.addListeners();
    }

    render() {
        let {weather, isLoading} = this.props;
        return (
            <div className={styles.page}>
                {Object.keys(weather).length <= 0 ? <CenterSpin/> : <Carousel effect="fade">
                    <div>
                        <IndexCard1 {...weather} onClickRefresh={this.onClickRefresh}/>
                    </div>
                    <div>
                        <IndexCard2 {...weather}/>
                    </div>
                </Carousel>}
            </div>
        );
    }

    /**
     * 刷新
     */
    onClickRefresh = () => {
        let {$findGeneralWeather, isLoading = true} = this.props;
        if (isLoading) {
            return;
        }
        Native.getLocation(({lat, lng}) => {
            $findGeneralWeather({
                payload: {
                    lng,
                    lat
                },
            });
        });
    };

}

export default index;
