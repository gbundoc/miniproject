import React from 'react';
//import { Link } from 'react-router-dom';

import {Row, Col} from 'react-bootstrap';

import ApplicantDetailsHeader from "../applicantDetailsHeader/ApplicantDetailsHeader";
import JobApplicationDetails from "../jobApplicationDetails/jobApplicationDetails";

const JobApplicationsPost = () => {
    return (
        <div className="page-wrap">
            <ApplicantDetailsHeader />
            <Row>
                <Col md={3}>
                </Col>
                <Col md={9}>
                    <JobApplicationDetails />
                </Col>
            </Row>
        </div>
    )
}

export default JobApplicationsPost;