import React from 'react';

const LoadingPage = () => (
    <div className="loader-container">
        <div className="animation-wrapper">
            <div className="wrapper">
                <div className="loaderBall__one"></div>
                <div className="shadow__one"></div>
            </div>
            <div className="wrapper">
                <div className="loaderBall__two"></div>
                <div className="shadow__two"></div>
            </div>
            <div className="wrapper">
                <div className="loaderBall__three"></div>
                <div className="shadow__three"></div>
            </div>
            <div className="wrapper">
                <div className="loaderBall__four"></div>
                <div className="shadow__four"></div>
            </div>    
            <div className="wrapper">
                <div className="loaderBall__five"></div>
                <div className="shadow__five"></div>
            </div>
        </div>
        <div className="loader__title">
            <h1>Loading...</h1>
        </div>
    </div>
);

export default LoadingPage;