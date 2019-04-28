import styles from "./index.less";
import React from "react";
import classname from "classname";
import {Spin} from "antd";

class index extends React.PureComponent {
    render() {
        let {className = {}, value} = this.props;
        return (<div className={classname(className, styles.component)}>
            <Spin size="large" />
        </div>);
    }

}

export default index;