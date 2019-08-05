import styles from './index.less';
import React from 'react';
import classname from 'classname';

class index extends React.PureComponent {
    render() {
        let { className = {}, value } = this.props;
        return (<div className={classname(className, styles.component)}/>);
    }
}

export default index;