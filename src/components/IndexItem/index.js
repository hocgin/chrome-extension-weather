import styles from './index.less';
import React from 'react';
import classname from 'classname';

class index extends React.PureComponent {
    render() {
        let { className = {}, title = '', tag = '', desc } = this.props;
        return (<div className={classname(className, styles.component)}>
            <div className={styles.titleWrapper}>
                <span className={styles.title}>{title}</span> <span className={styles.tag}>{tag}</span>
            </div>
            {desc && <div className={styles.text}>
                {desc}
            </div>}
        </div>);
    }

}

export default index;