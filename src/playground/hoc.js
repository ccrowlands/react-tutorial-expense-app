

import React from "react";
import ReactDOM from "react-dom";


const Info = (props) => (
    <div>
        <p>The message is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>You need to sign in</p>}
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="Surprise!" />, document.getElementById("app"));

ReactDOM.render(<AuthInfo isAuthenticated={true} info="Surprise!" />, document.getElementById("app"));