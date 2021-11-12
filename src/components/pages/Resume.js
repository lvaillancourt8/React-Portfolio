import React from 'react';

function Resume() {
    return (
        <div className="container">
            <h1 style={{ textAlign: 'center', marginTop: 50 }}>Resume</h1>
            <div style={{ marginTop: 30 }} className="row justify-content-md-center">
                <div className="col-sm-10 col-md-4 techList">
                    <h3>Front End Technology</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>React</li>
                        <li>IndexedDB</li>
                    </ul>
                    <h3>Back End Technology</h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>Web APIs</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>SQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div className="col-sm-10 col-md-2">
                    <a class="btn btn-primary" href="/assets/images/LV_resume.pdf" download="LV_resume.pdf" >Download My Resume</a>
                </div>
            </div>
        </div>
    );
}

export default Resume;