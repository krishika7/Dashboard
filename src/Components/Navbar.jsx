    import React from 'react';

    function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container-fluid">
            <a className="navbar-brand" href="/#">FeetWings</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse  w-100 order-3" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <a className="nav-link" href="/#">Our Products</a>
                </li>
                <li className="nav-item">
                <a className="nav-link"href="/#">Insights</a>
                </li>
                <li className="nav-item">
                <a className="nav-link"href="/#">Smart Yarn</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#">About</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/#">Contact</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>

        </div>
    );
    };

    export default Navbar;

