import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <h3>Leslie Vaillancourt</h3>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a
                                href="#aboutme"
                                aria-current="page"
                                onClick={() => handlePageChange('AboutMe')}
                                className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                            >
                                About Me
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                href="#portfolio"
                                aria-current="page"
                                onClick={() => handlePageChange('Portfolio')}
                                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                            >
                                Portfolio
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                href="#contact"
                                aria-current="page"
                                onClick={() => handlePageChange('Contact')}
                                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                            >
                                Contact
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                href="#resume"
                                aria-current="page"
                                onClick={() => handlePageChange('Resume')}
                                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                            >
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;