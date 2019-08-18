import styles from './index.less';
import React from 'react';
import classname from 'classname';

class index extends React.PureComponent {
    render() {
        let { className = {}, children, style = {} } = this.props;
        return (<div className={classname(className, styles.component)} style={style}>{children}</div>);
    }

}

export default index;