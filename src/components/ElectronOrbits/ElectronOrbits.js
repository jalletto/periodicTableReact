import React, { Component } from 'react';
import Orbit from '../Orbit/Orbit'
import './ElectronOrbits.css'

class ElectronOrbits extends Component {

    render() {
        
        return (
            <div className="electrons-container">
                <Orbit shells={ this.props.shells }/>
            </div>
        );
    }
}

export default ElectronOrbits;
