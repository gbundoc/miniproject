import React from 'react';
import { Link } from 'react-router-dom';

const JobApplicationsList = () => {
    return (
        <div>
            <h1>Job Applications List</h1>
            <Link to="/jobapplicationspost">Job Item</Link>
        </div>
    )
}

export default JobApplicationsList;