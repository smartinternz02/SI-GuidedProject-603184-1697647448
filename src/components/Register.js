import React from 'react';
import './styles.css';

const Register = () => {
    return (

        <div className="container-fluid bg-register-image">
            <div className="row justify-content-center align-items-center">
                <div>
                    <div className="card card-register">
                        <div className="card-header bg-primary text-white text-center">
                            <h2>Register</h2>
                        </div>
                        <div className="card-body">
                            <form method="POST" action="http://localhost:5000/register">
                                <div className="form-group">
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" className="form-control" id="name" name="name" required />
                                </div>
                                <br />
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" className="form-control" id="email" name="email" required />
                                </div>
                                <br />
                                <div className="form-group">
                                    <label htmlFor="password">Password:</label>
                                    <input type="password" className="form-control" id="password" name="password" required />
                                </div>
                                <br />
                                <button type="submit" className="btn btn-primary btn-block btn-lg">Register</button>
                            </form>
                            <p className="text-center mt-4">Already have an account? <a href="/login" className="text-primary">Login</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;