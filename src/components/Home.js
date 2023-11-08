import React from 'react';

const Home = () => {
  return (
    <div className="container-fluid bg-image home-body">
      <div className="row">
        <div className="col-md-6">
          <div className="card move-up">
            <div className="card-header">
              <h2 className="display-4">Welcome to AI Enabled Car Parking System!</h2>
            </div>
            <div className="card-body">
              <h3 className='text-center'>
                This is a Car Parking System that allows you to park cars hassle-free.
              </h3>
              <h4 className="text-center">Please log in or register to continue</h4>
              <div className="row mt-5">
                <div className="col-md-6 padding-register">
                    <a href="/login" className="btn btn-login btn-lg btn-block">Login</a>
                </div>
                <div class="col-md-6">
                    <a href="/register" className="btn btn-register btn-lg btn-block">Register</a>
                </div>
              </div>
            </div>
          </div>
          <div className='padding-about'>
            <a href="/about" className="btn btn-about btn-lg btn-block">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;