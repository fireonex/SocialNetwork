import {BrowserRouter, Redirect, Route, RouteComponentProps, Switch, withRouter} from "react-router-dom";
import {S} from './App.styles'
import React, {Component, Suspense} from "react";
import {connect, ConnectedProps, Provider} from "react-redux";
import {initializeAppTC} from "./appReducer";
import {Preloader} from "../common/commonComponents/preloader/Preloader";
import HeaderContainer from "../features/components/header/HeaderContainer";
import {Navbar} from "../features/components/navbar/Navbar";
import {News} from "../features/components/news/News";
import {Music} from "../features/components/music/Music";
import {Login} from "../features/auth/ui/Login";
import {rootState} from "../common/types/types";
import {store} from "./redux-store";


const DialogsContainer =
    React.lazy(() => import('../features/components/dialogs/ui/DialogsContainer'))

const ProfileContainer =
    React.lazy(() => import("../features/components/profile/ui/ProfileContainer"))

const UsersContainer =
    React.lazy(() => import("../features/components/users/ui/UsersContainer"))


// Типизация параметров маршрута
type MatchParams = {
    //userId?: string;
}


const mapDispatchToProps = {
    initializeApp: initializeAppTC
};

const mapStateToProps = (state: rootState) => ({
    initialized: state.app.initialized
});


const connector = connect(mapStateToProps, mapDispatchToProps);

// Типизация пропсов
type Props = ConnectedProps<typeof connector> & RouteComponentProps<MatchParams>;

class App extends Component<Props> {

    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert('Some error occurred')
    }

    // catchAllUnhandledErrors = (reason, promise) => {
    //     alert('Some error occurred')
    //  todo: реализовать глобальное выведение ошибки (как в тудулисте) через стейт в app-reducer
    //   99 урок, таймкод примерно 43:00 -
    // }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
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
                        <Switch>
                            <Route exact path='/profile/:userId?' component={ProfileContainer}/>
                            <Route exact path='/dialogs' component={DialogsContainer}/>
                            <Route exact path='/users' component={UsersContainer}/>
                            <Route exact path='/news' component={News}/>
                            <Route exact path='/music' component={Music}/>
                            <Route exact path='/login' component={Login}/>
                            <Route exact path='/'>
                                <Redirect to='/profile'/>
                            </Route>
                            <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                        </Switch>
                    </Suspense>
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


