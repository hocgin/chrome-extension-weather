import styles from "./index.less";
import React from "react";
import classname from "classname";

class index extends React.PureComponent {
    render() {
        let {className = {}, value, title} = this.props;
        return (<div className={classname(className, styles.component)}>
            <div className={styles.value}>{value}</div>
            <div className={styles.title}>{title}</div>
        </div>);
    }

}

export default index;