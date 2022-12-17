import React from 'react';

const Navigation = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark text-light sticky-top">
                <div className="container">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Sifo</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ float: "right" }}>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#news">News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#service">Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#blog">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#product">Product</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#testimonial">Testimonial</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navigation;   