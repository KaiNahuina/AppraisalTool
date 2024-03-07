import React from 'react';
import './Rating.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile, faFaceMeh, faFaceFrown, faFaceDizzy, faFaceSmileBeam } from '@fortawesome/free-solid-svg-icons';


//Value needs to be implemented
const Rating = ({ value }) => {
    const getLabel = () => {
        if (value >= 4.5) {
            return 'Excellent';
        } else if (value >= 3.5) {
            return 'Good';
        } else if (value >= 2.5) {
            return 'Average';
        } else if (value >= 1.5) {
            return 'Poor';
        } else {
            return 'Very Poor';
        }
    };

    const getFace = () => {
        if (value >= 4.5) {
            return <FontAwesomeIcon icon={faFaceSmileBeam}/>;
        } else if (value >= 3.5) {
            return <FontAwesomeIcon icon={faFaceSmile} />;
        } else if (value >= 2.5) {
            return <FontAwesomeIcon icon={faFaceMeh} />;
        } else if (value >= 1.5) {
            return <FontAwesomeIcon icon={faFaceFrown} />;
        } else {
            return <FontAwesomeIcon icon={faFaceDizzy} />;
        }
    };

    return (
        <div className="rating">
            <div className="face">{getFace()}</div>
            <div className="label">{getLabel()}</div>
        </div>
    );
};

export default Rating;
