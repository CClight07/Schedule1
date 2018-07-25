import React, { Component } from 'react';

import LibraryCourse from './librarycourse';

class Library extends Component {
    render() {
        return (
            <div className="library">
                 <h1 className="library_title">Library Title</h1>
                 <LibraryCourse/>
                 <LibraryCourse/>
                 <LibraryCourse/>
            </div>
        )
    }
}

export default Library;