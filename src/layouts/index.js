import React from "react";

function BasicLayout(props) {
    return (
        <div style={{height: '100%'}}>
            {props.children}
        </div>
    );
}

export default BasicLayout;
