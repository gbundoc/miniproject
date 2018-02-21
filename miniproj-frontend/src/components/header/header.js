import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Sprout</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    {/* <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
                    <Link className="nav-link" to="/" >Jobs</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/" >Applicants</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/" >User</Link>
                </li>
                <li className="nav-item">
                    <button type="button" className="btn btn-success btn-sm">
                        <Link className="nav-link" to="/login" >Login</Link>
                    </button>
                </li>
            </ul>
            
            
        </div>
        </nav>
        
);

export default Header