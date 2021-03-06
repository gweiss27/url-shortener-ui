import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";

const Login = props => {
    const authContext = useContext(AuthContext);
    const { login, error, clearErrors, isAuthenticated } = authContext;

    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push("/");
        }

        if (error === "Invalid Credentials") {
            setAlert(error, "danger");
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const { username, password } = user;

    const onChange = e =>
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });

    const onSubmit = e => {
        console.log("ON SUBMIT!");
        e.preventDefault();
        if (username === "" || password === "") {
            setAlert("Please provide your credentials", "danger");
        } else {
            console.log(username, password);
            login({ username, password });
        }
    };

    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Login</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                    />
                </div>
                <input
                    type="submit"
                    value="Login"
                    className="btn btn-primary btn-block"
                />
            </form>
        </div>
    );
};

export default Login;
