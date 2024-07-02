import React from "react";
import {Header} from "./Header";
import {connect, ConnectedProps} from "react-redux";
import {rootStateType} from "../../redux/redux-store";
import {authMeTC} from "../../redux/authReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";


// Типизация параметров маршрута
type MatchParams = {
    userId?: string;
}


// Типизация пропсов
type HeaderContainerPropsType = ConnectedProps<typeof connector> & RouteComponentProps<MatchParams>;

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = '2';
        }

        this.props.authMeTC()
    }

    render() {
        const { isAuth, login } = this.props;
        return <Header isAuth={isAuth} login={login} />;
    }
}

const mapStateToProps = (state: rootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

const connector = connect(mapStateToProps, { authMeTC });

export default connector(withRouter(HeaderContainer));
