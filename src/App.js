import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import UrlShortenerState from "./context/urlshortener/UrlShortenerState";
import AlertState from "./context/alert/AlertState";
import AuthState from "./context/auth/AuthState";
import Alerts from "./layout/Alerts";

import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

function App() {
    return (
        <AuthState>
            <UrlShortenerState>
                <AlertState>
                    <Router>
                        <Fragment>
                            <Navbar />
                            <div className="container">
                                <Alerts />
                                <Switch>
                                    <Route exact path="/" component={Home} />
                                    <Route
                                        exact
                                        path="/about"
                                        component={About}
                                    />
                                    <Route
                                        exact
                                        path="/register"
                                        component={Register}
                                    />
                                    <Route
                                        exact
                                        path="/Login"
                                        component={Login}
                                    />{" "}
                                </Switch>
                            </div>
                        </Fragment>
                    </Router>
                </AlertState>
            </UrlShortenerState>
        </AuthState>
    );
}

export default App;
