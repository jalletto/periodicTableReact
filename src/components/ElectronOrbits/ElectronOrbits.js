import React, { Component } from 'react';
import Orbit from '../Orbit/Orbit'
import './ElectronOrbits.css'

class ElectronOrbits extends Component {

    render() {
        
        return (
            <div className="electrons-container">
                <Orbit element={this.props.element } shells={ this.props.shells.slice(0) }/>
            </div>
        );
    }
}

export default ElectronOrbits;
