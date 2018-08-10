import React, { Component } from 'react';
import Orbit from '../Orbit/Orbit'
import './ElectronOrbits.css'

class ElectronOrbits extends Component {

    render() {
        
        return (
            <div className="electrons-container">
                <Orbit innerOrbits={ this.props.shells.length }/>
            </div>
        );
    }
}

export default ElectronOrbits;
