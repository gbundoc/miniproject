import React from 'react';
import {Link} from 'react-router-dom';
import Header from "../header/header";

const HomePage = () => (
    <div>
        <Header />
            <div className="container" >
                <h1>Home Page</h1>
            </div>
        {/* <Link to="/login" >Login</Link> */}
    </div>
);

export default HomePage