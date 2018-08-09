import React, { Component } from 'react';
import './Electron.css'

class Electron extends Component {

    render() {

        return (
            <div className="electron" style={{top: this.props.top}} >
            </div>
        );
    }
}

export default Electron;
