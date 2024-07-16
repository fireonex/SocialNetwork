import {LoginFormDataType} from "./LoginForm";
import React from "react";
import {Login} from "./Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {loggedInTC} from "../../redux/authReducer";
import {rootStateType} from "../../redux/redux-store";


type MapDispatchPropsType = {
    loggedInTC: (formData: LoginFormDataType) => void
}

type MapStatePropsType = {
    isAuth: boolean
}

type LoginContainerPropsType = MapStatePropsType & MapDispatchPropsType;

export class LoginContainer extends React.Component<LoginContainerPropsType> {

    render() {
        return (
            <Login loggedInTC={this.props.loggedInTC} isAuth={this.props.isAuth}/>
        );
    }
}


const mapStateToProps = (state: rootStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth
});

export default compose<React.ComponentType>(
    connect(mapStateToProps, {loggedInTC}),
)(LoginContainer);