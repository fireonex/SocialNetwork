import HeaderContainer from "./components/header/HeaderContainer";
import {Navbar} from "./components/navbar/Navbar";
import {BrowserRouter, Route, RouteComponentProps, withRouter} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import Login from "./components/login/LoginContainer";
import {S} from './App.styles'
import React, {Component, Suspense} from "react";
import {connect, ConnectedProps, Provider} from "react-redux";
import {initializeAppTC} from "./redux/appReducer";
import {rootStateType, store} from "./redux/redux-store";
import {Preloader} from "./components/common/preloader/Preloader";

const DialogsContainer=
    React.lazy(() => import("./components/dialogs/DialogsContainer"))

const ProfileContainer=
    React.lazy(() => import("./components/profile/ProfileContainer"))

const UsersContainer=
    React.lazy(() => import("./components/users/UsersContainer"))


// Типизация параметров маршрута
type MatchParams = {
    //userId?: string;
}


const mapDispatchToProps = {
    initializeApp: initializeAppTC
};

const mapStateToProps = (state: rootStateType) => ({
    initialized: state.app.initialized
});


const connector = connect(mapStateToProps, mapDispatchToProps);

// Типизация пропсов
type AppContainerPropsType = ConnectedProps<typeof connector> & RouteComponentProps<MatchParams>;

class App extends Component<AppContainerPropsType> {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <S.AppWrapper>
                <HeaderContainer/>
                <Navbar/>
                <S.AppContent>
                    <Suspense fallback={'Loading.........'}>
                        <Route path='/profile/:userId?' exact component={ProfileContainer}/>
                        <Route path='/dialogs' exact component={DialogsContainer}/>
                        <Route path='/users' exact component={UsersContainer}/>
                    </Suspense>
                        <Route path='/news' exact component={News}/>
                        <Route path='/music' exact component={Music}/>
                        <Route path='/login' exact component={Login}/>
                </S.AppContent>
            </S.AppWrapper>
        );
    }
}


const AppContainer = withRouter(connector(App));

export const SocialNetworkApp: React.FC = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}


