import styles from './index.less';
import React from 'react';
import classname from 'classname';
import { Tag } from 'antd';

class index extends React.PureComponent {
    render() {
        let { className = {} } = this.props;
        return (<div className={classname(className, styles.component)}>
            <div className={styles.titleWrapper}>
                <span className={styles.title}>舒适指数</span> <span className={styles.tag}>较舒适</span>
            </div>
            <div className={styles.text}>
                白天天气晴好，您在这种天气条件下，会赶紧早晚凉爽、舒适，午后偏热。
            </div>
        </div>);
    }

}

export default index;