import styles from './index.less';
import IndexCard1 from '@/components/IndexCard1';
import IndexCard2 from '@/components/IndexCard2';
import React from "react";
import {connect} from "dva";
import {Carousel} from "antd";

@connect(({apps, loading}) => {
    return {
        weather: apps.generalWeather,
        isLoading: loading.effects['apps/findGeneralWeather']
    };
}, dispatch => ({
    $findNowWeather: (args = {}) => dispatch({type: 'apps/findNowWeather', ...args}),
}))
class index extends React.Component {

    render() {
        let {weather, isLoading = true} = this.props;
        if (isLoading) {
            return <div/>;
        }
        return (
            <div className={styles.page}>
                <Carousel effect="fade">
                    <div>
                        <IndexCard1 {...weather}/>
                    </div>
                    <div>
                        <IndexCard2 {...weather}/>
                    </div>
                </Carousel>
            </div>
        );
    }

}

export default index;
