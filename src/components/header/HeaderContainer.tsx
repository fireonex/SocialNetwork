import React from "react";
import { Header } from "./Header";
import axios from "axios";
import { connect, ConnectedProps } from "react-redux";
import { rootStateType } from "../../redux/redux-store";
import { setAuthUserDataAC } from "../../redux/authReducer";
import { withRouter, RouteComponentProps } from "react-router-dom";

export type AuthResponseType = {
    resultCode: number;
    messages: string[];
    data: {
        id: number;
        email: string;
        login: string;
    };
};

// Типизация параметров маршрута
interface MatchParams {
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

        axios.get<AuthResponseType>(
            `https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true }
        ).then((response) => {
            if (response.data.resultCode === 0) {
                let { id, login, email } = response.data.data;
                this.props.setAuthUserDataAC(id, email, login);
            }
        });
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

const connector = connect(mapStateToProps, { setAuthUserDataAC });

export default connector(withRouter(HeaderContainer));
