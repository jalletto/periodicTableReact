import React, { Component } from 'react';
import './Orbit.css'
import Electron from '../Electron/Electron'

class Orbit extends Component {

    render() {

        const innerOrbit = this.props.innerOrbits - 1 > 0 ? <Orbit innerOrbits={ this.props.innerOrbits - 1 }/> : null
        
        return (
            <div className="orbit"  >
                { innerOrbit }
               {/* <Electron top={ 8 } />  */}
            </div>
        );
    }
}

export default Orbit;
