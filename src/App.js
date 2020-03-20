import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import UrlShortenerState from "./context/urlshortener/UrlShortenerState";
import AuthState from "./context/auth/AuthState";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";

function App() {
    return (
        <AuthState>
            <UrlShortenerState>
                <Router>
                    <Fragment>
                        <Navbar />
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Home} />
                            </Switch>
                        </div>
                    </Fragment>
                </Router>
            </UrlShortenerState>
        </AuthState>
    );
}

export default App;
