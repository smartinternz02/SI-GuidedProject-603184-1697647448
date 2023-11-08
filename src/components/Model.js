import React from 'react';

function Model() {
    const handleClick = () => {
        fetch('http://localhost:5000/predict')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then((data) => {
                console.log(data);
                // Redirect to /predict page
                window.location.href = '/predict';
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });
    };
    return (
        <div className="container-fluid bg-model-image">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <a className="navbar-brand text-primary" href="/">
                    Home
                </a>
            </nav>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card bg-transparent border-0 card-model">
                        <div className="card-header">
                            <h1 className="text-center text-light">Welcome to the Model</h1>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <button onClick={handleClick} className="btn btn-primary btn-lg btn-animate">
                                    Click to see parking slot
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
function handleClick() {
    window.location.href = 'http://localhost:5000/predict';
}

export default Model;