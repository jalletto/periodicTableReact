import React, { Component } from 'react';
import Orbit from '../Orbit/Orbit'

class ElectronOrbits extends Component {

    buildOrbits(){
        let diameter = 80;
        let top = 40;
        let left = 30; 
        let electronPos = 10
       return this.props.shells.map((shell, i) =>{
            diameter -= 10
            top += 5
            left += 5
            electronPos -= 2.5
            return <Orbit key={i} diameter={diameter} top={top} left={left} electronPos={electronPos} /> 

        })
    }

    render() {
        const Orbits = this.buildOrbits()
        return (
            <div className="electrons-container">
                {Orbits}
            </div>
        );
    }
}

export default ElectronOrbits;
