import styles from './index.less';
import React from 'react';
import classname from 'classname';

class index extends React.PureComponent {
    render() {
        let { className = {}, children } = this.props;
        return (<div className={classname(className, styles.component)}>{children}</div>);
    }

}

export default index;