import React, { useState } from 'react';
import './styles.css';

const Login = () => {

    return (
        <div className="container-fluid bg-login-image">
            <div className="row">
                <div>
                    <div className="card border-0 move-up">
                        <div className="card-header">
                            <h1 className="text-center">Login</h1>
                        </div>
                        <div className="card-body">
                            <form method="POST" action="http://localhost:5000/login">
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" name="email" id="email" className="form-control" required />
                                </div>
                                <br />
                                <div className="form-group">
                                    <label htmlFor="password">Password:</label>
                                    <input type="password" name="password" id="password" className="form-control" required />
                                </div>
                                <br />
                                <button type="submit" className="btn btn-primary btn-block btn-lg">Login</button>
                            </form>
                            <p className="mt-3 text-danger">Invalid email or password</p>
                            <p className="text-center mt-4">Don't have an account? <a href="/register" className="text-danger">Create an account</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;