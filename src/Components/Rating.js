import React from 'react';
import './Rating.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceMeh, faFaceFrown, faFaceDizzy, faFaceSmileBeam } from '@fortawesome/free-solid-svg-icons';


//Value needs to be implemented
const Rating = ({ points }) => {

    const getLabel = () => {
        if (points >= 47) {
            return 'Low Risk';
        } else if (points >= 32 && 46 >= points) {
            return 'Average Risk';
        } else if (points >= 0 && 31 >= points) {
            return 'Risky';
        } else {
            return 'Very Risky';
        }
    };

    const getFace = () => {
        if (points >= 47) {
            return <FontAwesomeIcon icon={faFaceSmileBeam}/>;
        } else if (points >= 32 && 46 >= points) {
            return <FontAwesomeIcon icon={faFaceMeh} />;
        } else if (points >= 0 && 31 >= points) {
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
