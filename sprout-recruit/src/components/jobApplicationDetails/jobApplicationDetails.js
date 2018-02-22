import React from 'react';
//import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import {Panel} from 'react-bootstrap';
import FontAwesome from "react-fontawesome";
const jobApplicationDetails = () => {
    return (
        <Panel>
            <Panel.Body>
                <FontAwesome className="fas fa-angle-left" name='rocket' size='2x' />
                <h2 className="title_green">Customer Srvice Representative</h2>
                <small>Timeline and Interview Notes</small>
                <hr />

                

            </Panel.Body>
        </Panel>

        
    )
}

export default jobApplicationDetails;

