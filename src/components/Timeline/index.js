import styles from './index.less';
import React from 'react';
import classname from 'classname';
import { Timeline } from 'antd';
import Util from '@/util/util';

class index extends React.PureComponent {
    render() {
        let { className = {}, datasource = [] } = this.props;
        return (<div className={classname(className, styles.component)}>
            <Timeline>
                {(datasource || []).map(({ date, skycon, maxTemp, minTemp }) => (
                  <Timeline.Item>
                      <div className={styles.WItem}>
                          <div>{date}</div>
                          <div className={styles.image}><img src={Util.getSkyconSvg(skycon)} alt={`${skycon}`}/></div>
                          <div>↑{maxTemp}&deg;</div>
                          <div>↓{minTemp}&deg;</div>
                      </div>
                  </Timeline.Item>))}

            </Timeline>
        </div>);
    }


}

export default index;