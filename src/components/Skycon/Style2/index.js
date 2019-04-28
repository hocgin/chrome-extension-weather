import styles from "./index.less";
import React from "react";
import classname from "classname";
import WeatherIcon from "@/components/WeatherIcon";

class index extends React.PureComponent {
    render() {
        let {className = {}, value} = this.props;
        return (<div className={classname(className, styles.component)}>
            <WeatherIcon value={value}/>
        </div>);
    }

}

export default index;