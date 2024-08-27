import {BrowserRouter, Redirect, Route, RouteComponentProps, Switch, withRouter} from "react-router-dom";
import {S} from './App.styles';
import React, {Component, Suspense} from "react";
import {connect, ConnectedProps, Provider} from "react-redux";
import {initializeAppTC} from "../model/appReducer";
import HeaderContainer from "../../features/components/header/HeaderContainer";
import {Navbar} from "../../features/components/navbar/Navbar";
import {News} from "../../features/components/news/News";
import {Music} from "../../features/components/music/Music";
import {rootState} from "../../common/types/types";
import {store} from "../model/redux-store";
import {ConfigProvider, Layout} from "antd";
import {CustomSkeleton} from "../../common/commonComponents/antdComponents/CustomSkeleton";
import LoginContainer from "../../features/auth/ui/LoginContainer";
import {ErrorNotification} from "../../common/commonComponents/errorNotification/errorNotification";

const DialogsContainer = React.lazy(() => import('../../features/components/dialogs/ui/DialogsContainer'));
const ProfileContainer = React.lazy(() => import("../../features/components/profile/ui/profile/ProfileContainer"));
const UsersContainer = React.lazy(() => import("../../features/components/users/ui/UsersContainer"));

type MatchParams = {}

const mapDispatchToProps = {
    initializeApp: initializeAppTC
};

const mapStateToProps = (state: rootState) => ({
    initialized: state.app.initialized,
    error: state.app.error
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & RouteComponentProps<MatchParams>;

class App extends Component<Props> {
    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert('Some error occurred');
    };

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <CustomSkeleton/>
        }

        return (
            <S.AppWrapper>
                <S.AppSider breakpoint="lg" collapsedWidth="0">
                    <Navbar />
                </S.AppSider>
                <Layout>
                    <S.AppHeader>
                        <HeaderContainer />
                    </S.AppHeader>
                    <S.AppContent>
                        {this.props.error && <ErrorNotification message={this.props.error}/>}
                        <Suspense fallback={'Loading...'}>
                            <Switch>
                                <Route exact path='/profile/:userId?' component={ProfileContainer} />
                                <Route exact path='/dialogs' component={DialogsContainer} />
                                <Route exact path='/users' component={UsersContainer} />
                                <Route exact path='/news' component={News} />
                                <Route exact path='/music' component={Music} />
                                <Route exact path='/login' component={LoginContainer} />
                                <Route exact path='/'>
                                    <Redirect to='/profile' />
                                </Route>
                                <Route path='*' render={() => <div>404 NOT FOUND</div>} />
                            </Switch>
                        </Suspense>
                    </S.AppContent>
                </Layout>
            </S.AppWrapper>
        );
    }
}

const AppContainer = withRouter(connector(App));

export const SocialNetworkApp: React.FC = () => {
    return (
        <ConfigProvider>
            <BrowserRouter>
                <Provider store={store}>
                    <AppContainer />
                </Provider>
            </BrowserRouter>
        </ConfigProvider>
    );
};
