import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {rootState} from "../types/types";

type Props = {
    isAuth: boolean;
};


const mapStateToPropsForRedirect = (state: rootState): Props => ({
    isAuth: state.auth.isAuth,
});

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {

    class WithAuth extends React.Component<Props & P> {
        render() {
            if (!this.props.isAuth) {
                return <Redirect to={'/login'} />;
            }
            return <WrappedComponent {...this.props} />;
        }
    }

    // @ts-ignore
    return connect(mapStateToPropsForRedirect)(WithAuth);
};

export default withAuth;
