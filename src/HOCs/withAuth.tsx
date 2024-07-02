import React from 'react';
import {Redirect} from "react-router-dom";

// HOC named withAuth

type PropsType = {
    isAuth: boolean
}

const withAuth = <P extends object>( WrappedComponent: React.ComponentType<P>) => {

    class WithAuth extends React.Component<PropsType & P> {

        render() {
            if (!this.props.isAuth) {
                return <Redirect to={'/login'}/>
            } else {
                return <WrappedComponent {...this.props} />;
            }
        }

    }

    return WithAuth;
};

export default withAuth;
