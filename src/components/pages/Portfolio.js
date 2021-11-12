import React from 'react';

function Portfolio() {
    return (
        <div className="container">
            <h1 style={{ textAlign: 'center', marginTop: 50 }}>My Projects</h1>
            <div style={{ marginTop: 30 }} className="card-deck row">
                <div className="card col-sm-12 col-md-3">
                    <img className="card-img-top" src="/assets/images/welcome.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Welcome Neighbor</h5>
                        <p className="card-text">Welcome Neighbor is a web application that allows Users to connect to people in their Neighborhood on a more intimate level.</p>
                    </div>
                    <div className="card-footer">
                        <p><a href="https://github.com/delaluz12/Welcome-Neighbor">GitHub Repo</a></p>
                        <p><a href="https://hello-neighbor.herokuapp.com/">Live App</a></p>
                    </div>
                </div>
                <div className="card col-sm-12 col-md-3">
                    <img className="card-img-top" src="/assets/images/hometown.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Hometown Explorer</h5>
                        <p className="card-text">Web App randomly finds a brewery and a restaurant in your zip-code for a fun night on the town!</p>
                    </div>
                    <div className="card-footer">
                        <p><a href="https://github.com/Jackgoers96/Hometown-Explorer">GitHub Repo</a></p>
                        <p><a href="https://jackgoers96.github.io/Hometown-Explorer/">Live App</a></p>
                    </div>
                </div>
                <div className="card col-sm-12 col-md-3">
                    <img className="card-img-top" src="/assets/images/budgetApp.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Budget Tracker</h5>
                        <p className="card-text">With this online budget tracker, users can add expenses and deposits to their budget with or without an internet connection. After entering transactions offline, their entries will populate when brought back online.</p>
                    </div>
                    <div className="card-footer">
                        <p><a href="https://github.com/lvaillancourt8/Budget-Tracker">GitHub Repo</a></p>
                        <p><a href="https://lv-budget-app.herokuapp.com/">Live App</a></p>
                    </div>
                </div>
                <div className="card col-sm-12 col-md-3">
                    <img className="card-img-top" src="/assets/images/codequiz.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Code Quiz</h5>
                        <p className="card-text">A timed quiz on JavaScript fundamentals that stores high scores and displays a leader board.</p>
                    </div>
                    <div className="card-footer">
                        <p><a href="https://github.com/lvaillancourt8/Code-Quiz">GitHub Repo</a></p>
                        <p><a href="https://lvaillancourt8.github.io/Code-Quiz/">Live App</a></p>
                    </div>
                </div>
                <div className="card col-sm-12 col-md-3">
                    <img className="card-img-top" src="/assets/images/noteTaker.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Note Taker</h5>
                        <p className="card-text">A simple web app that allows the user to write and save notes to keep track of tasks they need to complete.</p>
                    </div>
                    <div className="card-footer">
                        <p><a href="https://github.com/lvaillancourt8/Note-Taker">GitHub Repo</a></p>
                        <p><a href="https://lv-note-taker.herokuapp.com/">Live App</a></p>
                    </div>
                </div>
                <div className="card col-sm-12 col-md-3">
                    <img className="card-img-top" src="/assets/images/techblog.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Tech Blog</h5>
                        <p className="card-text">Tech blog web app that allows users to create an account, publish blog posts and comment on the posts of others.</p>
                    </div>
                    <div className="card-footer">
                        <p><a href="https://github.com/lvaillancourt8/MVC-Tech-Blog">GitHub Repo</a></p>
                        <p><a href="https://lv-tech-blog.herokuapp.com/">Live App</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;