import React from 'react';
//import { Link } from 'react-router-dom';
import {Grid} from 'react-bootstrap';
import './applicantDetailsHeader.css';

const ApplicantDetailsHeader = () => {
    return (
        <Grid fluid={true} className="adh_wrapper">
            <h2 className="title_green">James Reid</h2>
            <p>Accounting Staff at The World Lifestyle, Inc.</p>
            <small><span>Applying for Accounting Officer</span> | <span>Third Interview</span></small>
        </Grid>

        

    )
}

export default ApplicantDetailsHeader;