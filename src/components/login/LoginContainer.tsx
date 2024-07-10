import {LoginFormDataType} from "./LoginForm";
import React from "react";
import {Login} from "./Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {rootStateType} from "../../redux/redux-store";
import {loggedInTC} from "../../redux/authReducer";

type MapStatePropsType = {

};

type MapDispatchPropsType = {
    loggedInTC: (formData: LoginFormDataType) => void
}

export class LoginContainer extends React.Component<MapStatePropsType, MapDispatchPropsType>{

    // componentDidMount() {
    //     this.props.loggedInTC(formData)
    // }

    render() {
        return (
            <Login/>
        );
    }
}

const mapStateToProps = (state: rootStateType): MapStatePropsType => ({

});

export default compose<React.ComponentType>(
    connect(mapStateToProps, {loggedInTC}),
)(LoginContainer);