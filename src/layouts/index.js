import React from 'react';

class BasicLayout extends React.Component {

    componentDidMount() {
        document.getElementById('root').style.overflow = 'hidden';
    }

    render() {
        let { children } = this.props;
        return (<div style={{ height: '100%' }}>
            {children}
        </div>);
    }
}

export default BasicLayout;
