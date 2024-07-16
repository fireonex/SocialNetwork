import React from 'react';
import { Redirect } from "react-router-dom";
import { rootStateType } from "../redux/redux-store";
import { connect } from "react-redux";

// Типизация пропсов для HOC
type MapStatePropsType = {
    isAuth: boolean;
};

type PropsType = MapStatePropsType;

const mapStateToPropsForRedirect = (state: rootStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
});

// HOC named withAuth
const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {

    class WithAuth extends React.Component<PropsType & P> {
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
