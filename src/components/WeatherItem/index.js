import styles from './index.less';
import React from 'react';
import classname from 'classname';
import Util from "@/util/util";

class index extends React.PureComponent {
    render() {
        let { className = {}, time = 'Now', temperature = 'N/A', skycon = '0' } = this.props;
        return (<div className={classname(className, styles.component)}>
            <div className={styles.temperature}>{temperature}°</div>
            <div className={styles.image}>
                <img src={Util.getSkyconSvg(skycon)} alt={`${skycon}`}/>
            </div>
            <div className={styles.time}>{time}</div>
        </div>);
    }

}

export default index;