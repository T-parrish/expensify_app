// Higher order component -> component that renders another component
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info} </p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p> This is private info!</p>
            <WrappedComponent {...props} />
        </div>
    );
};

// requireAuthentication
// wrapping the ternary operator components in ()
// allows you to break it into multiple lines for readability
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
            ) : (
                <p>You need to log in, ya dingus!</p>
            )}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="here's the secret" />, document.getElementById('app'));