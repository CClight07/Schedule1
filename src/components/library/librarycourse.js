import React, { Component } from 'react';

import Icon from '../icons';

import Arrow from '../arrow';

class LibraryCourse extends Component {
    render() {
        return(
            <div className="library-course">
                <div className="library-course__title-arrow">
                <label className="library-course_title">Problem Solving</label>
                { Icon('fas fa-check', 'library-course__icon') }
                </div>
                <Arrow className="library-course__arrow"/>
                {/* action button component */}
                <div className="library-course_description">
                     <label>Course Discription</label>
                     <p>Ipsum" descobrirà molts llocs web encara a les baceroles. Diverses versions han anat evolucionant al llarg dels anys, a vegades per acident, a vegades a propòsit (inserint humor i coses per l'estil</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse