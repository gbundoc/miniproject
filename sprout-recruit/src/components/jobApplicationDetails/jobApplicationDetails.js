import React from 'react';
//import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import {Panel} from 'react-bootstrap';
//import FontAwesome from "react-fontawesome";
var FontAwesome = require('react-fontawesome');
const jobApplicationDetails = () => {
    return (
        <Panel>
            <Panel.Body>
                <p >
                    <FontAwesome className='fa-angle-left' name='angle-left' size='2x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
                    <h2 className="title_green">Customer Srvice Representative</h2>
                </p>
                <small>Timeline and Interview Notes</small>
                <hr />

                <div>
                <ul className="timeline">
                    <li className="timeline-inverted">
                        <div className="timeline-badge"><FontAwesome className='fas fa-plus' name='fa-plus' size='1x' style={{ textShadow: '0 1px 0 rgba(200, 200, 200, 0.1)' }} /></div>
                        <div className="timeline-text">
                            <p>Applicant Added on March 2, 2018</p>
                        </div>
                    </li>
                    <li className="timeline-inverted passed">
                        <div className="timeline-badge"><FontAwesome className='fas fa-edit' name='fa-edit' size='1x' style={{ textShadow: '0 1px 0 rgba(200, 200, 200, 0.1)' }} /></div>
                        <div className="timeline-panel">
                            <div className="timeline-body">
                                <h4 className="timeline-title">General Examination</h4>
                                <div className="timeline-date"> August 4, 2017</div>
                                <div className="timeline-status title_green">Passed</div>
                                <div className="timeline-reviewedby">
                                    <img src="http://via.placeholder.com/50x50" alt="" className="img_circle" />
                                    <img src="http://via.placeholder.com/50x50" alt="" className="img_circle" />
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="timeline-inverted inprogress">
                        <div className="timeline-badge"><FontAwesome className='fas fa-plus-circle' name='fa-plus-circle' size='1x' style={{ textShadow: '0 1px 0 rgba(200, 200, 200, 0.1)' }} /></div>
                        <div className="timeline-panel">
                            <div className="timeline-body">
                                <h4 className="timeline-title title_green">General Examination</h4>
                                <div className="timeline-date"> August 4, 2017</div>
                                <div className="timeline-status title_green">Passed</div>
                                <div className="timeline-reviewedby">
                                    <img src="http://via.placeholder.com/50x50" alt="" className="img_circle" />
                                    <img src="http://via.placeholder.com/50x50" alt="" className="img_circle" />
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                    
                </div>

            </Panel.Body>
        </Panel>

        
    )
}

export default jobApplicationDetails;

