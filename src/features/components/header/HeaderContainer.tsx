import React from "react";
import {Header} from "./Header";
import {connect, ConnectedProps} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {rootState} from "../../../common/types/types";
import {loggedOutTC} from "../../auth/model/authReducer";


// Типизация параметров маршрута
type MatchParams = {
    userId?: string;
}


// Типизация пропсов
type Props = ConnectedProps<typeof connector> & RouteComponentProps<MatchParams>;

class HeaderContainer extends React.Component<Props> {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        //need to fix
        if (!userId && this.props.isAuth) {
            userId = String(this.props.loggedInUserID);
        }
        // if (!userId && !this.props.isAuth) {
        //     <Redirect to={'/login'}/>
        // }

        //this.props.authMeTC()
    }

    render() {
        const { isAuth, loggedOutTC, login } = this.props;
        return <Header isAuth={isAuth} loggedOutTC={loggedOutTC} login={login}/>;
    }
}

const mapStateToProps = (state: rootState) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.email,
    loggedInUserID: state.auth.id
});

const connector = connect(mapStateToProps, {
    // authMeTC: getAuthMeTC,
    loggedOutTC
});

export default connector(withRouter(HeaderContainer));
