import styles from './index.less';
import React from 'react';
import classname from 'classname';

class index extends React.PureComponent {
    render() {
        let { className = {}, time, temperature, value } = this.props;
        return (<div className={classname(className, styles.component)}>
            <div className={styles.temperature}>{temperature}</div>
            <div className={styles.image}>{value}</div>
            <div className={styles.time}>{time}</div>
        </div>);
    }

}

export default index;