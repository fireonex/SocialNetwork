import React from "react";
import { connect } from "react-redux";
import { loggedInTC } from "../model/authReducer";
import { LoginFormData } from "../types";
import { Login } from "./Login";
import { rootState } from "../../../common/types/types";
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

const mapStateToProps = (state: rootState) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<rootState, unknown, Action>) => ({
    loggedIn: (formData: LoginFormData) => dispatch(loggedInTC(formData)),
});

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class LoginContainer extends React.Component<Props> {

    loginHandler = (formData: LoginFormData) => {
        this.props.loggedIn(formData);
    };


    render() {
        return (
            <Login
                loggedIn={this.loginHandler}
                isAuth={this.props.isAuth}
                captchaUrl={this.props.captchaUrl}
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
