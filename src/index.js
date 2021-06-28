import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Loader from "./component/Loader/Loader";
import SplashScreen from "./layout/SplashScreen/SplashScreen";
import Home from "./layout/Home/Home";
import JobsList from "./layout/Jobs/JobsList/JobsList";
import Chat from "./layout/Chat/Chat";
import Profile from "./layout/Profile/Profile";
import Settings from "./layout/Settings/Settings";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/app.scss";

class App extends Component {
     constructor(props) {
        super(props);
        this.state = {
            loadingLD: true,
            loadingSS: false,
            loadingHome: false,
        };
    }
    // componentDidMount() {
    //     this.showNewLook();
    // }
    //  componentWillUnmount() {
    //     clearTimeout(this.LDTimeout);
    //     clearTimeout(this.SSTimeout);
    // }

    // showNewLook = () => {
    //     this.LDTimeout = setTimeout(() => {
    //         this.setState({ loadingLD: false, loadingSS: true });
    //         this.showHome();
    //     }, 6000);
    // }

    // showHome = () => {
    //     this.SSTimeout = setTimeout(() => {
    //     this.setState({ loadingSS: false, loadingHome: true });
    //     }, 2500);
    // };
    render() {
        // if(this.state.loadingLD) {
        //     return <Loader/>
        // }
        // if(this.state.loadingSS) {
        //     return (
        //         <BrowserRouter>
        //             <Switch>  
        //                  <SplashScreen/>
        //             </Switch>
        //         </BrowserRouter>
        //     )
        // }
        // if(this.state.loadingHome) {
        //     return (
        //         <BrowserRouter>
        //             <Switch>    
        //                 <Route path="/" exact component={Home}/>
        //                 <Route path="/jobs" exact component={Jobs}/>
        //                 <Route path="/chat" exact component={Chat}/>
        //                 <Route path="/profile" exact component={Profile}/>
        //                 <Route path="/settings" exact component={Settings}/>
        //             </Switch>
        //         </BrowserRouter>
        //     )
        // }
        return(
            <BrowserRouter>
                <Switch>    
                    <Route path="/" exact component={Home}/>
                    <Route path="/jobs" exact component={JobsList}/>
                    <Route path="/chat" exact component={Chat}/>
                    <Route path="/profile" exact component={Profile}/>
                    <Route path="/settings" exact component={Settings}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("App"));

